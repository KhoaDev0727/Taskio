package com.saas.workmgmt.domain.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "refresh_tokens")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RefreshToken {
    @Id
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String token; // Added token field

    @Column(nullable = false)
    private Instant expiresAt;

    @Column(name = "revoked_at")
    private Instant revokedAt; // Added revokedAt field
}