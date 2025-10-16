"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import DropDown from "@/components/common/DropDown";

const data = [
  { name: "Past", lightBlue: 110, darkBlue: 25 },
  { name: "Assembly", lightBlue: 60, darkBlue: 55 },
  { name: "Production", lightBlue: 165, darkBlue: 120 },
  { name: "Inspection", lightBlue: 40, darkBlue: 10 },
  { name: "Logistics", lightBlue: 110, darkBlue: 60 },
  { name: "Maintenance", lightBlue: 130, darkBlue: 135 },
  { name: "Management", lightBlue: 105, darkBlue: 60 },
];

export default function Chart() {
  const [timeFilter, setTimeFilter] = useState("This Month");
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="bg-[#FAFDFF] p-6 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm font-medium text-gray-900">Department NC/OFI</p>

        <DropDown
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 5, left: -25, bottom: 5 }}
          barCategoryGap="25%"
        >
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#f3f4f6"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 8, fill: "#6b7280" }}
            tickLine={false}
            axisLine={false}
            interval={0}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 8 }}
            ticks={[0, 25, 50, 75, 100, 125, 150, 175, 200, 225]}
            domain={[0, 225]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              fontSize: "11px",
            }}
            cursor={{ fill: "rgba(0, 0, 0, 0.02)" }}
          />
          <Bar
            dataKey="lightBlue"
            fill="#bfdbfe"
            radius={[2, 2, 0, 0]}
            barSize={22}
          />
          <Bar
            dataKey="darkBlue"
            fill="#60a5fa"
            radius={[2, 2, 0, 0]}
            barSize={22}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
