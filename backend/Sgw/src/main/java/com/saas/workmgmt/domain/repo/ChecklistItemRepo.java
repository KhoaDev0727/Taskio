package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.ChecklistItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface ChecklistItemRepo extends JpaRepository<ChecklistItem, UUID> {}