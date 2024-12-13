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
              return {
                ...rest,
                title: event.title,
                start,
                end,
                rrule: event.rrule,
                extendedProps: {
                  description: event.description,
                  location: event.location,
                  id: event.id,
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
            eventClick={(a) => {
              const { description, location } = a.event.extendedProps;
              const { start, title, end } = a.event;
              const startTime = start && start.toString();
              const endTime = end && end.toString();
              handleEventClick({
                id: a.event.extendedProps.id,
                ...a.event.extendedProps,
                title,
                description,
                location,
                startTime: startTime as string,
                endTime: endTime === null ? startTime as string : endTime as string,
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
