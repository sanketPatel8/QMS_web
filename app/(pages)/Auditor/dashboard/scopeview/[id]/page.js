"use client";
import AuditScheduleTabs from "@/components/module/audit_schedule/AuditScheduleTabs";
import { ScopeTable } from "@/components/module/audit_schedule/ScopeTable";
import { SystemAuditHeader } from "@/components/module/audit_schedule/SystemAuditHeader";
import React from "react";

function page() {
  // const scheduleData = [];

  // Uncomment to see with data:
  const scheduleData = [
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "09:00 AM",
      scope: "NC OFI Verification",
      onEdit: (row) => console.log("Edit clicked:", row),
    },
    {
      date: "05-Oct-2025",
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      scope: "KPI Verification",
      onEdit: (row) => console.log("Edit clicked:", row),
    },
    {
      date: "05-Oct-2025",
      startTime: "10:00 AM",
      endTime: "12:00 AM",
      scope:
        "Calibration records, training certificates, operator instructions, and last 3 months quality inspection logs.",
      onEdit: (row) => console.log("Edit clicked:", row),
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Header Section */}
      <SystemAuditHeader />

      {/* Main Content Area */}
      <div className="flex-1 flex ">
        {/* Left Side - Table */}
        <div className="flex-1 p-6">
          <ScopeTable data={scheduleData} />
        </div>

        {/* Right Side - Tabs */}
        <div className="py-6 rounded">
          <AuditScheduleTabs />
        </div>
      </div>
    </div>
  );
}

export default page;
