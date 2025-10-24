import ActivityList from "@/components/common/ActivityList";
import AuditList from "@/components/module/audit_schedule/AuditList";
import Chart from "@/components/module/audit_schedule/Chart";
import OverViewDetails from "@/components/module/audit_schedule/OverViewDetails";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full max-w-full">
        <div className="row gap-0 my-2">
          <div className="col-md-12">
            <OverViewDetails userType="mr" />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <Chart />
          </div>
          <div className="col-md-6">
            <Chart />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <ActivityList />
          </div>
          <div className="col-md-6">
            <ActivityList />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
