import React from 'react';

export default function OverViewDetails() {
  const auditItems = [
    { label: 'Layer Process Audit', completed: 1, total: 4 },
    { label: 'Supplier Audit', completed: 1, total: 6 },
    { label: 'Process Audit', completed: 9, total: 12 },
    { label: 'Product Audit', completed: 5, total: 6 }
  ];

  const totalCompleted = auditItems.reduce((sum, item) => sum + item.completed, 0);
  const totalAudits = auditItems.reduce((sum, item) => sum + item.total, 0);
  const totalProgress = (totalCompleted / totalAudits) * 100;

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      {/* Total Audit Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600 font-medium">Total Audit</span>
          <span className="text-2xl font-bold text-gray-900">{totalCompleted}/{totalAudits}</span>
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
  );
}