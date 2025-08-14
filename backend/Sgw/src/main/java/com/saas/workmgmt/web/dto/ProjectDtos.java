package com.saas.workmgmt.web.dto;

import java.util.UUID;

public class ProjectDtos {
  public record ProjectRes(UUID id, String key, String name, String status) {}
}