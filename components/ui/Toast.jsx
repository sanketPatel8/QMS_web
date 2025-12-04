// "use client";

// import { CheckCircle, X, XCircle } from "lucide-react";
// import { useEffect } from "react";

// const Toast = ({ id, message, type, duration, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, duration);

//     return () => clearTimeout(timer);
//   }, [duration, onClose]);

//   const config = {
//     success: {
//       bg: "bg-green-600",
//       icon: CheckCircle,
//       text: "text-white",
//     },
//     error: {
//       bg: "bg-red-500",
//       icon: XCircle,
//       text: "text-white",
//     },
//   };

//   const { bg, icon: Icon, text } = config[type] || config.success;

//   return (
//     <div
//       className={`${bg} ${text} rounded-lg shadow-lg px-6 py-3 flex items-center gap-3 min-w-[300px] max-w-md animate-slide-in`}
//     >
//       <Icon className="w-5 h-5 flex-shrink-0" />
//       <p className="flex-1 font-medium text-lg my-0 py-0">{message}</p>
//       <button
//         onClick={onClose}
//         className="flex-shrink-0 hover:opacity-80 transition-opacity"
//       >
//         <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//           <X
//             className={`w-4 h-4 ${
//               type == "success" ? "text-green-500" : "text-red-500"
//             }`}
//           />
//         </div>
//       </button>
//     </div>
//   );
// };

// export default Toast;

"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle, XCircle } from "lucide-react";

const Toast = ({ id, message, type, duration, onClose }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => handleClose(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setClosing(true); // start slide-out
    setTimeout(() => onClose(), 300); // remove after animation
  };

  const config = {
    success: {
      bg: "bg-[#41AA5A]",
      icon: CheckCircle,
      text: "text-white",
    },
    error: {
      bg: "bg-red-700",
      icon: XCircle,
      text: "text-white",
    },
  };

  const { bg, icon: Icon, text } = config[type] || config.success;

  return (
    <div
      className={`${bg} ${text} rounded-lg shadow-lg px-6 py-3 flex items-center gap-3 min-w-[300px] max-w-md 
        ${closing ? "animate-slide-out" : "animate-slide-in"}`}
    >
      {/* <Icon className="w-5 h-5 flex-shrink-0" /> */}
      <p className="flex-1 font-[500] text-[16px] font-saira my-0 py-0">
        {message}
      </p>
      <button
        onClick={handleClose}
        className="flex-shrink-0 hover:opacity-80 transition-opacity"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <X
            className={`w-4 h-4 ${
              type === "success" ? "text-[#41AA5A]" : "text-red-700"
            }`}
          />
        </div>
      </button>
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-out {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out forwards; }
        .animate-slide-out { animation: slide-out 0.3s ease-in forwards; }
      `}</style>
    </div>
  );
};

export default Toast;
