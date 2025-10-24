"use client";

import DropDown from "@/components/common/DropDown";
import DropdownWithblue from "@/components/common/DropdownWithblue";
import { useState } from "react";
import AuditViewTable from "./AuditViewTable";
import AuditPopupBody from "./AuditPopupBody";
import AuditSidebars from "./AuditSidebars";
import { CalendarClock, MessageSquare } from "lucide-react";

export default function AuditSchedule() {
  const auditData = [
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "09:00 AM",
      scope: "NC OFI Verification",
    },
    {
      date: "05-Oct-2025",
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      scope: "KPI Verification",
    },
    {
      date: "05-Oct-2025",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      scope:
        "Calibration records, training certificates, operator instructions, and last 3 months' quality inspection logs.",
    },
  ];
  const [popupType, setPopupType] = useState(null);
  const [sidebarType, setSidebarType] = useState(null); // 'reschedule' | 'chat' | null

  const handleToggle = (type) => {
    setSidebarType((prev) => (prev === type ? null : type));
  };
  const [selected, setSelected] = useState({
    value: "Export As",
    label: "Export As",
  });

  const options = [
    { value: "PDF", label: "pdf" },
    { value: "JPG", label: "jpg" },
    { value: "PNG", label: "png" },
  ];

  return (
    <div>
      <div className="px-6 py-3 my-3 border-b rounded-lg border-gray-200 bg-[#F8FCFF] ">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              System Audit
            </h3>
            <p className="text-gray-600 mt-1">Paint Shop</p>
          </div>
          <div className="flex gap-12">
            <div className="text-right">
              <p className="text-md text-gray-500 mb-2 text-start">
                Auditor name
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  E
                </div>
                <span className="font-medium text-gray-900">Emily Davis</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-md text-gray-500 mb-2 text-start">
                Auditee name
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  L
                </div>
                <span className="font-medium text-gray-900">Liza Brown</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-full">
        <div className="px-3 col-md-9">
          <div className="bg-[#F8FCFF] rounded-lg ">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  Audit Scope
                </h4>
                <DropdownWithblue
                  options={options}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>

              <AuditViewTable />

              <div className="mt-6 text-sm text-gray-600">
                Audit starts on{" "}
                <span className="font-medium text-gray-900">05-Oct-2025</span>{" "}
                on{" "}
                <span className="font-medium text-gray-900">
                  10:00 AM - 12:00
                </span>
              </div>
              {/* <div className="flex gap-4 mb-6">
                <button
                  onClick={() => handleToggle("reschedule")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <CalendarClock size={20} />
                  {sidebarType === "reschedule"
                    ? "Close Reschedule"
                    : "Open Reschedule"}
                </button>

                <button
                  onClick={() => handleToggle("chat")}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <MessageSquare size={20} />
                  {sidebarType === "chat" ? "Close Chat" : "Open Chat"}
                </button>
              </div> */}

              {/* Sidebar Component */}
              <AuditSidebars
                type={sidebarType}
                onClose={() => setSidebarType(null)}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F8FCFF] rounded-lg p-6 col-md-3 w-full">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-600">
              <div className="w-6 h-6 bg-[#DEF2FF] text-blue-600 rounded-md flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="font-medium">Schedule</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-6 h-6 bg-gray-300 text-white rounded-md flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="font-medium">Conduct</span>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <button
              className="w-full px-4 py-3 border-2 border-blue-600 text-blue-600 !rounded-lg font-medium hover:bg-blue-50 transition-colors my-3"
              onClick={() => setPopupType("reschedule")}
            >
              Reschedule
            </button>
            <button
              className="w-full px-4 py-3 bg-blue-600 text-white !rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setPopupType("accept")}
            >
              Accept Schedule
            </button>
          </div>
        </div>
      </div>
      {popupType && (
        <AuditPopupBody
          type={popupType}
          onClose={() => setPopupType(null)}
          onPrimaryAction={() => {
            setPopupType(null);
            handleToggle("reschedule");
          }}
          onSecondaryAction={() => {
            setPopupType(null);
            handleToggle("chat");
          }}
        />
      )}
    </div>
  );
}
