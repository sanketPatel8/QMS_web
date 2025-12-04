"use client";
import React from "react";

export default function SessionPopup({ open, onContinueHere, onGoBack }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] text-center">
        <h2 className="text-xl font-semibold mb-2">Active Session Detected</h2>
        <p className="text-gray-600 mb-4">
          You are already logged in another module. What would you like to do?
        </p>

        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onGoBack}>
            Go Back
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={onContinueHere}
          >
            Continue Here
          </button>
        </div>
      </div>
    </div>
  );
}
