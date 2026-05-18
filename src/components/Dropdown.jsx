import React from "react";

export default function Dropdown({ label, options = [] }) {
  return (
    <div className="relative inline-block">
      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
        {label}
        <span className="text-[10px] text-gray-400">▼</span>
      </button>
    </div>
  );
}
