export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  slug: string;
  isActive: boolean;
  rsvpLink: string;
  flierLink?: string;
  rrule?: {
    freq: string;
    interval: number;
    byweekday: string;
    dtstart: string;
    until: string;
  }; // Optional for non-recurring events
  startTime: string; // Used for non-recurring events
  endTime: string; // Used for non-recurring events
  duration?: string;
  exdate?: string[]; // Optional for recurring events
}
