package club.bccs.api.calendar.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import club.bccs.api.calendar.entity.Event;
import club.bccs.api.calendar.exception.ResourceNotFoundException;
import club.bccs.api.calendar.service.EventService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1/calendar/events")
public class EventController {
    
    @Autowired
    private EventService eventService;

    // Get all events
    @GetMapping
    // public List<Event> getAllEvents() {
    //     return eventService.getAllEvents();
    // }
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    // Get event by id
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Event event = eventService.getEventById(id)
                // This would return a 500 error instead of a 404:
                // .orElseThrow(() -> new RuntimeException("Event not found for id: " + id));
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for id: " + id));
        return ResponseEntity.ok(event);
    }

    // Get event by slug
    @GetMapping("/slug/{slug}")
    public ResponseEntity<Event> getEventBySlug(@PathVariable String slug) {
        // Optional<Event> eventOpt = eventService.getEventBySlug(slug);
        // return eventOpt.map(ResponseEntity::ok)
        //         .orElseGet(() -> ResponseEntity.notFound().build());
        Event event = eventService.getEventBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for slug: " + slug));
        return ResponseEntity.ok(event);
    }

    // Create event
    @PostMapping
    // public Event createEvent(@Valid @RequestBody Event event) {
    //     return eventService.createEvent(event);
    // }
    public ResponseEntity<Event> createEvent(@Valid @RequestBody Event event) {
        Event createdEvent = eventService.createEvent(event);
        // Build URI for the newly created resource
        URI location = URI.create(String.format("/v1/calendar/events/%d", createdEvent.getId()));
        return ResponseEntity.created(location).body(createdEvent);
    }

    // Full update event by id
    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @Valid @RequestBody Event eventDetails) {
        Event updatedEvent = eventService.updateEvent(id, eventDetails);
        return ResponseEntity.ok(updatedEvent);
    }

    // Partial update event by id
    @PatchMapping("/{id}")
    public ResponseEntity<Event> partialUpdateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Event updatedEvent = eventService.partialUpdateEvent(id, eventDetails);
        return ResponseEntity.ok(updatedEvent);
    }

    /**
     * Delete event
     * @deprecated
     * This method will be removed in the future. Instead of deleting the event, set isActive to false.
     */
    @Deprecated
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

}
