import React from "react";

export default function NotificationBell({ hasNotification = true }) {
  return (
    <button className="relative p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all">
      <span className="text-xl">🔔</span>
      {hasNotification && (
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      )}
    </button>
  );
}
