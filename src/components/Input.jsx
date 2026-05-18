import React from "react";

export default function Input({ icon, className = "", ...props }) {
  return (
    <div className={`relative flex items-center w-full ${className}`}>
      {icon && (
        <div className="absolute left-3 text-gray-400 flex items-center justify-center">
          {icon}
        </div>
      )}
      <input
        className={`w-full border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 py-2.5 ${
          icon ? "pl-10" : "pl-4"
        } pr-4 text-gray-700 bg-white`}
        {...props}
      />
    </div>
  );
}
