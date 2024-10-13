export interface Event {
  title: string;
  description: string;
  location: string;
  rrule?: {
    freq: string;
    interval: number;
    byweekday: string;
    dtstart: string;
    until: string;
  }; // Optional for non-recurring events
  start?: string; // Used for non-recurring events
  end?: string;   // Used for non-recurring events
  duration?: string;
  exdate?: string[]; // Optional for recurring events
}
