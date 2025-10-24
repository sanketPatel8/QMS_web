import React, { useState } from "react";
import { X, Calendar, Clock, Send } from "lucide-react";
import DatePicker from "@/components/common/DatePicker";
import TimePicker from "@/components/common/TimePicker";

export default function AuditSidebars({ type, onClose }) {
  const [startDate, setStartDate] = useState("05-Oct-2025");
  const [startTime, setStartTime] = useState("10:00 AM");
  const [endTime, setEndTime] = useState("12:00 AM");
  const [notes, setNotes] = useState("Due to workload");
  const [message, setMessage] = useState("Tell me if it is possible");
  const [StartMonth, setStartMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [remarks, setRemarks] = useState("");

  const isRescheduleOpen = type === "reschedule";
  const isChatOpen = type === "chat";

  return (
    <>
      {/* Reschedule Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          isRescheduleOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "500px" }}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Reschedule</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="row">
              <div className="col-md-12">
                <DatePicker
                  lable="Start Date"
                  selectedDate={StartMonth}
                  setSelectedDate={setStartMonth}
                  type="date"
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col-md-6">
                <TimePicker
                  label="Select Time"
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              </div>
              <div className="col-md-6">
                <TimePicker
                  label="Select Time"
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              </div>
            </div>

            <div className="relative mb-3">
              <div className="bg-white rounded-md border border-gray-200 p-2 w-full max-w-md">
                <div className="flex flex-col">
                  {/* Label */}
                  <label className="block text-[11px] text-gray-400 mb-0.5 font-normal">
                    Remarks / Notes
                  </label>

                  {/* Textarea */}
                  <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    rows="4"
                    placeholder="Write your remarks here..."
                    className="text-sm text-gray-900 w-full resize-none outline-none border-none focus:ring-0"
                  />
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Send to Auditee
            </button>
          </div>
        </div>
      </div>

      {/* Chat Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          isChatOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "500px" }}
      >
        <div className="flex flex-col h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-2">
            <div className="flex items-center justify-between w-full mx-auto">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
                    alt="Emily Davis"
                    className="w-16 h-16 rounded-full"
                  />
                  {/* <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div> */}
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                  >
                    <X size={24} />
                  </button>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 my-0">
                    Emily Davis
                  </h4>
                  <p className="text-gray-500 my-0">Auditor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Today Divider */}
              <div className="flex items-center justify-center my-6">
                <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
                  Today
                </div>
              </div>

              {/* Message from Emily */}
              <div className="flex flex-col items-start">
                <div className="bg-white rounded-2xl rounded-tl-none px-5 py-3 shadow-sm max-w-md chat-recive">
                  <p className="text-gray-900">Hey Emily!</p>
                  <p className="text-gray-900">
                    Can we reschedule this audit on 8 Oct?
                  </p>
                </div>
                <span className="!text-start text-xs text-gray-400 mt-1 ml-2">
                  06:55 PM
                </span>
              </div>

              {/* Response Message */}
              <div className="flex flex-col items-end">
                <div className="bg-gray-100 rounded-2xl rounded-tr-none px-5 py-3 max-w-md chat-send">
                  <p className="text-gray-900">As i'm on leave for that day</p>
                </div>
                <span className="text-xs text-gray-400 mt-1 mr-2">
                  06:55 PM
                </span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Tell me if it is possible"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
                <Send size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {(isChatOpen || isRescheduleOpen) && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
