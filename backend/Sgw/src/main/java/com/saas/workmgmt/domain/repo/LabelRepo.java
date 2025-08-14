package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.Label;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface LabelRepo extends JpaRepository<Label, UUID> {}