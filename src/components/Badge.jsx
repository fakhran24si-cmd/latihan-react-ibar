import React from "react";

export default function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variants = {
    default: "bg-gray-100 text-gray-600",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    dark: "bg-black text-white",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
