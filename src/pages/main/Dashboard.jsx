import React from "react";
import PageHeader from "../../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="p-4">
      {/* Bagian Header Halaman */}
      <PageHeader title="Dashboard" />

      {/* Bagian Kategori Kamar (Dinaikkan dengan mt-6) */}
      <div className="mt-6">
        <h2 className="text-3xl font-serif font-bold text-[#0B0F19] mb-1">
          Room Categories
        </h2>
        <p className="text-slate-500 italic font-serif text-sm mb-6">
          Explore our premium accommodation tiers and availability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Deluxe Room",
              price: "1.2M",
              badge: "POPULAR",
              img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
            },
            {
              name: "Suite Room",
              price: "3.5M",
              badge: "LUXURY",
              img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500",
            },
            {
              name: "Presidential Suite",
              price: "12.8M",
              badge: "ELITE",
              img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
            },
          ].map((room, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group"
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-serif font-bold">{room.name}</h3>
                  <span className="text-[9px] bg-slate-50 px-2 py-1 rounded font-bold text-slate-700 uppercase tracking-wider">
                    {room.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4 font-serif italic">
                  Refined comfort with premium amenities...
                </p>
                <div className="flex justify-between items-end border-t pt-4 border-slate-50">
                  <span className="text-xs text-slate-400 font-bold">
                    Rp {room.price}{" "}
                    <span className="italic font-serif font-normal">/night</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}