import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DropdownWithblue({ options, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 px-3 py-2 bg-transparent border-1 border-blue-600 !rounded-md  transition-all min-w-[100px]"
      >
        <span className="text-xl text-blue-600">{selected.value}</span>
        <ChevronDown
          size={20}
          className={`text-blue-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-1 border-gray-200 rounded-md  overflow-hidden z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`w-full px-2 py-2 text-left text-sm font-medium transition-colors ${
                selected.value === option.value
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
