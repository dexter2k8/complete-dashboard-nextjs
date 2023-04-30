import Header from "@/components/Header";
import { memo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { DateSelectArg, EventApi, EventClickArg } from "@fullcalendar/core";

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  return (
    <>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <div className="flex">
        <aside>
          <h4>Events</h4>
          <ul>
            {currentEvents.map((event) => (
              <li key={event.id}>
                <p>{event.title}</p>
                <p>
                  {event.start &&
                    event.start.toLocaleDateString("en-us", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </li>
            ))}
          </ul>
        </aside>
        <div>
          <FullCalendar
            height="calc(100vh - 16.5rem)"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "12315", title: "All-day event", date: "2023-04-14" },
              { id: "5123", title: "Timed event", date: "2023-04-28" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default memo(Calendar);
