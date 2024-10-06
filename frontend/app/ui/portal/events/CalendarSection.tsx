import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule'; // Import rrule plugin

const Calendar = (props: any) => {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
      <div className="overflow-hidden shadow-lg rounded-lg">
          <div className="px-4 py-6 sm:px-6">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
              initialView="dayGridMonth"
              events={props.events}
              headerToolbar={{
                left: 'prev next today',
                center: 'title',
                right: 'dayGridMonth timeGridWeek timeGridDay',
              }}
              height="auto"
              contentHeight="auto"
              aspectRatio={1.5}
              eventContent={(eventInfo) => (
                <button>
                  <div className="text-sm leading-6">
                    <div className="font-semibold">{eventInfo.event.title}</div>
                  </div>
                </button>
              )}
              eventClick={props.handleEventClick} // Attach the event click handler
              dayHeaderClassNames="bg-gray-50 text-sm font-semibold leading-6 text-gray-900"
              dayCellClassNames="text-sm text-gray-500"
            />
          </div>
        </div>
      </div>
  );
};

export default Calendar;