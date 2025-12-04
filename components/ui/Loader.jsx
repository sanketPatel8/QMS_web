"use client";

import React from "react";
import { ClipLoader, DotLoader, RingLoader, ScaleLoader } from "react-spinners";

export default function QMSLoader({
  type = "button",
  size = "sm",
  color = "#ffffff",
}) {
  if (type == "screen") {
    return <ScreenLoader size={size} color={color} />;
  }

  return <ButtonLoader size={"lg"} color={color} />;
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

const ButtonLoader = ({ size, color }) => {
  return (
    <div className="flex items-center justify-center">
      <DotLoader color={color} size={sizeMap[size] || 16} />
    </div>
  );
};

const ScreenLoader = ({ size, color }) => {
  return (
    <div className="flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex justify-center items-center">
          {" "}
          <RingLoader color="#2563EB" size={50} />
        </div>
        {/* <p className="text-gray-600 font-medium mt-4 text-center">Loading...</p> */}
      </div>
    </div>
  );
};

// example useg

{
  /* <button disabled={loading}>
  {loading ? <QMSLoader type="button" size="sm" /> : "Submit"}
</button>;

{
  isScreenLoading && <QMSLoader type="screen" />;
} */
}
