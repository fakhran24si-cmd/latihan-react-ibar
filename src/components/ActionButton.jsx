import React from "react";
import { LuDownload, LuPrinter, LuEye } from "react-icons/lu";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      {/* Pakai ikon asli dari library agar lebih tajam dan bersih */}
      <button
        className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-indigo-600 transition-colors"
        title="Print"
      >
        <LuPrinter size={16} />
      </button>

      <button
        className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-indigo-600 transition-colors"
        title="Download"
      >
        <LuDownload size={16} />
      </button>

      <button
        className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-indigo-600 transition-colors"
        title="View"
      >
        <LuEye size={16} />
      </button>
    </div>
  );
}
