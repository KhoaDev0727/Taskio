package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface TeamRepo extends JpaRepository<Team, UUID> {
}