import React from "react";

export default function SearchBar({ placeholder = "Search..." }) {
  return (
    <div className="relative flex items-center w-full max-w-sm">
      <span className="absolute left-3 text-gray-400">🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  );
}
