"use server";

import { Event } from "../../utils/types";

export default async function getEventsAction(): Promise<Event[]> {
  const events = await fetch(`${process.env.BACKEND_URL}/v1/calendar/events`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await events.json();
  return data;
}



