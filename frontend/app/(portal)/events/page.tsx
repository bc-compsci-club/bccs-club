"use client"; // This makes it a Client Component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation
import HeroSection from "@/app/ui/portal/events/HeroSection";
import CalendarSection from "@/app/ui/portal/events/CalendarSection";
import { Event } from "@/app/utils/types";
import getEventAction from "@/app/lib/actions/getEventsAction";


export const runtime = 'edge';

export default function Page() {
  const [events, setEvents] = useState<Event[]>([]);

  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {
    // Fetch events from the backend
    const event = async () => {
      const event = await getEventAction();
      console.log("event", event);
      if(!event) {
        setEvents([])
      }
      setEvents(event);
      console.log("events", event);
      setEvents(event)
    };
    event();
  }, []);

  // Event click handler to navigate to the specific event page
  const handleEventClick = (a: Event) => {
    const date = new Date(a.startTime).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    router.push(`/events/${a.title.trim().toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll(" ", "-").replaceAll("(^-|-$)", "")}-${date}`);
  };

  return (
    <main>
      <HeroSection />
      {events.length > 0 && (
        <CalendarSection handleEventClick={handleEventClick} events={events} />
      )}
    </main>
  );
}

/**
 * 
    // setEvents([
    //   {
    //     title: 'Club Hours',
    //     description: 'Weekly club meeting to discuss ongoing projects, coding, and collaboration.',
    //     location: 'Room 0317, Ingersoll Hall',
    //     rrule: {
    //       freq: 'weekly', // Recurring every week
    //       interval: 1,    // Every week
    //       byweekday: 'TU', // Tuesday
    //       dtstart: '2024-09-03T13:00:00', // Start time in UTC (01:00 PM local time)
    //       until: '2024-10-31', // Until the end of the year
    //     },
    //     duration: '02:30', // Duration (2 hours and 30 minutes)
    //     exdate: [
    //       '2024-10-08T13:00:00', // Exclude October 8, 2024
    //     ],
    //   },
    //   {
    //     title: 'Club Hours',
    //     description: 'Weekly club meeting to discuss ongoing projects, coding, and collaboration.',
    //     location: 'Room 0317, Ingersoll Hall',
    //     rrule: {
    //       freq: 'weekly', // Recurring every week
    //       interval: 1,    // Every week
    //       byweekday: 'WE', // Wednesday
    //       dtstart: '2024-09-04T12:00:00', // Start time in UTC (12:00 PM local time)
    //       until: '2024-10-31', // Until the end of the year
    //     },
    //     duration: '02:00', // Duration (2 hours)
    //     exdate: [
    //       '2024-10-02T12:00:00', // Exclude October 2, 2024
    //     ],
    //   },
    //   {
    //     title: 'Club Connection & Career Panel',
    //     description: 'Get to know the executive board members and hear from 4 panelists about their experiences in the tech industry.',
    //     location: 'Jefferson Williams 4th Fl, Student Center',
    //     start: '2024-10-08T01:00:00', 
    //     end: '2024-10-08T14:30:00',
    //   },
    //   {
    //     title: 'Virtual Career Panel',
    //     description: 'Get to know and hear from 5 BC alumni and previous e-board members about their experiences in the tech industry.',
    //     location: 'Virtual, RVSP for Zoom link: https://qr-code.click/i/670f06f119cc7',
    //     start: '2024-10-19T05:00:00', 
    //     end: '2024-10-19T06:00:00',
    //   },
    // ]);
 * 
 */
