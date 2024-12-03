package club.bccs.api.calendar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import club.bccs.api.calendar.entity.Event;
import club.bccs.api.calendar.service.EventService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1/calendar/events")
public class EventController {
    
    @Autowired
    private EventService eventService;

    // Get all events
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // Get event by id
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Event event = eventService.getEventById(id)
                .orElseThrow(() -> new RuntimeException("Event not found for id: " + id));
        return ResponseEntity.ok(event);
    }

    // Create event
    @PostMapping
    public Event createEvent(@Valid @RequestBody Event event) {
        return eventService.createEvent(event);
    }

    // Update event
    @PostMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @Valid @RequestBody Event eventDetails) {
        Event updatedEvent = eventService.updateEvent(id, eventDetails);
        return ResponseEntity.ok(updatedEvent);
    }

    // Delete event
    // Set isActive to false instead of deleting the event
    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
    //     eventService.deleteEvent(id);
    //     return ResponseEntity.noContent().build();
    // }

}
