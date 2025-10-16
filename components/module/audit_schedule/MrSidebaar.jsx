"use client";

import React, { useState } from "react";
import { Home, Users, ChevronDown, Settings } from "lucide-react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function MrSidebar() {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
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

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <div className="h-screen flex flex-col bg-[#F4FAFF]">
      {/* Header */}
      <div className="ml-[24px] py-[35px] flex items-center">
        <Image
          src="/assets/qms_logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="w-[87px] h-[27px]"
        />
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-[16px]">
        {navItems.map((item, ind) => {
          const Icon = item.icon;
          const isDashboardActive = pathname.includes("/dashboard");

          // const isDashboardActive = pathname.startsWith("/mr/dashboard");

          const isActive = (item) => {
            let active = item.href === pathname;

            // Merge conditions
            active = active;

            return active;
          };

          const isDropdownActive = (item) =>
            item.menu?.some((sub) => sub.href === pathname);

          const active = item.href
            ? isActive(item) // single link
            : isDropdownActive(item);

          console.log(active, "active");

          return (
            <>
              {item.type == "dd" ? (
                <div className="" key={ind}>
                  <div className="mx-auto">
                    {/* Main Header Button */}
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full pl-[24px] mb-2 pr-[8px] py-[14px] flex items-center gap-3 rounded-lg transition-colors justify-between ${
                        active
                          ? "bg-[var(--primary-color)] text-white rounded"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-start items-center gap-3">
                        <div className="">
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
                        </div>
                        {/* <h1 className="text-3xl font-bold">NC & OFI Report</h1> */}
                        <span
                          className={`text-[12px] font-medium ${
                            active ? "text-white" : "text-[#1D1D1D]"
                          }`}
                        >
                          {item.lable}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Content */}
                    <div
                      className={`overflow-hidden transition-all  duration-300 ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="my-2 mx-auto pl-[24px] pr-[8px]">
                        {/* NC Overview */}
                        {item?.menu?.map((e, ind) => {
                          return (
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
                                  }  rounded-full`}
                                ></div>
                                {/* active color :-  */}
                                <span className={`text-[12px] font-medium`}>
                                  {e.lable}
                                </span>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={ind}
                  onClick={() => {
                    setSelectedItem(item.id);
                    handleNavigation(item.href);
                  }}
                  // className={`w-full pl-[24px] mb-2 pr-[8px] py-[14px] flex items-center gap-3 rounded-lg transition-colors ${
                  //   active || isDashboardActive == true
                  //     ? "bg-[var(--primary-color)] text-white rounded"
                  //     : "text-gray-700 hover:bg-gray-100"
                  // }`}
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
                  <span
                    className={`text-[12px] font-medium ${
                      active || (isDashboardActive && item.id === "dashboard")
                        ? "text-white"
                        : "text-[#1D1D1D]"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              )}
            </>
          );
        })}
      </nav>
    </div>
  );
}
