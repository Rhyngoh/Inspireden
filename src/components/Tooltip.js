"use client";

import React from "react";

export default function Tooltip({ visible, popoverText }) {
  if (!visible) return null;

  return (
    <div className="text-center absolute -left-3/4 bottom-8 w-[250%] p-1 bg-gray-700 rounded bg-opacity-50 backdrop-blur-sm flex justify-center items-center transition-all after:w-0 after:h-10 after:border-gray-700 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:absolute after:-bottom-10 after:border-opacity-30">
      <div className="rounded text-gray-100">{popoverText}</div>
    </div>
  );
}
