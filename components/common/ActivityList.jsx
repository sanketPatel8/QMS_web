"use client";

import { useState } from "react";
import { Search, ChevronDown, Filter } from "lucide-react";
import DropDown from "./DropDown";
import { FaFilter } from "react-icons/fa";

export default function ActivityList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [selected, setSelected] = useState({
    value: "week",
    label: "This Week",
  });

  const options = [
    { value: "week", label: "This Week" },
    { value: "Month", label: "Last Month" },
    { value: "Quarter", label: "This Quarter" },
    { value: "Year", label: "This Year" },
  ];

  const activities = [
    {
      id: 1,
      ofiNumber: "#OFI01",
      code: "SA-PS-001",
      title: "Fire extinguisher inspection tag not...",
      assignees: ["Michael Smith", "Garry Anthony"],
      status: "Verified",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      ofiNumber: "#OFI02",
      code: "SA-PS-002",
      title: "Paint mixing instructions not update...",
      assignees: ["Emily Davis", "Liza Brown"],
      status: "Verified",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      ofiNumber: "#OFI03",
      code: "PA-PS-001",
      title: "Waste paint disposal records incomp...",
      assignees: ["Michael Smith", "Garry Anthony"],
      status: "Verified",
      image:
        "https://images.unsplash.com/photo-1572981779307-38b8cimmage?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      ofiNumber: "#OFI04",
      code: "SA-PS-003",
      title: "Emergency exit signage not illuminated",
      assignees: ["Sarah Johnson", "Tom Wilson"],
      status: "Verified",
      image:
        "https://images.unsplash.com/photo-1581092918484-8313e1cf9476?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      ofiNumber: "#OFI05",
      code: "PA-PS-002",
      title: "Safety harness inspection overdue",
      assignees: ["James Lee", "Anna Chen"],
      status: "Verified",
      image:
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="bg-[#FAFDFF] rounded-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">OFI Activity</h3>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-48 border border-gray-300 bg-white rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-transparent"
            />
          </div>

          {/* Filter Dropdown */}
          {/* <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <span>{filterType}</span>
            <ChevronDown size={16} />
          </button> */}

          <DropDown
            options={options}
            selected={selected}
            setSelected={setSelected}
          />

          {/* Filter Icon */}
          <button className="p-2 border bg-white border-gray-300 !rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            <FaFilter size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Activity List */}
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 p-4 border-b border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Thumbnail */}
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-yellow-600">
                  {activity.ofiNumber}
                </span>
                <span className="text-sm text-gray-500">• {activity.code}</span>
              </div>
              <p className="text-sm text-gray-900 font-medium mb-1 truncate">
                {activity.title}
              </p>
              <p className="text-xs text-gray-500">
                {activity.assignees.join(" • ")}
              </p>
            </div>

            {/* Status and Action */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                {activity.status}
              </span>
              <button className="px-4 py-1.5 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Edit
              </button>
              <button className="px-4 py-1.5 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
