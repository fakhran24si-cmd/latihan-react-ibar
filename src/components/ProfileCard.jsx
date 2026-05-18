import React from "react";
import Avatar from "./Avatar";

export default function ProfileCard({
  name = "Jackson Murouse",
  role = "Sale Manager",
  avatarSrc,
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Teks di kanan atas Figma biasanya putih karena backgroundnya gelap */}
      <div className="text-right hidden md:block">
        <h4 className="text-sm font-bold text-white">{name}</h4>
        <p className="text-xs text-gray-400">{role}</p>
      </div>
      <Avatar src={avatarSrc} alt={name} size="md" />
    </div>
  );
}
