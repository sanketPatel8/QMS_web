"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  Users,
  ChevronDown,
  Settings,
  PanelLeftClose,
  PanelRightOpen,
  UserStar,
  FileText,
  CalendarSearch,
  StickyNote,
  FileSearch2,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function MrSidebar({ isExpanded, setIsExpanded, ModuleType }) {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [ActiveNav, setActiveNav] = useState([]);
  // toggle expand/compact
  const router = useRouter();
  const pathname = usePathname();

  const MrnavItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      href: "/mr/dashboard",
      activeId: "dashboard",
    },
    {
      id: "NC & OFI Report",
      activeId: "NC & OFI Report",
      lable: "NC & OFI Report",
      icon: Users,
      type: "dd",
      menu: [
        { lable: "NC Overview", href: "/mr/nc-ofi-Report/nc-overview" },
        { lable: "OFI Overview", href: "/mr/nc-ofi-Report/ofi-overview" },
      ],
    },
    {
      id: "Settings",
      label: "Settings",
      icon: Settings,
      href: "#",
    },
  ];

  const AuditorNavItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      href: "/auditor/dashboard",
      activeId: "dashboard",
    },
    {
      id: "MyAudits",
      label: "My Audits",
      icon: UserStar,
      href: "#",
      activeId: "MyAudits",
    },
    {
      id: "Checklists",
      label: "Checklists",
      icon: FileText,
      href: "#",
      activeId: "Checklists",
    },
    {
      id: "NC & OFI Management",
      label: "NC & OFI Management",
      icon: CalendarSearch,
      href: "#",
      activeId: "NC & OFI Management",
    },
    {
      id: "Report & Analytics",
      label: "Report & Analytics",
      icon: StickyNote,
      href: "#",
      activeId: "Report & Analytics",
    },
    {
      id: "Performance",
      label: "Performance",
      icon: FileSearch2,
      href: "#",
      activeId: "Performance",
    },
  ];

  useEffect(() => {
    if (ModuleType === "mr") {
      setActiveNav(MrnavItems);
    } else if (ModuleType === "auditor") {
      setActiveNav(AuditorNavItems);
    }
  }, [ModuleType]);

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <div
      className={`h-screen flex flex-col bg-[#F4FAFF] transition-all duration-300 ${
        isExpanded ? "w-64" : "w-24"
      }`}
    >
      {/* Header */}
      <div className="ml-[24px] py-[35px] flex items-center justify-between pr-4">
        <Link href="/">
          <Image
            src={
              isExpanded
                ? "/assets/qms_logo.svg"
                : "/assets/qms-logo-colleps.svg"
            }
            width={100}
            height={100}
            alt="logo"
            className={`transition-all duration-300 ${
              isExpanded ? "w-[100px] h-[50px]" : "w-[50px] h-[25px]"
            }`}
          />
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-[16px] overflow-y-auto">
        {ActiveNav.map((item, ind) => {
          const Icon = item.icon;
          const isDashboardActive = pathname.includes("/dashboard");

          const isActive = (item) => item.href === pathname;
          const isDropdownActive = (item) =>
            item.menu?.some((sub) => sub.href === pathname);
          const active = item.href ? isActive(item) : isDropdownActive(item);

          return (
            <div key={ind}>
              {item.type === "dd" ? (
                <div className="">
                  {/* Dropdown main button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full pl-[24px] mb-2 pr-[8px] py-[14px] flex items-center gap-3 rounded-lg transition-colors justify-between ${
                      active
                        ? "bg-[var(--primary-color)] text-white rounded"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-start items-center gap-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          strokeWidth="2"
                        />
                        <path d="M3 9h18M9 21V9" strokeWidth="2" />
                        <circle cx="6" cy="6" r="1" fill="currentColor" />
                        <circle cx="9" cy="6" r="1" fill="currentColor" />
                        <path
                          d="M14 13h4M14 17h4"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {isExpanded && (
                        <span
                          className={`text-[12px] font-medium ${
                            active ? "text-white" : "text-[#1D1D1D]"
                          }`}
                        >
                          {item.lable}
                        </span>
                      )}
                    </div>
                    {isExpanded && (
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="my-2 mx-auto pl-[24px] pr-[8px]">
                      {item?.menu?.map((e, ind) => (
                        <div className="rounded-xl p-2" key={ind}>
                          <button
                            className="flex items-center gap-4 ml-4 min-w-full"
                            onClick={() => {
                              setSelectedItem(item.id);
                              handleNavigation(e.href);
                            }}
                          >
                            <div
                              className={`w-3 h-3 ${
                                pathname == e.href
                                  ? "bg-blue-600"
                                  : "bg-gray-800"
                              } rounded-full`}
                            ></div>
                            {isExpanded && (
                              <span className="text-[12px] font-medium">
                                {e.lable}
                              </span>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setSelectedItem(item.id);
                    handleNavigation(item.href);
                  }}
                  className={`w-full pl-[24px] mb-2 pr-[8px] py-[14px] flex items-center gap-3 rounded-lg transition-colors ${
                    active || (isDashboardActive && item.id === "dashboard")
                      ? "bg-[var(--primary-color)] text-white rounded"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    color={
                      active || (isDashboardActive && item.id === "dashboard")
                        ? "#FFFFFF"
                        : "#1D1D1D"
                    }
                  />
                  {isExpanded && (
                    <span
                      className={`text-[12px] font-medium ${
                        active || (isDashboardActive && item.id === "dashboard")
                          ? "text-white"
                          : "text-[#1D1D1D]"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
