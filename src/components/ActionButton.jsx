import React from "react";
// LuMoreVertical kita hapus dari sini
import { LuDownload, LuPrinter, LuEye } from "react-icons/lu";
// Kita panggil ikon titik tiga dari FontAwesome yang pasti aman
import { FaEllipsisV } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ActionButtons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none">
          {/* Gunakan FaEllipsisV di sini */}
          <FaEllipsisV size={16} className="text-gray-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-white border border-gray-100 shadow-md"
      >
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer gap-2 hover:bg-gray-50">
          <LuEye size={16} /> View Details
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer gap-2 hover:bg-gray-50">
          <LuPrinter size={16} /> Print Invoice
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer gap-2 text-indigo-600 hover:bg-indigo-50">
          <LuDownload size={16} /> Download PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
