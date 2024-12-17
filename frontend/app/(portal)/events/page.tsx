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
      if(!event) {
        setEvents([])
        return;
      }
      setEvents(event.filter(k => k.isActive));
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
    const title = a.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove all symbols
    .replace(/\s+/g, "-"); // Replace all whitespace with hyphens
    router.push(`/events/${title}-${date}`);
  };

  return (
    <main>
      <HeroSection />
      <CalendarSection handleEventClick={handleEventClick} events={events} />
    </main>
  );
}