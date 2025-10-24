"use client";

import { useState } from "react";
import { FaClock } from "react-icons/fa";

export default function TimePicker({ label, selectedTime, setSelectedTime }) {
  const [showClock, setShowClock] = useState(false);
  const [hour, setHour] = useState(
    selectedTime ? parseInt(selectedTime.split(":")[0]) : 10
  );
  const [minute, setMinute] = useState(
    selectedTime ? parseInt(selectedTime.split(":")[1]) : 0
  );
  const [period, setPeriod] = useState(
    selectedTime && selectedTime.includes("PM") ? "PM" : "AM"
  );
  const [step, setStep] = useState("hour"); // 'hour' → 'minute' → 'confirm'

  const hours = Array.from({ length: 12 }, (_, i) => i + 1); // 1–12
  const minutes = Array.from({ length: 60 }, (_, i) => i); // 0–59

  const formatTime = (h, m, p) => {
    const hh = h < 10 ? `0${h}` : h;
    const mm = m < 10 ? `0${m}` : m;
    return `${hh}:${mm} ${p}`;
  };

  const handleSelect = (h, m, p) => {
    const formatted = formatTime(h, m, p);
    setSelectedTime(formatted);
    setShowClock(false);
    setStep("hour");
  };

  const handleHourClick = (h) => {
    setHour(h);
    setStep("minute");
  };

  const handleMinuteClick = (m) => {
    setMinute(m);
    setStep("confirm");
  };

  return (
    <div className="relative">
      {/* Input Display */}
      <div className="bg-white rounded-md border border-gray-200 p-2 w-full max-w-md">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <label className="block text-[11px] text-gray-400 mb-0.5 font-normal">
              {label}
            </label>
            <div className="text-sm text-gray-900">
              {selectedTime ? selectedTime : "Select time"}
            </div>
          </div>
          <button
            onClick={() => setShowClock(!showClock)}
            className="mx-2"
            aria-label="Open time picker"
          >
            <FaClock size={25} />
          </button>
        </div>
      </div>

      {/* Clock Popup */}
      {showClock && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-10 w-full max-w-md">
          {/* Hour Selection */}
          {step === "hour" && (
            <div>
              <p className="text-gray-500 text-sm mb-2 font-semibold">
                Select Hour
              </p>
              <div className="grid grid-cols-4 gap-2">
                {hours.map((h) => (
                  <button
                    key={h}
                    onClick={() => handleHourClick(h)}
                    className={`py-2 rounded-lg font-medium transition-colors ${
                      h === hour
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Minute Selection */}
          {step === "minute" && (
            <div>
              <p className="text-gray-500 text-sm mb-2 font-semibold">
                Select Minute
              </p>
              <div className="grid grid-cols-6 gap-2 max-h-60 overflow-y-auto">
                {minutes.map((m) => (
                  <button
                    key={m}
                    onClick={() => handleMinuteClick(m)}
                    className={`py-2 rounded-lg font-medium transition-colors ${
                      m === minute
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {m < 10 ? `0${m}` : m}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep("hour")}
                className="mt-4 text-sm text-blue-500 hover:underline"
              >
                ← Back to hours
              </button>
            </div>
          )}

          {/* Period Selection + Confirm */}
          {step === "confirm" && (
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 text-sm font-semibold text-center">
                {`Selected: ${formatTime(hour, minute, period)}`}
              </p>

              <div className="flex justify-center gap-2">
                {["AM", "PM"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`py-2 px-2 rounded-lg font-semibold transition-colors ${
                      p === period
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSelect(hour, minute, period)}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Confirm {formatTime(hour, minute, period)}
                </button>

                <button
                  onClick={() => setStep("minute")}
                  className="text-sm text-blue-500 hover:underline"
                >
                  ← Back to minutes
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
