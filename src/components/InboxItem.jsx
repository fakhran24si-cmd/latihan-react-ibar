import React from "react";

export default function InboxItem({ name, message, time, unreadCount }) {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-all group">
      {/* Avatar Bulat Kecil */}
      <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-bold text-xs text-white">
        {name.charAt(0)}
      </div>

      {/* Konten Pesan */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <h4 className="text-sm font-bold text-white truncate group-hover:text-green-400 transition-colors">
            {name}
          </h4>
          <span className="text-[10px] text-gray-500 whitespace-nowrap ml-2">
            {time}
          </span>
        </div>
        <p className="text-xs text-gray-400 truncate leading-relaxed">
          {message}
        </p>
      </div>

      {/* Indikator Belum Dibaca */}
      {unreadCount > 0 && (
        <div className="w-5 h-5 bg-white text-black text-[10px] font-bold flex items-center justify-center rounded-full shadow-lg">
          {unreadCount}
        </div>
      )}
    </div>
  );
}
