import React from "react";

export default function TopSellingItem({ name, total }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-800/20 last:border-0 group cursor-pointer transition-all">
      {/* Nama Layanan Hotel */}
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors truncate pr-2">
        {name}
      </span>

      {/* Angka Penggunaan (Tanpa Panah) */}
      <span className="text-sm font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
        {total}{" "}
        <span className="text-[10px] font-normal opacity-50 ml-1">uses</span>
      </span>
    </div>
  );
}
