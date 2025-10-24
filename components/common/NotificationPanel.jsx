import { useState } from "react";
import {
  Bell,
  CalendarCheck,
  FileText,
  Search,
  FileOutput,
  BookOpen,
} from "lucide-react";

export default function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      icon: CalendarCheck,
      color: "bg-cyan-400",
      title: "Audit Scheduled",
      description: "#SA-PS-001 · 05-Oct-2025 By Emily Davis",
      time: "10:00 AM · 15-Oct-2025",
      unread: true,
    },
    {
      id: 2,
      icon: FileText,
      color: "bg-purple-500",
      title: "Report Generated",
      description: "#RPT-2024-089 · Compliance Report Q3",
      time: "2:30 PM · 14-Oct-2025",
      unread: true,
    },
    {
      id: 3,
      icon: Search,
      color: "bg-blue-500",
      title: "Review Required",
      description: "Document #DOC-451 needs your approval",
      time: "9:15 AM · 14-Oct-2025",
      unread: false,
    },
    {
      id: 4,
      icon: FileOutput,
      color: "bg-green-500",
      title: "Export Complete",
      description: "Data export #EXP-223 is ready to download",
      time: "4:45 PM · 13-Oct-2025",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="">
      <div className="">
        <div className="flex items-center justify-between">
          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2  rounded-full transition-colors"
            >
              <Bell className="w-6 h-6 text-gray-700" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {isOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsOpen(false)}
                />

                {/* Dropdown Panel */}
                <div className="absolute right-0 mt-2 w-[500px] bg-white rounded-xl shadow-2xl z-20 border border-gray-200 max-h-[600px] overflow-hidden flex flex-col">
                  {/* Header */}
                  {/* <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-800">
                        Notifications
                      </h3>
                      {unreadCount > 0 && (
                        <span className="text-sm text-cyan-600 font-medium">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                  </div> */}

                  {/* Notifications List */}
                  <div className="overflow-y-auto flex-1">
                    {notifications.map((notification) => {
                      const Icon = notification.icon;
                      return (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                            notification.unread ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className={`${notification.color} rounded-lg p-2.5 flex-shrink-0`}
                            >
                              <Icon
                                className="w-5 h-5 text-white"
                                strokeWidth={2.5}
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <h5 className="font-semibold text-gray-900 text-sm my-0">
                                  {notification.title}
                                </h5>
                                {notification.unread && (
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0 mt-1" />
                                )}
                              </div>
                              <p className="text-xs text-gray-700 mb-1 text-start">
                                {notification.description}
                              </p>
                              <p className="text-xs text-gray-500 text-start">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  {/* <div className="p-3 border-t border-gray-200 bg-gray-50">
                    <button className="w-full text-sm text-cyan-600 hover:text-cyan-700 font-medium">
                      View All Notifications
                    </button>
                  </div> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
