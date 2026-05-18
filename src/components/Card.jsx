import React from "react";

export default function Avatar({
  src,
  alt = "User",
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div
      className={`rounded-full overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center ${sizes[size]} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-500 font-bold uppercase">
          {alt.charAt(0)}
        </span>
      )}
    </div>
  );
}
