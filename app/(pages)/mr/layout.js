import Header from "@/components/common/Header";
import MrSidebar from "@/components/module/audit_schedule/MrSidebaar";
import Sidebar from "@/components/module/audit_schedule/sidebar";

// app/(pages)/mr/layout.js
export default function MRLayout({ children }) {
  return (
    <div className="container-fluid tw-bg-gray-50 tw-min-h-screen">
      <div className="row">
        <div className="col-md-2 px-0">
          <MrSidebar />
        </div>
        <div className="col-md-10 px-4 bg-gradient-to-r from-[#F4FAFF] to-[#EAF4FF] via-[#F4FAFF] via-[60%] overflow-y-scroll max-h-screen">
          <Header />
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}
