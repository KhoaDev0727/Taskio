package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.TaskLabel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskLabelRepo extends JpaRepository<TaskLabel, TaskLabel.PK> {
}