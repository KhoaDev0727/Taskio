package com.saas.workmgmt.domain.service.impl;

import com.saas.workmgmt.domain.model.Project;
import com.saas.workmgmt.domain.repo.ProjectRepo;
import com.saas.workmgmt.domain.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepo repo;

    @Override
    public List<Project> findAll() {
        return repo.findAll();
    }
}
