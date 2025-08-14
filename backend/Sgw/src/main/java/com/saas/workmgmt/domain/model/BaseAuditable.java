package com.saas.workmgmt.domain.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@MappedSuperclass
@Getter
@Setter
public abstract class BaseAuditable {

    @Column(name = "created_at", nullable = false, updatable = false)
    protected Instant createdAt = Instant.now();

    @Column(name = "created_by")
    protected UUID createdBy;

    @Column(name = "updated_at", nullable = false)
    protected Instant updatedAt = Instant.now();

    @Column(name = "updated_by")
    protected UUID updatedBy;

    @Column(name = "deleted_at")
    protected Instant deletedAt;
}
