package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface UserRoleRepo extends JpaRepository<UserRole, UserRole.PK> {
    List<UserRole> findAllByUserId(UUID userId);
}