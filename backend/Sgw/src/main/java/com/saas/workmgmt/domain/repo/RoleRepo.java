package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, String> {}