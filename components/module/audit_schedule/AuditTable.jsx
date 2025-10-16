"use client";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { RxCross2 } from "react-icons/rx";

const auditors = [
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sarah Lee",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const auditees = [
  {
    name: "Liza Brown",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Clark",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Olivia Adams",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

export default function AuditTable() {
  const [data, setData] = useState([
    {
      id: "SA-PS-001",
      occurrence: "Oct-2025",
      auditor: auditors[0],
      auditee: auditees[0],
    },
    {
      id: "SA-PS-002",
      occurrence: "Nov-2025",
      auditor: auditors[0],
      auditee: auditees[0],
    },
    {
      id: "SA-PS-003",
      occurrence: "Dec-2025",
      auditor: auditors[0],
      auditee: auditees[0],
    },
    {
      id: "SA-PS-004",
      occurrence: "Jan-2026",
      auditor: auditors[0],
      auditee: auditees[0],
    },
    {
      id: "SA-PS-005",
      occurrence: "Feb-2026",
      auditor: auditors[0],
      auditee: auditees[0],
    },
    {
      id: "SA-PS-006",
      occurrence: "Mar-2026",
      auditor: auditors[0],
      auditee: auditees[0],
    },
  ]);

  const handleAuditorChange = (rowIndex, auditor) => {
    const newData = [...data];
    newData[rowIndex].auditor = auditor;
    setData(newData);
  };

  const handleAuditeeChange = (rowIndex, auditee) => {
    const newData = [...data];
    newData[rowIndex].auditee = auditee;
    setData(newData);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "150px",
    },
    {
      name: "Occurrence",
      selector: (row) => row.occurrence,
      sortable: true,
      width: "150px",
    },
    {
      name: "Auditor",
      cell: (row, index) => (
        <div className="flex items-center gap-1">
          <img
            src={row.auditor.image}
            alt={row.auditor.name}
            className="w-8 h-8 rounded-full"
          />
          <select
            value={row.auditor.name}
            onChange={(e) =>
              handleAuditorChange(
                index,
                auditors.find((a) => a.name === e.target.value)
              )
            }
            className="px-2 py-1 bg-transparent focus:outline-none"
          >
            {auditors.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      ),
      width: "250px",
    },
    {
      name: "Auditee",
      cell: (row, index) => (
        <div className="flex items-center gap-1">
          <img
            src={row.auditee.image}
            alt={row.auditee.name}
            className="w-8 h-8 rounded-full"
          />
          <select
            value={row.auditee.name}
            onChange={(e) =>
              handleAuditeeChange(
                index,
                auditees.find((a) => a.name === e.target.value)
              )
            }
            className="px-2 py-1 bg-transparent focus:outline-none"
          >
            {auditees.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      ),
      width: "250px",
    },
    {
      name: "",
      cell: () => (
        <button className="text-gray-500 hover:text-red-500 font-bold">
          <RxCross2 size={25} />
        </button>
      ),
      width: "120px",
    },
  ];

  return (
    <div
      className="h-full"
      style={{
        borderLeft: "1px solid #E5E7EB", // light gray
      }}
    >
      <DataTable
        columns={columns}
        data={data}
        striped
        dense
        customStyles={{
          headCells: {
            style: {
              backgroundColor: "#FAFDFF",
              fontWeight: "600",
              fontSize: "14px",
            },
          },
          cells: {
            style: {
              paddingTop: "10px",
              paddingBottom: "10px",
            },
          },

          rows: {
            style: {
              "&:nth-child(odd)": {
                backgroundColor: "#FAFDFF",
              },
              "&:nth-child(even)": {
                backgroundColor: "#FAFDFF",
              },
              borderTop: "0.5px solid #E5E7EB",
              borderBottom: "0.5px solid #E5E7EB",
            },
          },
        }}
      />
    </div>
  );
}
