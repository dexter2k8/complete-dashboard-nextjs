import Header from "@/components/Header";
import { memo, useContext, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { DateSelectArg, EventApi, EventClickArg } from "@fullcalendar/core";
import { MenuContext } from "@/hook/menuContext";

function Calendar() {
  const { isDark } = useContext(MenuContext);
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
      <div className="grid gap-4 grid-cols-[1fr,5fr] pr-5">
        <aside className={`p-4 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <h4 className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>Events</h4>
          <ul>
            {currentEvents.map((event) => (
              <li
                key={event.id}
                className={`my-3 py-2 px-4 rounded ${
                  isDark ? "bg-teal-700 text-gray-200" : "bg-teal-400 text-gray-800"
                }`}
              >
                <p>{event.title}</p>
                <p>
                  {event.start &&
                    event.start.toLocaleDateString("en-us", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </li>
            ))}
          </ul>
        </aside>
        <div className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
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
