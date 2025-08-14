package com.saas.workmgmt.domain.service;

import com.saas.workmgmt.domain.model.Project;

import java.util.List;

public interface ProjectService {
    List<Project> findAll();
}
