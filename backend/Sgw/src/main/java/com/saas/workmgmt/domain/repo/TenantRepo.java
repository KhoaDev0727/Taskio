package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface TenantRepo extends JpaRepository<Tenant, UUID> {}