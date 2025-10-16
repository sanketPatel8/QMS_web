// app/audit/page.jsx
"use client";

import AuditFilters from "@/components/module/audit_schedule/AuditFilters";
import AuditTable from "@/components/module/audit_schedule/AuditTable";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuditPage() {
  const router = useRouter();
  const [audits, setAudits] = useState([
    {
      id: "SA-PS-001",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-002",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-003",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-004",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-005",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-006",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-007",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-008",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-009",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-010",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-011",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
    {
      id: "SA-PS-012",
      department: "Oct-2025",
      author: "Emily Davis",
      auditor: "Liza Brown",
      status: "pending",
    },
  ]);

  const [selectedAudits, setSelectedAudits] = useState([]);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedAudits(audits.map((a) => a.id));
    } else {
      setSelectedAudits([]);
    }
  };

  const handleSelectAudit = (id) => {
    setSelectedAudits((prev) =>
      prev.includes(id)
        ? prev.filter((auditId) => auditId !== id)
        : [...prev, id]
    );
  };

  const handleExport = () => {
    console.log("Exporting audits:", selectedAudits);
    alert(`Exporting ${selectedAudits.length} audits`);
  };

  const handleAssign = () => {
    // console.log("Assigning audits:", selectedAudits);
    // alert(`Assigning ${selectedAudits.length} audits`);
    // alert();
    router.push("/mr/dashboard/auditbydate");
  };

  return (
    <div className="bg-[#FAFDFF] p-6">
      <div className="mx-auto">
        <div className="bg-[#FAFDFF] h-screen">
          <div className="row">
            <div className="col-md-5">
              <AuditFilters />
            </div>
            <div className="col-md-7">
              <AuditTable
                audits={audits}
                selectedAudits={selectedAudits}
                onSelectAll={handleSelectAll}
                onSelectAudit={handleSelectAudit}
              />
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              {selectedAudits.length} Audits will be assigned
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Export as
              </button>
              <button
                onClick={handleAssign}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Assign Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
