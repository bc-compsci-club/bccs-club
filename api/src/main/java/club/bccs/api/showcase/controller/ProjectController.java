package club.bccs.api.showcase.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import club.bccs.api.showcase.entity.Project;
import club.bccs.api.showcase.service.ProjectService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1/showcase/projects")
public class ProjectController {
    private final ProjectService projectService;
    private final String adminApiKey;

    public ProjectController(ProjectService projectService,
            @Value("${showcase.admin-api-key:}") String adminApiKey) {
        this.projectService = projectService;
        this.adminApiKey = adminApiKey;
    }

    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Project> getProjectBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(projectService.getProjectBySlug(slug));
    }

    @PostMapping
    public ResponseEntity<Project> createProject(
            @RequestHeader(value = "X-Showcase-Admin-Key", required = false) String providedKey,
            @Valid @RequestBody Project project) {
        requireAdminKey(providedKey);
        Project createdProject = projectService.createProject(project);
        return ResponseEntity.created(URI.create("/v1/showcase/projects/" + createdProject.getId())).body(createdProject);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id,
            @RequestHeader(value = "X-Showcase-Admin-Key", required = false) String providedKey,
            @Valid @RequestBody Project project) {
        requireAdminKey(providedKey);
        return ResponseEntity.ok(projectService.updateProject(id, project));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id,
            @RequestHeader(value = "X-Showcase-Admin-Key", required = false) String providedKey) {
        requireAdminKey(providedKey);
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }

    private void requireAdminKey(String providedKey) {
        if (adminApiKey.isBlank() || providedKey == null || !adminApiKey.equals(providedKey)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "A valid showcase admin key is required");
        }
    }
}
