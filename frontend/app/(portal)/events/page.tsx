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
    const eventFn = async () => {
      const event = await getEventAction();
      if(!event) {
        setEvents([])
        return;
      }
      setEvents(event.filter(k => k.isActive));
    };
    eventFn();
  }, []);

  // Event click handler to navigate to the specific event page
  const handleEventClick = (a: Event) => {
    router.push(`/events/${a.slug}`);
  };

  return (
    <main>
      <HeroSection />
      <CalendarSection handleEventClick={handleEventClick} events={events} />
    </main>
  );
}