package club.bccs.api.calendar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import club.bccs.api.calendar.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // Add custom query methods if needed
}
