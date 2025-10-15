import React from "react";
import { Search, ChevronDown, Filter } from "lucide-react";

export default function OverViewDetails() {
  const auditItems = [
    { label: "Layer Process Audit", completed: 1, total: 4 },
    { label: "Supplier Audit", completed: 1, total: 6 },
    { label: "Process Audit", completed: 9, total: 12 },
    { label: "Product Audit", completed: 5, total: 6 },
  ];

  const totalCompleted = auditItems.reduce(
    (sum, item) => sum + item.completed,
    0
  );
  const totalAudits = auditItems.reduce((sum, item) => sum + item.total, 0);
  const totalProgress = (totalCompleted / totalAudits) * 100;

  const audits = new Array(4).fill({
    date: "Oct-2025",
    id: "#SA-PS-001",
    title: "System Audit",
    location: "Paint Shop",
    assignedTo: ["Emily Davis", "Liza Brown"],
    status: "Assigned",
  });

  return (
    <>
      <div className="row w-full mx-0">
        <div className="col-12 mx-0 px-0">
          <div className="bg-white border-b border-gray-200 px-3 py-3 ">
            <div className="flex items-center justify-between">
              {/* Page Title */}
              <h2 className="text-2xl font-semibold text-gray-900">
                Audit Overview
              </h2>

              {/* Right side controls */}
              <div className="flex items-center gap-4">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-4 pr-4 py-2 w-64 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2  focus:border-transparent"
                  />
                </div>

                {/* Pending Dropdown */}
                <button className="flex items-center gap-2 px-2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <span className="font-medium">Pending</span>
                  <ChevronDown size={18} />
                </button>

                {/* Filter Button */}
                <button className="p-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <Filter size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-6 bg-white col-md-4">
          {/* Total Audit Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600 font-medium">
                Total Audit
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {totalCompleted}/{totalAudits}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[50px] bg-blue-100 rounded-lg overflow-hidden">
              <div
                className="h-full bg-blue-400 rounded-lg transition-all duration-300"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>

          {/* Individual Audit Items */}
          <div className="space-y-3">
            {auditItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-base font-semibold text-gray-900">
                  {item.completed}/{item.total}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-full col-md-8">
          {audits.map((audit, index) => (
            <div
              key={index}
              className="flex justify-between border-b last:border-none"
            >
              {/* Left Section */}
              <div className="ml-[20px]">
                <p className="text-[12px] mb-2 mt-2 text-gray-500">
                  {audit.date}
                </p>
                <p className="text-[14px] mb-2 font-semibold text-[#1D1D1D]">
                  {audit.id} • {audit.title} • {audit.location}
                </p>
                <p className="text-[12px] mb-2 text-gray-600">
                  {audit.assignedTo.join(" • ")}
                </p>
              </div>

              {/* Right Section (Status and View button) */}
              <div className="flex justify-between items-center space-x-[80px] mr-[20px]">
                <span className="bg-blue-100 text-blue-700 !text-[12px] font-semibold !p-[6px] rounded">
                  {audit.status}
                </span>
                <button className="text-blue-600 !text-[12px] font-medium hover:underline border !border-blue-500 !px-[6px] !py-[4px] rounded">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
