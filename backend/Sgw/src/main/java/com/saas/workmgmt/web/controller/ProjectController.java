package com.saas.workmgmt.web.controller;

import com.saas.workmgmt.domain.service.ProjectService;
import com.saas.workmgmt.mapper.ProjectMapper;
import com.saas.workmgmt.web.dto.ProjectDtos.ProjectRes;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService service;
    private final ProjectMapper mapper;

    @GetMapping
    @PreAuthorize("hasAnyRole('OWNER', 'ADMIN', 'MEMBER')")
    public List<ProjectRes> list() {
        return service.findAll().stream().map(mapper::toRes).toList();
    }
}
