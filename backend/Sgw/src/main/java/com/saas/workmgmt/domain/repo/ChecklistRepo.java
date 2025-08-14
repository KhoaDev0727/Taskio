package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.Checklist;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface ChecklistRepo extends JpaRepository<Checklist, UUID> {}