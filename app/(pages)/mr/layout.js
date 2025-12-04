"use client";

import Header from "@/components/common/Header";
// import MrSidebar from "@/components/module/audit_schedule/MrSidebaar";
import Sidebar from "@/components/module/audit_schedule/sidebar";
import dynamic from "next/dynamic";
import { useState } from "react";

const MrSidebar = dynamic(
  () => import("@/components/module/audit_schedule/MrSidebaar"),
  {
    ssr: false,
  }
);

// app/(pages)/mr/layout.js
export default function MRLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="container-fluid tw-bg-gray-50 tw-min-h-screen px-0">
      <div className="flex w-full">
        <div className=" px-0">
          <MrSidebar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            ModuleType="mr"
          />
        </div>
        <div className="px-4 bg-gradient-to-r from-[#F4FAFF] to-[#EAF4FF] via-[#F4FAFF] via-[60%] overflow-y-scroll max-h-screen w-full">
          <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}
