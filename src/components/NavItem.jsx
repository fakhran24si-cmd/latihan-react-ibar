import React from "react";

export default function NavItem({ label, icon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-full transition-all duration-200 ${
        isActive
          ? "bg-white text-black font-semibold"
          : "text-gray-400 hover:text-white hover:bg-white/10"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}
