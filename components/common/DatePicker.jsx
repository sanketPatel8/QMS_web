"use client";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function DatePicker({
  type,
  lable,
  selectedDate,
  setSelectedDate,
}) {
  // Oct 2025
  const [showCalendar, setShowCalendar] = useState(false);
  const [viewMode, setViewMode] = useState(type); // 'date', 'month', 'year'

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // const formatDate = (date) => {
  //   return `${monthNames[date.getMonth()]}-${date.getFullYear()}`;
  // };

  const formatDate = (date, type) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();

    console.log(type, "type in datepicker formated date");

    if (type == "month") {
      return `${month}-${year}`;
    } else if (type == "date") {
      return `${day}-${month}-${year}`;
    } else if (type == "year") {
      return `${year}`;
    } else {
      return `${day}-${month}-${year}`; // fallback
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, isCurrentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  };

  const handlePrevious = () => {
    if (viewMode === "date") {
      setSelectedDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
      );
    } else if (viewMode === "month") {
      setSelectedDate(
        new Date(selectedDate.getFullYear() - 1, selectedDate.getMonth(), 1)
      );
    } else if (viewMode === "year") {
      setSelectedDate(
        new Date(selectedDate.getFullYear() - 12, selectedDate.getMonth(), 1)
      );
    }
  };

  const handleNext = () => {
    if (viewMode === "date") {
      setSelectedDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
      );
    } else if (viewMode === "month") {
      setSelectedDate(
        new Date(selectedDate.getFullYear() + 1, selectedDate.getMonth(), 1)
      );
    } else if (viewMode === "year") {
      setSelectedDate(
        new Date(selectedDate.getFullYear() + 12, selectedDate.getMonth(), 1)
      );
    }
  };

  const handleMonthSelect = (monthIndex) => {
    if (type === "month") {
      // 🗓️ Store only month (number 0–11)
      setSelectedDate(monthIndex);
      setShowCalendar(false);
    } else {
      // For full date mode — go to date selection view
      setSelectedDate(new Date(selectedDate.getFullYear(), monthIndex, 1));
      setViewMode("date");
    }
  };

  const handleYearSelect = (year) => {
    if (type === "year") {
      // 📆 Store only the year
      setSelectedDate(year);
      setShowCalendar(false);
    } else {
      // For month/date type
      setSelectedDate(new Date(year, selectedDate.getMonth(), 1));
      setViewMode("month");
    }
  };

  const handleDateSelect = (day) => {
    if (type === "date" && day.isCurrentMonth) {
      // 📅 Store full date (year, month, day)
      setSelectedDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day.day)
      );
      setShowCalendar(false);
    }
  };

  const generateYears = () => {
    const currentYear = selectedDate.getFullYear();
    const startYear = Math.floor(currentYear / 12) * 12;
    const years = [];
    for (let i = 0; i < 12; i++) {
      years.push(startYear + i);
    }
    return years;
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-md border border-gray-200 p-2 w-full max-w-md">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <label className="block text-[11px] text-gray-400 mb-0.5 font-normal">
              {lable}
            </label>
            <div className="text-sm  text-gray-900">
              {formatDate(selectedDate, type)}
            </div>
          </div>
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="mx-2"
            aria-label="Open calendar"
          >
            <FaCalendarAlt size={25} />
          </button>
        </div>
      </div>

      {showCalendar && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-10 w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handlePrevious} className="">
              <FaCalendarAlt size={25} />
            </button>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  setViewMode(viewMode === "month" ? "date" : "month")
                }
                className="px-3 py-1 hover:bg-gray-100 rounded-lg font-semibold"
              >
                {monthNames[selectedDate.getMonth()]}
              </button>
              <button
                onClick={() => setViewMode("year")}
                className="px-3 py-1 hover:bg-gray-100 rounded-lg font-semibold"
              >
                {selectedDate.getFullYear()}
              </button>
            </div>

            <button onClick={handleNext} className="">
              <FaCalendarAlt size={25} />
            </button>
          </div>

          {viewMode === "date" && (
            <>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-semibold text-gray-500 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    className={`
                        py-2 text-sm rounded-lg transition-colors
                        ${
                          day.isCurrentMonth
                            ? "text-gray-900 hover:bg-blue-50"
                            : "text-gray-300"
                        }
                        ${
                          day.isCurrentMonth &&
                          day.day === selectedDate.getDate()
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : ""
                        }
                      `}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </>
          )}

          {viewMode === "month" && (
            <div className="grid grid-cols-3 gap-2">
              {monthNames.map((month, index) => (
                <button
                  key={month}
                  onClick={() => handleMonthSelect(index)}
                  className={`
                      py-3 px-4 rounded-lg font-medium transition-colors
                      ${
                        index === selectedDate.getMonth()
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }
                    `}
                >
                  {month}
                </button>
              ))}
            </div>
          )}

          {viewMode === "year" && (
            <div className="grid grid-cols-3 gap-2">
              {generateYears().map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className={`
                      py-3 px-4 rounded-lg font-medium transition-colors
                      ${
                        year === selectedDate.getFullYear()
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }
                    `}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
