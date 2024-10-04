"use client"; // This makes it a Client Component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
import { useSearchParams } from 'next/navigation';
import EventSection from "@/app/ui/portal/events/EventSection";

export default function Page() {

  const searchParams = useSearchParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventParam = searchParams.get('info');
    if (eventParam) {
      try {
        setEvent(JSON.parse(decodeURIComponent(eventParam)));
      } catch (error) {
        console.error('Failed to parse event object:', error);
      }
    }
  }, [searchParams]);
  
  const router = useRouter(); // Initialize useRouter for navigation
  
  return (
    <main>
      {event != null && (
        <EventSection event={event} />
      )}
      <div className="mt-10 flex justify-center items-center gap-x-6">
        <a
          href="/events"
          rel="noopener noreferrer"
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-transparent text-bc-red border border-bc-red hover:bg-bc-yellow hover:border-transparent"
        >
          Go Back to Events Calendar
        </a>
      </div>
    </main>
  );
}