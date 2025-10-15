import Header from "@/components/common/Header";
import Sidebar from "@/components/module/audit_schedule/sidebar";

// app/(pages)/mr/layout.js
export default function MRLayout({ children }) {
  return (
    <div className="container-fluid tw-bg-gray-50 tw-min-h-screen">
      <div className="row">
        <div className="col-md-3 px-0">
          <Sidebar />
        </div>
        <div className="col-md-9 px-4 border-2 border-red-400 bg-gradient-to-r from-[#F4FAFF] to-[#EAF4FF] via-[#F4FAFF] via-[60%]">
          <Header />
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}
