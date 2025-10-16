"use client";

import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import FilterBaar from "@/components/common/FilterBaar";

export default function MaintenanceRecords() {
  const records = [
    {
      id: 1,
      tag: "NC01",
      code: "SA-PS-001",
      title: "Calibration overdue for Paint Mixer #2 since Aug 15",
      assignees: ["Emily Davis", "Liza Brown"],
      status: "Verified",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop",
      imageAlt: "Paint mixer equipment",
    },
    {
      id: 2,
      tag: "NC02",
      code: "MA-PS-006",
      title:
        "Ventilation system preventive maintenance not performed as per schedule",
      assignees: ["Michael Smith", "Garry Anthony"],
      status: "Planned",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop",
      imageAlt: "Ventilation system",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FCFF] p-6">
      <div className="mx-auto">
        {/* Header */}
        <FilterBaar title={`${records.length} Records`} />

        {/* Records List */}
        <div className="">
          {records.map((record, index) => (
            <div
              key={record.id}
              className={`flex items-center gap-4 p-3 ${
                index !== records.length - 1
                  ? "border-t-[0.5px] border-b-[0.5px] border-gray-200"
                  : ""
              } hover:bg-gray-50 transition-colors`}
            >
              {/* Equipment Image */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                  <img
                    src={record.image}
                    alt={record.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Record Details */}
              <div className="flex-1 min-w-0">
                {/* Tags and Code */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded">
                    #{record.tag}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs font-medium text-gray-600">
                    {record.code}
                  </span>
                </div>

                {/* Title */}
                <h5 className="text-sm font-medium text-gray-900 mb-2">
                  {record.title}
                </h5>

                {/* Assignees */}
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  {record.assignees.map((assignee, i) => (
                    <span key={i} className="flex items-center gap-1">
                      {assignee}
                      {i < record.assignees.length - 1 && (
                        <span className="text-gray-400">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status and Actions */}
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-md ${
                    record.status === "Verified"
                      ? "bg-green-50 text-green-700"
                      : "bg-orange-50 text-orange-700"
                  }`}
                >
                  {record.status}
                </span>

                <div className="flex gap-2">
                  {record.status === "Verified" && (
                    <button className="px-3 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                      Edit
                    </button>
                  )}
                  <button className="px-3 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
