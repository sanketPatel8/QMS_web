"use client";

import React, { useState } from "react";
import {
  Home,
  Users,
  ClipboardList,
  Building2,
  BarChart3,
  Activity,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const router = useRouter();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
    { id: "myAudits", label: "My Audits", icon: Users, href: "/my-audits" },
    {
      id: "checklists",
      label: "Checklists",
      icon: ClipboardList,
      href: "/checklists",
    },
    {
      id: "ncOfi",
      label: "NC & OFI Management",
      icon: Building2,
      href: "/nc-ofi",
    },
    {
      id: "reports",
      label: "Report & Analytics",
      icon: BarChart3,
      href: "/reports",
    },
    {
      id: "performance",
      label: "Performance",
      icon: Activity,
      href: "/performance",
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
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = selectedItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItem(item.id);
                handleNavigation(item.href);
              }}
              className={`w-full pl-[24px] mb-2 pr-[8px] py-[14px] flex items-center gap-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[var(--primary-color)] text-white rounded"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={2}
                color={isActive ? "#FFFFFF" : "#1D1D1D"}
              />
              <span
                className={`text-sm font-medium ${
                  isActive ? "text-white" : "text-[#1D1D1D]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
