package com.saas.workmgmt.domain.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity
@Table(name = "projects",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_project_tenant_key", columnNames = {"tenant_id", "key"}),
        @UniqueConstraint(name = "uk_project_tenant_name", columnNames = {"tenant_id", "name"})
    })
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project extends BaseAuditable {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "tenant_id", nullable = false)
    private Tenant tenant;

    @Column(length = 16, nullable = false)
    private String key;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "owner_user_id")
    private User owner;

    private String status = "active";
}