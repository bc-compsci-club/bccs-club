package club.bccs.api.showcase.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import club.bccs.api.calendar.exception.ResourceNotFoundException;
import club.bccs.api.showcase.entity.Project;
import club.bccs.api.showcase.repository.ProjectRepository;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectBySlug(String slug) {
        return projectRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found for slug: " + slug));
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project replacement) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found for id: " + id));
        project.setTitle(replacement.getTitle());
        project.setShortDescription(replacement.getShortDescription());
        project.setDescription(replacement.getDescription());
        project.setAuthorName(replacement.getAuthorName());
        project.setTechStack(replacement.getTechStack());
        project.setDemoUrl(replacement.getDemoUrl());
        project.setWebsiteUrl(replacement.getWebsiteUrl());
        project.setGithubUrl(replacement.getGithubUrl());
        project.setCoverTheme(replacement.getCoverTheme());
        project.setFeatured(replacement.getFeatured());
        project.setIsActive(replacement.getIsActive());
        project.setUpdatedAt(LocalDateTime.now());
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new ResourceNotFoundException("Project not found for id: " + id);
        }
        projectRepository.deleteById(id);
    }
}
