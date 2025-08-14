package com.saas.workmgmt.domain.model;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name = "roles")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Role {
  @Id
  @Column(length = 32)
  private String code; // OWNER, ADMIN, MEMBER, VIEWER
  @Column(name="display_name", nullable=false)
  private String displayName;
}