// components/AuditFilters.jsx
"use client";

import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { DropdownwithLable } from "@/components/common/DropdownwithLable";
import DatePicker from "@/components/common/DatePicker";

export default function AuditFilters() {
  const [filters, setFilters] = useState({
    client: "",
    department: "",
    from: "",
    to: "",
    assigned: "",
    procedure: "",
  });
  const [StartMonth, setStartMonth] = useState(new Date());
  const [EndMonth, setEndMonth] = useState(new Date());

  const [selectedAudit, setSelectedAudit] = useState();

  const auditOptions = [
    "System Audit",
    "Financial Audit",
    "Security Audit",
    "Compliance Audit",
    "Performance Audit",
  ];

  return (
    <div className="p-6  border-gray-200">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <DropdownwithLable
            label="Select Audit"
            options={auditOptions}
            value={selectedAudit}
            onChange={setSelectedAudit}
            placeholder="Choose an audit type"
          />
        </div>

        <div>
          <DropdownwithLable
            label="Select Department"
            options={auditOptions}
            value={selectedAudit}
            onChange={setSelectedAudit}
            placeholder="Choose an audit type"
          />
        </div>

        <div>
          <DropdownwithLable
            label="Frequency"
            options={auditOptions}
            value={selectedAudit}
            onChange={setSelectedAudit}
            placeholder="Choose an audit type"
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <DatePicker
              lable="Start Month"
              selectedDate={StartMonth}
              setSelectedDate={setStartMonth}
              type="month"
            />
          </div>
          <div className="col-md-6">
            <DatePicker
              lable="End Month"
              selectedDate={EndMonth}
              setSelectedDate={setEndMonth}
              type="month"
            />
          </div>
        </div>

        <div>
          <DropdownwithLable
            label="Working Shift"
            options={auditOptions}
            value={selectedAudit}
            onChange={setSelectedAudit}
            placeholder="Choose an audit type"
          />
        </div>
      </div>
    </div>
  );
}

// If you want to use Heroicons, install it:
// npm install @heroicons/react
