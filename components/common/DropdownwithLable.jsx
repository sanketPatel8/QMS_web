import { useState, useRef, useEffect } from "react";

// Reusable Dropdown Component
export const DropdownwithLable = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`w-full ${className}`} ref={dropdownRef}>
      <div className="relative border border-gray-200 rounded-md px-3 pt-2 pb-2 bg-white">
        {label && (
          <label className="block text-[11px] text-gray-400 mb-0.5 font-normal">
            {label}
          </label>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left bg-transparent border-0 text-sm text-gray-900 focus:outline-none flex items-center justify-between"
        >
          <span className="text-gray-900 text-[15px]">
            {value || placeholder}
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-md max-h-60 overflow-auto z-10">
            {options.map((option, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-3 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                  value === option
                    ? "bg-gray-50 text-gray-900"
                    : "text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Demo Component
export default function Dropdownwith() {
  const [selectedAudit, setSelectedAudit] = useState("System Audit");

  const auditOptions = [
    "System Audit",
    "Financial Audit",
    "Security Audit",
    "Compliance Audit",
    "Performance Audit",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-sm mx-auto bg-white p-6">
        <Dropdown
          label="Select Audit"
          options={auditOptions}
          value={selectedAudit}
          onChange={setSelectedAudit}
          placeholder="Choose an audit type"
        />

        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p className="text-xs text-gray-500">Selected Value:</p>
          <p className="text-base font-medium text-gray-900 mt-1">
            {selectedAudit || "None"}
          </p>
        </div>
      </div>
    </div>
  );
}
