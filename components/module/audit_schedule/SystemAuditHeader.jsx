import React from 'react';

export const SystemAuditHeader = ({ 
  title = "System Audit", 
  subtitle = "Paint Shop",
  auditorName = "Emily Davis",
  auditorImage = null,
  auditeeName = "Liza Brown",
  auditeeImage = null
}) => {
  return (
    <div className="w-full bg-gray-50 px-4 py-3">
      <div className="flex items-start justify-between">
        {/* Left section - Title and subtitle */}
        <div className="flex flex-col">
          <h1 className="!text-[18px] font-semibold text-gray-900 ">{title}</h1>
          <p className="!text-[16px] text-gray-700 leading-tight mt-1">{subtitle}</p>
        </div>

        {/* Right section - Auditor and Auditee */}
        <div className="flex items-start gap-12">
          {/* Auditor */}
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 mb-1.5">Auditor name</span>
            <div className="flex items-center gap-2">
              {auditorImage ? (
                <img src={auditorImage} alt={auditorName} className="w-5 h-5 rounded-full object-cover" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              )}
              <span className="text-sm font-medium text-gray-900 whitespace-nowrap">{auditorName}</span>
            </div>
          </div>

          {/* Auditee */}
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 mb-1.5">Auditee name</span>
            <div className="flex items-center gap-2">
              {auditeeImage ? (
                <img src={auditeeImage} alt={auditeeName} className="w-5 h-5 rounded-full object-cover" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              )}
              <span className="text-sm font-medium text-gray-900 whitespace-nowrap">{auditeeName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};