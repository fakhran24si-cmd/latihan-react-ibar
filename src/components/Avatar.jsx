import React from "react";

export default function Avatar({ name, src, size = "w-10 h-10" }) {
  // Jika tidak ada foto (src), pakai inisial nama
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <div
      className={`${size} rounded-full border border-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-100`}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-[10px] font-bold text-gray-500">{initials}</span>
      )}
    </div>
  );
}
