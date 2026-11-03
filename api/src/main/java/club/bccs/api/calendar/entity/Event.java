package club.bccs.api.calendar.entity;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is mandatory")
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @NotBlank(message = "Location is mandatory")
    private String location;

    @NotNull(message = "Start time is mandatory")
    private LocalDateTime startTime;

    @NotNull(message = "End time is mandatory")
    private LocalDateTime endTime;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private Boolean isActive = true;

    private String rsvpLink;

    private String flierLink;

    @Column(unique = true, nullable = false)
    private String slug;

    // Method to generate slug: title + date
    private void generateSlug() {
        if (this.title == null || this.startTime == null) {
            throw new IllegalStateException("title or startTime is null. Cannot generate slug.");
        }
        // Convert title to lowercase, replace non-alphanumeric characters with hyphens
        String baseSlug = this.title.toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("(^-|-$)", "");
        // Convert startTime to date string in the format yyyy-MM-dd
        // String datePart = this.startTime.toLocalDate().format(java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        // Convert startTime to ZonedDateTime in America/New_York timezone
        ZonedDateTime zonedDateTime = this.startTime.atZone(java.time.ZoneId.of("America/New_York"));
        String datePart = zonedDateTime.toLocalDate().format(java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        this.slug = baseSlug + "-" + datePart;
    }

    // Automatically generate slug before saving or updating the entity
    @PrePersist
    @PreUpdate
    private void PrePersistAndUpdate() {
        generateSlug();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }
    public LocalDateTime getEndTime() { return endTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    public String getRsvpLink() { return rsvpLink; }
    public void setRsvpLink(String rsvpLink) { this.rsvpLink = rsvpLink; }
    public String getFlierLink() { return flierLink; }
    public void setFlierLink(String flierLink) { this.flierLink = flierLink; }
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

}
