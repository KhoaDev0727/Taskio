package com.saas.workmgmt.mapper;

import com.saas.workmgmt.domain.model.Project;
import com.saas.workmgmt.web.dto.ProjectDtos.ProjectRes;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
  ProjectRes toRes(Project e);
}