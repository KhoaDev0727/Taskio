package com.saas.workmgmt.domain.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity @Table(name = "tenants")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Tenant extends BaseAuditable {
  @Id @GeneratedValue
  private UUID id;
  @Column(nullable = false, unique = true, length = 64)
  private String slug;
  @Column(nullable = false)
  private String name;
  @Column(nullable = false, length = 32)
  private String plan = "free";
  @Column(nullable = false, length = 16)
  private String status = "active";
}