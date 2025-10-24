import { useState } from 'react';

export default function AuditScheduleTabs() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="w-64 bg-white rounded">
      {/* Tabs */}
      <div className="bg-gray-100 border-b border-gray-300 ">
        <button
          onClick={() => setActiveTab('schedule')}
          className={`w-full px-4 py-3 text-left flex items-center gap-3 ${
            activeTab === 'schedule'
              ? 'bg-white text-blue-600'
              : 'text-gray-500'
          }`}
        >
          <span className={`flex items-center justify-center w-5 h-5 rounded text-xs ${
            activeTab === 'schedule'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-400 text-white'
          }`}>
            1
          </span>
          <span className="text-sm font-medium">Schedule</span>
        </button>
        
        <button
          onClick={() => setActiveTab('conduct')}
          className={`w-full px-4 py-3 text-left flex items-center gap-3 ${
            activeTab === 'conduct'
              ? 'bg-white text-blue-600'
              : 'text-gray-500'
          }`}
        >
          <span className={`flex items-center justify-center w-5 h-5 rounded text-xs ${
            activeTab === 'conduct'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-400 text-white'
          }`}>
            2
          </span>
          <span className="text-sm font-medium">Conduct</span>
        </button>
      </div>

      {/* Action Button */}
      <div className="p-3">
        <button className="w-full bg-[#0044FE] hover:bg-blue-800 text-white text-sm font-medium py-[14px] px-[24px] rounded transition-colors">
          Schedule Audit
        </button>
      </div>
    </div>
  );
}