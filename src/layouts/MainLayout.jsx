import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import InboxItem from "../components/InboxItem";
import TopSellingItem from "../components/TopSellingItem"; // Komponen layanan hotel
import SearchBar from "../components/SearchBar";

// Menambahkan 'export default' untuk memperbaiki error "does not provide an export named 'default'"
export default function MainLayout() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex font-sans">
      {/* KOLOM 1: SIDEBAR (Menu Navigasi Hotel) */}
      <Sidebar />

      {/* KOLOM 2: KONTEN UTAMA (Tengah - Dashboard/Halaman Lain) */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>

      {/* KOLOM 3: PANEL KANAN (Dark Sidebar untuk Informasi Cepat) */}
      <div className="w-80 bg-[#1A1A1A] p-6 text-white hidden xl:flex flex-col border-l border-gray-800">
        {/* Section Profil & Notifikasi */}
        <div className="flex items-center justify-end gap-3 mb-8">
          <div className="text-right">
            <p className="text-sm font-bold text-white">Jackson Murouse</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              General Manager
            </p>
          </div>
          {/* Avatar Manajer */}
          <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center font-bold text-sm text-white">
            J
          </div>
          <span className="text-xl ml-2 cursor-pointer hover:text-indigo-400 transition-colors">
            🔔
          </span>
        </div>

        {/* Search Bar untuk mencari data tamu/kamar */}
        <div className="mb-8">
          <SearchBar
            placeholder="Search guest or room..."
            className="bg-[#252525] border-none text-white"
          />
        </div>

        {/* Section Inbox (Permintaan Layanan Tamu) */}
        <div className="flex flex-col mb-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg tracking-tight text-white uppercase text-xs opacity-70">
              Guest Requests
            </h3>
            <button className="text-gray-500 hover:text-white transition-colors">
              <span className="text-lg">⬅️</span>
            </button>
          </div>

          <div className="space-y-1">
            <InboxItem
              name="Mike Thomson"
              message="Need extra towels room #204"
              time="10:32 am"
              unreadCount={1}
            />
            <InboxItem
              name="George Dose"
              message="Breakfast for 2 people"
              time="09:17 am"
              unreadCount={0}
            />
            <InboxItem
              name="Lisa Moren"
              message="Late check-in at 11 PM"
              time="Yesterday"
              unreadCount={2}
            />
          </div>
        </div>

        {/* SECTION TOP SERVICE HOTEL (Tanpa Panah) */}
        <div className="mt-auto pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-white text-[10px] uppercase tracking-[0.2em] opacity-60">
              Top Service Hotel
            </h3>
            <div className="bg-[#252525] text-[9px] text-gray-500 border border-gray-800 rounded px-2 py-1 uppercase font-bold">
              1W ▾
            </div>
          </div>

          <div className="flex flex-col">
            {/* Memanggil komponen TopSellingItem yang sudah kita sesuaikan */}
            <TopSellingItem name="Spa & Massage" total="245" />
            <TopSellingItem name="Swimming Pool" total="189" />
            <TopSellingItem name="Room Service" total="156" />
            <TopSellingItem name="Gym Center" total="92" />
            <TopSellingItem name="Laundry Service" total="74" />
          </div>
        </div>
      </div>
    </div>
  );
}
