package club.bccs.api.showcase.entity;

import java.time.LocalDateTime;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is mandatory")
    @Length(max = 120, message = "Title must be 120 characters or fewer")
    private String title;

    @NotBlank(message = "Short description is mandatory")
    @Length(max = 280, message = "Short description must be 280 characters or fewer")
    private String shortDescription;

    @NotBlank(message = "Description is mandatory")
    @Column(columnDefinition = "TEXT")
    private String description;

    @NotBlank(message = "Author name is mandatory")
    @Length(max = 120, message = "Author name must be 120 characters or fewer")
    private String authorName;

    @NotBlank(message = "Tech stack is mandatory")
    @Length(max = 200, message = "Tech stack must be 200 characters or fewer")
    private String techStack;

    @Length(max = 500, message = "Website URL must be 500 characters or fewer")
    @Pattern(regexp = "^$|^https?://.+$", message = "Demo URL must use http or https")
    private String demoUrl;

    @NotBlank(message = "Website URL is mandatory")
    @Length(max = 500, message = "Website URL must be 500 characters or fewer")
    @Pattern(regexp = "^https?://.+$", message = "Website URL must use http or https")
    private String websiteUrl;

    @Length(max = 500, message = "GitHub URL must be 500 characters or fewer")
    @Pattern(regexp = "^$|^https?://.+$", message = "GitHub URL must use http or https")
    private String githubUrl;

    @NotBlank(message = "Cover theme is mandatory")
    @Length(max = 30, message = "Cover theme must be 30 characters or fewer")
    @Pattern(regexp = "rose|gold|violet|sky", message = "Cover theme must be rose, gold, violet, or sky")
    private String coverTheme = "rose";

    @NotNull(message = "Featured status is mandatory")
    private Boolean featured = false;

    @NotNull(message = "Active status is mandatory")
    private Boolean isActive = true;

    @Column(unique = true, nullable = false, updatable = false)
    @Length(max = 140, message = "Slug must be 140 characters or fewer")
    private String slug;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    private void beforeInsert() {
        if (slug == null || slug.isBlank()) {
            slug = title.toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("(^-|-$)", "");
        }
        createdAt = LocalDateTime.now();
        updatedAt = createdAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getShortDescription() { return shortDescription; }
    public void setShortDescription(String shortDescription) { this.shortDescription = shortDescription; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }
    public String getTechStack() { return techStack; }
    public void setTechStack(String techStack) { this.techStack = techStack; }
    public String getDemoUrl() { return demoUrl; }
    public void setDemoUrl(String demoUrl) { this.demoUrl = demoUrl; }
    public String getWebsiteUrl() { return websiteUrl; }
    public void setWebsiteUrl(String websiteUrl) { this.websiteUrl = websiteUrl; }
    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    public String getCoverTheme() { return coverTheme; }
    public void setCoverTheme(String coverTheme) { this.coverTheme = coverTheme; }
    public Boolean getFeatured() { return featured; }
    public void setFeatured(Boolean featured) { this.featured = featured; }
    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
