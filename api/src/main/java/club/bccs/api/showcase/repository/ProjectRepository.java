package club.bccs.api.showcase.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import club.bccs.api.showcase.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    Optional<Project> findBySlug(String slug);
    Optional<Project> findFirstByIsActiveTrueOrderByFeaturedDescIdAsc();

    String BROWSE_FILTER = """
            FROM project p
            WHERE p.is_active = true AND p.id <> :featuredId
              AND (:category = '' OR :category = ANY(p.categories))
              AND (:term = '' OR strpos(lower(p.title), lower(:term)) > 0
                   OR strpos(lower(p.author_name), lower(:term)) > 0
                   OR strpos(lower(p.short_description), lower(:term)) > 0
                   OR strpos(lower(p.description), lower(:term)) > 0
                   OR strpos(lower(p.tech_stack), lower(:term)) > 0)
            """;

    @Query(value = "SELECT p.* " + BROWSE_FILTER + " ORDER BY p.id",
            countQuery = "SELECT count(*) " + BROWSE_FILTER, nativeQuery = true)
    Page<Project> browse(@Param("featuredId") Long featuredId, @Param("category") String category,
            @Param("term") String term, Pageable pageable);
}
