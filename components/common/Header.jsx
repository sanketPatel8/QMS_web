import { Bell, Grid3x3, MessageSquareMore } from "lucide-react";
import Image from "next/image";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-transparent py-2">
      <div className="flex items-center justify-between">
        {/* Logo/Title */}
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        {/* Right side icons and profile */}
        <div className="flex items-center gap-3">
          {/* Grid icon */}
          <button className="text-gray-700 p-2 !rounded-md hover:text-gray-900 transition-colors bg-[#F7FBFF]">
            <BsFillGrid3X3GapFill size={24} />
          </button>

          {/* Message icon */}
          <button className="text-gray-700 p-2 !rounded-md hover:text-gray-900 transition-colors bg-[#F7FBFF]">
            <MessageSquareMore size={24} />
          </button>

          {/* Notification bell with badge */}
          <button className="relative text-gray-700 p-2 !rounded-md hover:text-gray-900 transition-colors bg-[#F7FBFF]">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile section */}
          <div className="flex items-center gap-2 ml-2 p-2 rounded-md bg-[#F7FBFF]">
            <div className="rounded-lg overflow-hidden bg-gray-200">
              {/* <img src="" className="w-full h-full object-cover" /> */}
              <Image
                src="/assets/user.jpg"
                width={40}
                height={40}
                alt="Liza Brown"
              />
            </div>
            <div className="text-left ">
              <p className="text-sm font-semibold text-gray-900 my-0 py-0">
                Liza Brown
              </p>
              <p className="text-xs text-gray-500 my-0 py-0">Auditee</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
