import { X } from "lucide-react";
import { useRef } from "react";

export default function AuditPopupBody({
  type = "reschedule", // "reschedule" or "accept"
  onClose,
  onPrimaryAction,
  onSecondaryAction,
}) {
  const popupRef = useRef(null);

  // Close popup when clicking outside
  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div
        ref={popupRef}
        className="bg-white  shadow-2xl max-w-2xl w-full overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-end p-4 pb-0">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="px-12 py-8 pb-10">
          {type === "reschedule" ? (
            <>
              <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
                Before Rescheduling the Audit
              </h2>
              <p className="text-center text-gray-500 mb-8 leading-relaxed">
                Please ensure the new date and time are mutually confirmed with
                the auditor. You can either reschedule directly or chat with the
                auditee to finalize the timing.
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onPrimaryAction}
                  className="w-full py-4 px-6 bg-white text-blue-600 border-2 border-blue-600 !rounded-md font-medium text-lg hover:bg-blue-50 transition-colors my-3"
                >
                  Reschedule Anyway
                </button>
                <button
                  onClick={onSecondaryAction}
                  className="w-full py-4 px-6 bg-blue-600 text-white !rounded-md font-medium text-lg hover:bg-blue-700 transition-colors"
                >
                  Chat with Auditor
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
                Before Accepting the Audit
              </h2>
              <p className="text-center text-gray-500 mb-8">
                Kindly check the timing and date before accepting.
              </p>

              {/* Date & Time */}
              <div className="mb-8 text-center">
                <p className="text-gray-500 text-sm mb-2">Date & Time</p>
                <p className="text-2xl font-semibold text-gray-900">
                  05-Oct-2025 • 10:00 AM
                </p>
              </div>

              {/* Accept Button */}
              <button
                onClick={onPrimaryAction}
                className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
              >
                Accept Schedule
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
