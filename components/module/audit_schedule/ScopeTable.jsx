import React from 'react';
import { Edit, Plus, ChevronDown } from 'lucide-react';

export const ScopeTable = ({ data = [], emptyMessage = "Please add scope of audit." }) => {
  return (
    <div className="w-full bg-white rounded">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <h2 className="!text-[18px] font-semibold text-gray-900">Audit Scope</h2>
        <div className="flex items-center gap-3">
         { data.length > 0 && <button className="px-[16px] py-[10px] !text-[14px] font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors flex items-center gap-2">
            Export as
            <ChevronDown className="w-4 h-4" />
          </button>
          }
          <button className="px-[16px] py-[10px] !text-[14px] font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors flex items-center gap-2">
            Add Scope
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="!border-b !border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Start time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                End Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Scope
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-32 text-center text-sm text-gray-900">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors !border-b !border-gray-200 last:border-b-0">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.startTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.endTime}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-md">
                    {row.scope}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => row.onEdit?.(row)}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                      aria-label="Edit"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};