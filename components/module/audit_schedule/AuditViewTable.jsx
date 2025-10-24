"use client";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { RxCross2 } from "react-icons/rx";

export default function AuditViewTable() {
  const auditData = [
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "10:00 AM",
      scope:
        "Calibration records, training certificates, operator instructions, and last 3 months' quality inspection logs.",
    },
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "10:00 AM",
      scope: "KPI Verification",
    },
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "10:00 AM",
      scope: "NC OFI Verification",
    },
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "10:00 AM",
      scope:
        "Calibration records, training certificates, operator instructions, and last 3 months' quality inspection logs.",
    },
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "10:00 AM",
      scope: "KPI Verification",
    },
    {
      date: "05-Oct-2025",
      startTime: "08:00 AM",
      endTime: "10:00 AM",
      scope: "NC OFI Verification",
    },
  ];

  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      width: "150px",
    },
    {
      name: "Start Time",
      selector: (row) => row.startTime,
      sortable: true,
      width: "150px",
    },

    {
      name: "End Time",
      selector: (row) => row.endTime,
      sortable: true,
      width: "150px",
    },
    {
      name: "Scope",
      selector: (row) => row.scope,
      sortable: true,
      //   width: "300px",
    },
  ];

  return (
    <div
      className="h-full"
      //   style={{
      //     borderLeft: "1px solid #E5E7EB", // light gray
      //   }}
    >
      <DataTable
        columns={columns}
        data={auditData}
        striped
        dense
        customStyles={{
          headCells: {
            style: {
              backgroundColor: "#FAFDFF",
              fontWeight: "600",
              fontSize: "14px",
              paddingTop: "10px",
              paddingBottom: "10px",
            },
          },
          cells: {
            style: {
              paddingTop: "10px",
              paddingBottom: "10px",
            },
          },
          rows: {
            style: {
              "&:nth-child(odd)": {
                backgroundColor: "#FAFDFF",
              },
              "&:nth-child(even)": {
                backgroundColor: "#FAFDFF",
              },
              borderTop: "0.5px solid #E5E7EB",
              borderBottom: "0.5px solid #E5E7EB",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: "18px",
            },
          },
        }}
      />
    </div>
  );
}
