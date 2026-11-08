package club.bccs.api.showcase.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
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
import jakarta.validation.constraints.Size;
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
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

    @Size(max = 3)
    private List<@NotNull @Pattern(regexp = "Web|Mobile|Browser Extension") String> categories = List.of();

    @Length(max = 500, message = "Demo video URL must be 500 characters or fewer")
    @Pattern(regexp = "^$|^https?://.+$|^/videos/showcase/[a-zA-Z0-9_-]+\\.(mp4|webm)$",
            message = "Demo video URL must use http, https, or a bundled showcase video path")
    private String demoVideoUrl;

    @Length(max = 500, message = "Presentation URL must be 500 characters or fewer")
    @Pattern(regexp = "^$|^https?://.+$", message = "Presentation URL must use http or https")
    private String presentationUrl;

    @Length(max = 500, message = "Website URL must be 500 characters or fewer")
    @Pattern(regexp = "^$|^https?://.+$", message = "Website URL must use http or https")
    private String websiteUrl;

    @Length(max = 500, message = "GitHub URL must be 500 characters or fewer")
    @Pattern(regexp = "^$|^https?://.+$", message = "GitHub URL must use http or https")
    private String githubUrl;

    @Length(max = 500, message = "Thumbnail URL must be 500 characters or fewer")
    @Pattern(regexp = "^$|^https?://[^\\s]+$|^/images/showcase/[a-zA-Z0-9_-]+\\.(png|jpe?g|webp)$",
            message = "Thumbnail must be an HTTP(S) URL or a bundled showcase image path")
    private String thumbnailUrl;

    @NotNull(message = "Featured status is mandatory")
    private Boolean featured = false;

    @NotNull(message = "Active status is mandatory")
    private Boolean isActive = true;

    @Column(unique = true, nullable = false, updatable = false)
    @Length(max = 140, message = "Slug must be 140 characters or fewer")
    @Pattern(regexp = "[a-z0-9]+(?:-[a-z0-9]+)*", message = "Slug must use lowercase letters, numbers, and hyphens")
    private String slug;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime createdAt;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime updatedAt;

    @PrePersist
    private void beforeInsert() {
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
    public List<String> getCategories() { return categories; }
    public void setCategories(List<String> categories) { this.categories = categories; }
    public String getDemoVideoUrl() { return demoVideoUrl; }
    public void setDemoVideoUrl(String demoVideoUrl) { this.demoVideoUrl = demoVideoUrl; }
    public String getPresentationUrl() { return presentationUrl; }
    public void setPresentationUrl(String presentationUrl) { this.presentationUrl = presentationUrl; }
    public String getWebsiteUrl() { return websiteUrl; }
    public void setWebsiteUrl(String websiteUrl) { this.websiteUrl = websiteUrl; }
    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    public String getThumbnailUrl() { return thumbnailUrl; }
    public void setThumbnailUrl(String thumbnailUrl) { this.thumbnailUrl = thumbnailUrl; }
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
