// components/AuditList.js
import React from 'react';

const audits = new Array(6).fill({
  date: 'Oct-2025',
  id: '#SA-PS-001',
  title: 'System Audit',
  location: 'Paint Shop',
  assignedTo: ['Emily Davis', 'Liza Brown'],
  status: 'Assigned',
});

const AuditList = () => {
  return (
    <div className="overflow-y-auto bg-white rounded shadow">
        
      {audits.map((audit, index) => (
        <div
          key={index}
          className="flex justify-between border-b last:border-none"
        >
          {/* Left Section */}
          <div className="ml-[20px]">
            <p className="text-[12px] mb-2 mt-2 text-gray-500">{audit.date}</p>
            <p className="text-[14px] mb-2 font-semibold text-[#1D1D1D]">
              {audit.id} • {audit.title} • {audit.location}
            </p>
            <p className="text-[12px] mb-2 text-gray-600">
              {audit.assignedTo.join(' • ')}
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
  );
};

export default AuditList;
