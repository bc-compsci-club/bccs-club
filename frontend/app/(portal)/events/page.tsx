"use client"; // This makes it a Client Component

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // For navigation
import HeroSection from "@/app/ui/portal/events/HeroSection";
import CalendarSection from "@/app/ui/portal/events/CalendarSection";
import { Event } from "@/app/utils/types";
import getEventAction from "@/app/lib/actions/getEventsAction";
import { getEventTags, tagColorClasses, Tag } from "@/app/utils/eventTags";


export const runtime = 'edge';

export default function Page() {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const router = useRouter(); // Initialize useRouter for navigation
  const search = useSearchParams();

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

  // Sync activeTag with URL query param
  useEffect(() => {
    const tagParam = search.get("tag") as Tag | null;
    setActiveTag(tagParam ?? null);
  }, [search]);

  const filtered = useMemo(() => {
    if (!activeTag) return events;
    let base = events.filter((e) => getEventTags(e).includes(activeTag));
    if (activeTag === "leetcode") {
      base = base.filter((e) => {
        // If this is a recurring event, ensure Tuesday is included in rrule.byweekday
        const byweekday = e.rrule?.byweekday || "";
        const includesTuesday = byweekday
          .split(",")
          .map((s) => s.trim().toUpperCase())
          .includes("TU");
        if (includesTuesday) return true;
        // Otherwise, for single events, check the actual start day
        const start = e.startTime ? new Date(e.startTime) : null;
        const isTuesday = start ? start.getDay() === 2 : false; // 2 = Tue
        return isTuesday;
      });
    }
    return base;
  }, [events, activeTag]);

  // Event click handler to navigate to the specific event page
  const handleEventClick = (a: Event) => {
    router.push(`/events/${a.slug}`);
  };

  return (
    <main>
      <HeroSection />
      {/* Static badge filter row */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Filter by:</span>
          <button
            onClick={() =>
              activeTag === "leetcode"
                ? router.push("/events", { scroll: false })
                : router.push("/events?tag=leetcode", { scroll: false })
            }
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${tagColorClasses("green")} hover:opacity-90 transition ${activeTag === "leetcode" ? "ring-2 ring-green-300" : ""}`}
          >
            LeetCode session
          </button>
          <button
            onClick={() =>
              activeTag === "workshop"
                ? router.push("/events", { scroll: false })
                : router.push("/events?tag=workshop", { scroll: false })
            }
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${tagColorClasses("purple")} hover:opacity-90 transition ${activeTag === "workshop" ? "ring-2 ring-purple-300" : ""}`}
          >
            Workshop
          </button>
          <button
            onClick={() =>
              activeTag === "gwc"
                ? router.push("/events", { scroll: false })
                : router.push("/events?tag=gwc", { scroll: false })
            }
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${tagColorClasses("pink")} hover:opacity-90 transition ${activeTag === "gwc" ? "ring-2 ring-pink-300" : ""}`}
          >
            Girls Who Code
          </button>
          <button
            onClick={() =>
              activeTag === "talk"
                ? router.push("/events", { scroll: false })
                : router.push("/events?tag=talk", { scroll: false })
            }
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${tagColorClasses("red")} hover:opacity-90 transition ${activeTag === "talk" ? "ring-2 ring-red-300" : ""}`}
          >
            Tech Talk
          </button>
          <button
            onClick={() =>
              activeTag === "gdg"
                ? router.push("/events", { scroll: false })
                : router.push("/events?tag=gdg", { scroll: false })
            }
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${tagColorClasses("blue")} hover:opacity-90 transition ${activeTag === "gdg" ? "ring-2 ring-blue-300" : ""}`}
          >
            Google Develop Group
          </button>
          <button
            onClick={() =>
              activeTag === "info"
                ? router.push("/events", { scroll: false })
                : router.push("/events?tag=info", { scroll: false })
            }
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${tagColorClasses("teal")} hover:opacity-90 transition ${activeTag === "info" ? "ring-2 ring-teal-300" : ""}`}
          >
            Info Session
          </button>
        </div>
      </div>
      <CalendarSection handleEventClick={handleEventClick} events={filtered} />
    </main>
  );
}