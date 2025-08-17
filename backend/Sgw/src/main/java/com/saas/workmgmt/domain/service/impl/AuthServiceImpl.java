package com.saas.workmgmt.domain.service.impl;

import com.saas.workmgmt.domain.model.*;
import com.saas.workmgmt.domain.repo.*;
import com.saas.workmgmt.domain.service.AuthService;
import com.saas.workmgmt.security.JwtService;
import com.saas.workmgmt.web.dto.AuthDto.*;
import com.saas.workmgmt.web.error.BadRequestException;
import com.saas.workmgmt.web.error.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.Instant;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
    private final UserRepo userRepo;
    private final TenantRepo tenantRepo;
    private final UserRoleRepo userRoleRepo;
    private final RefreshTokenRepo refreshTokenRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    @Transactional
    public TokenResponse register(RegisterRequest req) {
        // Validate input
        if (req == null) {
            throw new BadRequestException("Register request cannot be null");
        }
        if (req.tenant() == null || req.tenant().trim().isEmpty()) {
            throw new BadRequestException("Tenant name cannot be empty");
        }
        if (req.name() == null || req.name().trim().isEmpty()) {
            throw new BadRequestException("User name cannot be empty");
        }
        if (req.email() == null || req.email().trim().isEmpty()) {
            throw new BadRequestException("Email cannot be empty");
        }
        if (req.password() == null || req.password().trim().isEmpty()) {
            throw new BadRequestException("Password cannot be empty");
        }

        String tenantName = req.tenant().trim();
        String slug = tenantName.toLowerCase().replaceAll("[^a-z0-9-]", "-").replaceAll("-+", "-").trim();
        if (slug.isEmpty()) {
            throw new BadRequestException("Invalid tenant name: slug cannot be empty");
        }

        log.info("Creating tenant with name: {}, slug: {}, plan: free, status: active", tenantName, slug);

        var tenant = Tenant.builder()
            .name(tenantName)
            .slug(slug)
            .plan("free") // Explicitly set to ensure no null
            .status("active") // Explicitly set to ensure no null
            .build();

        log.debug("Tenant before save: id={}, name={}, slug={}, plan={}, status={}, createdAt={}, updatedAt={}",
            tenant.getId(), tenant.getName(), tenant.getSlug(), tenant.getPlan(), tenant.getStatus(),
            tenant.getCreatedAt(), tenant.getUpdatedAt());

        tenantRepo.save(tenant);
        log.info("Tenant saved with ID: {}", tenant.getId());

        var user = User.builder()
            .fullName(req.name().trim())
            .email(req.email().trim())
            .passwordHash(passwordEncoder.encode(req.password().trim()))
            .tenant(tenant)
            .timezone("UTC") // Explicitly set to ensure no null
            .locale("vi") // Explicitly set to ensure no null
            .status("active")
            .build();

        log.debug("User before save: email={}, fullName={}, timezone={}, locale={}, status={}",
            user.getEmail(), user.getFullName(), user.getTimezone(), user.getLocale(), user.getStatus());

        userRepo.save(user);

        var role = roleRepo.findById("OWNER")
            .orElseThrow(() -> new NotFoundException("Role OWNER not found"));
        var userRole = UserRole.builder()
            .tenantId(tenant.getId())
            .userId(user.getId())
            .roleCode(role.getCode())
            .build();
        userRoleRepo.save(userRole);

        return issueTokens(user);
    }

    @Override
    public TokenResponse login(LoginRequest req) {
        if (req == null || req.email() == null || req.password() == null) {
            throw new BadRequestException("Invalid credentials");
        }
        var user = userRepo.findByEmail(req.email())
            .orElseThrow(() -> new BadRequestException("Invalid credentials"));
        if (!passwordEncoder.matches(req.password(), user.getPasswordHash())) {
            throw new BadRequestException("Invalid credentials");
        }
        return issueTokens(user);
    }

    @Override
    public TokenResponse refresh(String refreshTokenStr) {
        if (refreshTokenStr == null || refreshTokenStr.trim().isEmpty()) {
            throw new BadRequestException("Refresh token cannot be empty");
        }
        UUID id;
        try {
            id = UUID.fromString(refreshTokenStr);
        } catch (IllegalArgumentException e) {
            throw new BadRequestException("Invalid refresh token format");
        }
        var token = refreshTokenRepo.findById(id)
            .orElseThrow(() -> new BadRequestException("Invalid refresh token"));
        if (token.getExpiresAt().isBefore(Instant.now()) || token.getRevokedAt() != null) {
            refreshTokenRepo.delete(token);
            throw new BadRequestException("Refresh token expired or revoked");
        }
        var user = userRepo.findById(token.getUser().getId())
            .orElseThrow(() -> new NotFoundException("User not found"));
        return issueTokens(user);
    }

    private TokenResponse issueTokens(User user) {
        var roles = userRoleRepo.findAllByUserId(user.getId())
            .stream().map(UserRole::getRoleCode).toList(); // Fix here: use getRoleCode() instead of getRole().getCode()
        var claims = Map.of(
            "tenant", user.getTenant().getSlug(),
            "roles", roles
        );
        var accessToken = jwtService.generateToken(user.getId().toString(), claims);
        var refreshToken = RefreshToken.builder()
            .id(UUID.randomUUID())
            .user(user)
            .token(UUID.randomUUID().toString())
            .expiresAt(Instant.now().plusSeconds(86400))
            .build();
        refreshTokenRepo.save(refreshToken);
        return new TokenResponse(accessToken, refreshToken.getId().toString());
    }
}