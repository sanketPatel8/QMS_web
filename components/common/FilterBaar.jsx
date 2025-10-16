"use client";

import { ChevronDown, Filter } from "lucide-react";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterBaar = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 my-0 py-0">
          {title}
        </h2>

        {/* Search and Filter Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-64 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
            >
              <option>All</option>
              <option>Verified</option>
              <option>Planned</option>
              <option>In Progress</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
          </div>

          <button className="p-2 border bg-white border-gray-300 !rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            <FaFilter size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBaar;
