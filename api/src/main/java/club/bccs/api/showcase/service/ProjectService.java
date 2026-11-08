package club.bccs.api.showcase.service;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Locale;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import club.bccs.api.calendar.exception.ResourceNotFoundException;
import club.bccs.api.showcase.entity.Project;
import club.bccs.api.showcase.repository.ProjectRepository;

@Service
public class ProjectService {
    private static final int PROJECTS_PER_PAGE = 10;
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public record BrowseResult(Project featured, List<Project> projects, int totalPages) {}

    public BrowseResult browse(int page, String category, String term) {
        Project featured = projectRepository.findFirstByIsActiveTrueOrderByFeaturedDescIdAsc().orElse(null);
        if (featured == null) {
            return new BrowseResult(null, List.of(), 0);
        }
        var projects = projectRepository.browse(featured.getId(), category, term,
                PageRequest.of(page - 1, PROJECTS_PER_PAGE));
        return new BrowseResult(featured, projects.getContent(), projects.getTotalPages());
    }

    public Project getProjectBySlug(String slug) {
        return projectRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found for slug: " + slug));
    }

    public Project createProject(Project project) {
        if (project.getSlug() == null) {
            String slug = project.getTitle().toLowerCase(Locale.ROOT)
                    .replaceAll("[^a-z0-9]+", "-").replaceAll("(^-|-$)", "");
            if (slug.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Supply a slug for this title");
            }
            project.setSlug(slug);
        }
        try {
            return projectRepository.saveAndFlush(project);
        } catch (DataIntegrityViolationException ex) {
            if (ex.getMostSpecificCause() instanceof SQLException sql && "23505".equals(sql.getSQLState())) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "That project slug is already in use");
            }
            throw ex;
        }
    }

    public Project updateProject(Long id, Project replacement) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found for id: " + id));
        project.setTitle(replacement.getTitle());
        project.setShortDescription(replacement.getShortDescription());
        project.setDescription(replacement.getDescription());
        project.setAuthorName(replacement.getAuthorName());
        project.setTechStack(replacement.getTechStack());
        project.setCategories(replacement.getCategories());
        project.setDemoVideoUrl(replacement.getDemoVideoUrl());
        project.setPresentationUrl(replacement.getPresentationUrl());
        project.setWebsiteUrl(replacement.getWebsiteUrl());
        project.setGithubUrl(replacement.getGithubUrl());
        project.setThumbnailUrl(replacement.getThumbnailUrl());
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
