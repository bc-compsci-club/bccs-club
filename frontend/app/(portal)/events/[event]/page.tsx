"use client"; // This makes it a Client Component

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // For navigation
import EventSection from "@/app/ui/portal/events/EventSection";
import Link from "next/link";
import { Event } from "@/app/utils/types";
import getEventAction from "@/app/lib/actions/getEventAction";

export const runtime = "edge";

export default function Page() {
  const { event: eventName } = useParams();

  const [event, setEvent] = useState<Event | null>(null);

  const [state, setState] = useState<"error" | "success" | "loading">(
    "loading"
  );

  useEffect(() => {
    const fetchEvent = async () => {
      if (typeof eventName !== "string") return;
      const eventAction = await getEventAction(eventName);
      if (!eventAction) {
        setState("error");
        setEvent({
          id: "404",
          slug: "404",
          isActive: false,
          rsvpLink: "N/A",
          title: "Event Not Found",
          description: "The event you are looking for does not exist.",
          location: "N/A",
          startTime: "",
          endTime: "",
        });
        return;
      }
      setEvent(eventAction);
      setState("success");
    };
    fetchEvent();
  }, [eventName]);

  if (state === "loading") return;

  return (
    <main>
      {event != null && <EventSection event={event} />}
      <div className="mt-5 flex justify-center items-center gap-x-6">
        <Link
          href="/events"
          rel="noopener noreferrer"
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-transparent text-bc-red border border-bc-red hover:bg-bc-yellow hover:border-transparent"
        >
          Go Back to Events Calendar
        </Link>
      </div>
    </main>
  );
}
