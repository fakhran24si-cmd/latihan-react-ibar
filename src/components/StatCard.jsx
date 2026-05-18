import React from "react";

export default function StatCard({ title, value, trend, isUp = true }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-2 transition-all hover:shadow-md">
      {/* Label Judul */}
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        {title}
      </p>

      {/* Nilai Utama */}
      <h3 className="text-3xl font-black text-gray-800">{value}</h3>

      {/* Indikator Trend (Visualisasi teks, bukan grafik) */}
      <div className="flex items-center gap-1 mt-1">
        <span
          className={`text-xs font-bold ${isUp ? "text-green-500" : "text-red-500"}`}
        >
          {isUp ? "↑" : "↓"} {trend}%
        </span>
        <span className="text-[10px] text-gray-400 font-medium">
          vs last Month
        </span>
      </div>
    </div>
  );
}
