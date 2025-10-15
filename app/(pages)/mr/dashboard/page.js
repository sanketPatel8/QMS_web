import AuditList from "@/components/module/audit_schedule/AuditList";
import OverViewDetails from "@/components/module/audit_schedule/OverViewDetails";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full max-w-full">
        <div className="row gap-0">
          <div className="col-md-12">
            <OverViewDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
