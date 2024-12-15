'use server';

import { Event } from "@/app/utils/types";

export default async function getEventAction(slug: string): Promise<Event | null> {
  const res = await fetch(`${process.env.BACKEND_URL}/v1/calendar/events/slug/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(res.status === 404 || res.status === 500) return null;
  const data = await res.json();
  return data;
}