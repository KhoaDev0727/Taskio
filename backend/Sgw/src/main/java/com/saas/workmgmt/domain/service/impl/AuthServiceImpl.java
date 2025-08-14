package com.saas.workmgmt.domain.service.impl;

import com.saas.workmgmt.domain.model.*;
import com.saas.workmgmt.domain.repo.*;
import com.saas.workmgmt.domain.service.AuthService;
import com.saas.workmgmt.security.JwtService;
import com.saas.workmgmt.web.dto.AuthDto.*;
import com.saas.workmgmt.web.error.BadRequestException;
import com.saas.workmgmt.web.error.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;

@Service
@RequiredArgsConstructor
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
        var tenant = Tenant.builder()
            .name(req.tenant())
            .slug(req.tenant().toLowerCase().replace(" ", "-"))
            .build();
        tenantRepo.save(tenant);

        var user = User.builder()
            .fullName(req.name())
            .email(req.email())
            .passwordHash(passwordEncoder.encode(req.password()))
            .tenant(tenant)
            .status("active")
            .build();
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
        var user = userRepo.findByEmail(req.email())
            .orElseThrow(() -> new BadRequestException("Invalid credentials"));

        if (!passwordEncoder.matches(req.password(), user.getPasswordHash())) {
            throw new BadRequestException("Invalid credentials");
        }

        return issueTokens(user);
    }

    @Override
    public TokenResponse refresh(String refreshTokenStr) {
        UUID id = UUID.fromString(refreshTokenStr);
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
            .stream().map(userRole -> userRole.getRole().getCode()).toList();

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
