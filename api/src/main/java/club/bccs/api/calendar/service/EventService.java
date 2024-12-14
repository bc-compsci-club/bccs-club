package club.bccs.api.calendar.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import club.bccs.api.calendar.entity.Event;
import club.bccs.api.calendar.exception.ResourceNotFoundException;
import club.bccs.api.calendar.repository.EventRepository;

@Service
public class EventService {
    
    @Autowired
    private EventRepository eventRepository;

    // Get all events
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // Get event by id
    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    // Get event by slug
    public Optional<Event> getEventBySlug(String slug) {
        // Return Optional.empty() if event is not found
        return eventRepository.findBySlug(slug);
    }

    // Create event
    public Event createEvent(Event event) {
        event.setCreatedAt(LocalDateTime.now());
        event.setUpdatedAt(LocalDateTime.now());
        return eventRepository.save(event);
    }

    // Update event by id
    public Event updateEvent(Long id, Event eventDetails) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for id: " + id));

        event.setTitle(eventDetails.getTitle());
        event.setDescription(eventDetails.getDescription());
        event.setLocation(eventDetails.getLocation());
        event.setStartTime(eventDetails.getStartTime());
        event.setEndTime(eventDetails.getEndTime());
        event.setUpdatedAt(LocalDateTime.now());
        event.setIsActive(eventDetails.getIsActive());
        event.setRsvpLink(eventDetails.getRsvpLink());
        event.setFlierLink(eventDetails.getFlierLink());

        return eventRepository.save(event);
    }

    // Partial update event by id
    public Event partialUpdateEvent(Long id, Event PathVariable) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for id: " + id));

        // Only update fields that are not null in partialEvent
        if (PathVariable.getTitle() != null) {
            event.setTitle(PathVariable.getTitle());
        }
        if (PathVariable.getDescription() != null) {
            event.setDescription(PathVariable.getDescription());
        }
        if (PathVariable.getLocation() != null) {
            event.setLocation(PathVariable.getLocation());
        }
        if (PathVariable.getStartTime() != null) {
            event.setStartTime(PathVariable.getStartTime());
        }
        if (PathVariable.getEndTime() != null) {
            event.setEndTime(PathVariable.getEndTime());
        }
        if (PathVariable.getIsActive() != null) {
            event.setIsActive(PathVariable.getIsActive());
        }
        if (PathVariable.getRsvpLink() != null) {
            event.setRsvpLink(PathVariable.getRsvpLink());
        }
        if (PathVariable.getFlierLink() != null) {
            event.setFlierLink(PathVariable.getFlierLink());
        }

        event.setUpdatedAt(LocalDateTime.now());

        return eventRepository.save(event);
    }

    /**
     * Delete event by id
     * @deprecated
     * This method will be removed in the future. Instead of deleting the event, set isActive to false.
     */
    @Deprecated
    public void deleteEvent(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for id: " + id));
        eventRepository.delete(event);
    }

}
