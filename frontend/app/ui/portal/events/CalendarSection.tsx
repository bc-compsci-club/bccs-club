import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import rrulePlugin from "@fullcalendar/rrule"; // Import rrule plugin
import { Event } from "@/app/utils/types";

const Calendar = ({
  handleEventClick,
  events,
}: {
  handleEventClick: (event: Event) => void;
  events: Event[];
}) => {
  // Light color schemes + hover variants
  type ColorScheme = { bg: string; border: string; text: string; bgHover: string; borderHover: string };
  const COLOR_SCHEMES: Record<"purple" | "blue" | "green" | "pink" | "yellow" | "teal" | "red", ColorScheme> = {
    purple: { bg: "#f3e8ff", border: "#e9d5ff", text: "#6b21a8", bgHover: "#e9d5ff", borderHover: "#d8b4fe" },
    blue:   { bg: "#dbeafe", border: "#bfdbfe", text: "#1e40af", bgHover: "#bfdbfe", borderHover: "#93c5fd" },
    green:  { bg: "#dcfce7", border: "#bbf7d0", text: "#166534", bgHover: "#bbf7d0", borderHover: "#86efac" },
    pink:   { bg: "#fce7f3", border: "#fbcfe8", text: "#9d174d", bgHover: "#fbcfe8", borderHover: "#f9a8d4" },
    yellow: { bg: "#fef9c3", border: "#fde68a", text: "#92400e", bgHover: "#fde68a", borderHover: "#fcd34d" },
    teal:   { bg: "#ccfbf1", border: "#99f6e4", text: "#115e59", bgHover: "#99f6e4", borderHover: "#5eead4" },
    red:    { bg: "#fee2e2", border: "#fecaca", text: "#991b1b", bgHover: "#fecaca", borderHover: "#fca5a5" },
  };

  // Decide color per event; extend this as needed
  const pickColorScheme = (title: string): ColorScheme | null => {
    if (/bloomberg/i.test(title)) return COLOR_SCHEMES.purple; // Make Bloomberg purple
  if (/(girls\s*who\s*code|\bGWC\b)/i.test(title)) return COLOR_SCHEMES.pink; // GWC pink
  if (/(fundraiser|bake\s*sale)/i.test(title)) return COLOR_SCHEMES.yellow; // Fundraiser/Bake Sale yellow
  if (/(^|\W)talk(\W|$)/i.test(title)) return COLOR_SCHEMES.red; // red
  // Info Session teal
  if (/(info\s*session|information\s*session|open\s*house|recruit(ing|er)|\bQ&A\b)/i.test(title)) return COLOR_SCHEMES.teal;
  // Apply GDG blue before generic workshop-like so Google Cloud Demo stays blue
  if (/(google\s*cloud|google\s*develop(er)?\s*group|\bGDG\b)/i.test(title)) return COLOR_SCHEMES.blue; // GDG blue
  if (/(workshop|interview\s*prep|resume|demo)/i.test(title)) return COLOR_SCHEMES.purple; // Workshop-like
    // Examples of future mappings (uncomment/customize):
    // if (/club hours/i.test(title)) return COLOR_SCHEMES.blue;
    // if (/workshop/i.test(title)) return COLOR_SCHEMES.green;
    // if (/panel|talk/i.test(title)) return COLOR_SCHEMES.pink;
    return null;
  };

  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
      <div className="overflow-hidden shadow-lg rounded-lg">
        <div className="px-4 py-6">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              rrulePlugin,
            ]}
            initialView="dayGridMonth"
            events={events.map((event) => {
              const { endTime: end, startTime: start, ...rest } = event;
              if (!event.isActive) return {};
              return {
                ...rest,
                title: event.title,
                start,
                end,
                rrule: event.rrule,
                exdate: event.exdate,
                extendedProps: {
                  description: event.description,
                  isActive: event.isActive,
                  rsvpLink: event.rsvpLink,
                  location: event.location,
                  id: event.id,
                  slug: event.slug
                },
              };
            })}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth timeGridWeek timeGridDay",
            }}
            height="auto"
            contentHeight="auto"
            aspectRatio={1.5}
            eventContent={(eventInfo) => (
              <button className="w-full">
                <span className="break-words text-wrap text-sm leading-6">
                  {eventInfo.event.title}
                </span>
              </button>
            )}
            eventDidMount={(info) => {
              let scheme = pickColorScheme(info.event.title || "");
              // Make Tuesday Club Hours green
              const isClubHours = /club hours/i.test(info.event.title || "");
              const start = info.event.start as Date | null;
              const isTuesday = start ? start.getDay() === 2 : false; // 0=Sun, 1=Mon, 2=Tue
              if (isClubHours && isTuesday) {
                scheme = COLOR_SCHEMES.green;
              }
              if (scheme) {
                // Style the event element
                info.el.style.backgroundColor = scheme.bg;
                info.el.style.borderColor = scheme.border;
                info.el.style.color = scheme.text;
                info.el.style.fontWeight = "600";
                info.el.style.transition = "background-color .15s ease, border-color .15s ease";
                // Stash colors for hover
                (info.el as any).dataset.bg = scheme.bg;
                (info.el as any).dataset.border = scheme.border;
                (info.el as any).dataset.text = scheme.text;
                (info.el as any).dataset.bgHover = scheme.bgHover;
                (info.el as any).dataset.borderHover = scheme.borderHover;
              }
            }}
            eventMouseEnter={(info) => {
              const el = info.el as any;
              if (el?.dataset?.bgHover) {
                el.style.backgroundColor = el.dataset.bgHover;
                el.style.borderColor = el.dataset.borderHover || el.style.borderColor;
              }
            }}
            eventMouseLeave={(info) => {
              const el = info.el as any;
              if (el?.dataset?.bg) {
                el.style.backgroundColor = el.dataset.bg;
                el.style.borderColor = el.dataset.border || el.style.borderColor;
              }
            }}
            eventClick={(a) => {
              const { description, location } = a.event.extendedProps;
              const { start, title, end } = a.event;
              const startTime = start && start.toString();
              const endTime = end && end.toString();
              handleEventClick({
                rsvpLink: a.event.extendedProps.rsvpLink,
                id: a.event.extendedProps.id,
                isActive: a.event.extendedProps.isActive,
                slug: a.event.extendedProps.slug,
                ...a.event.extendedProps,
                title,
                description,
                location,
                startTime: startTime ? startTime : "",
                endTime: endTime ? endTime : startTime ?? "",
              });
            }} // Attach the event click handler
            dayHeaderClassNames="bg-gray-50 text-sm font-semibold leading-6 text-gray-900"
            dayCellClassNames="text-sm text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
