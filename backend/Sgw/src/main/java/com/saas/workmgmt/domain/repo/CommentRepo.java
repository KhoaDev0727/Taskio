package com.saas.workmgmt.domain.repo;

import com.saas.workmgmt.domain.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface CommentRepo extends JpaRepository<Comment, UUID> {}