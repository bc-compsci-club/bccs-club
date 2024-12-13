'use server';

import { Event } from "@/app/utils/types";

export default async function getEventAction(id: string, eventName: string): Promise<Event | null> {
  const res = await fetch(`${process.env.BACKEND_URL}/v1/calendar/events/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(res.status === 404 || res.status === 500) return null;
  const data = await res.json();
  const date = new Date(data.startTime);
  const compare = `${data.title.trim().replace(" ", "-")}-${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
  if(compare !== eventName) return null;
  return data;
}