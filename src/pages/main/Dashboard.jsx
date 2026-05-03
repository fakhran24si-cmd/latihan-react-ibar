import PageHeader from "../../components/PageHeader";
// Import ikon yang relevan untuk metrik hotel[cite: 12]
import { MdBedroomChild, MdLocalLaundryService } from "react-icons/md";
import { FaCalendarCheck, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  // Data array stats disesuaikan dengan topik hotel[cite: 12]
  const stats = [
    {
      id: 1,
      label: "Rooms Available",
      value: "45/100",
      icon: <MdBedroomChild />,
      color: "bg-indigo-600",
      barColor: "bg-indigo-600",
      progress: "45%",
    },
    {
      id: 2,
      label: "Check-ins Today",
      value: "12",
      icon: <FaCalendarCheck />,
      color: "bg-amber-500",
      barColor: "bg-amber-500",
      progress: "80%",
    },
    {
      id: 3,
      label: "Pending Laundry",
      value: "28",
      icon: <MdLocalLaundryService />,
      color: "bg-cyan-500",
      barColor: "bg-cyan-500",
      progress: "30%",
    },
    {
      id: 4,
      label: "Total Revenue",
      value: "Rp 45.5M",
      icon: <FaDollarSign />,
      color: "bg-emerald-600",
      barColor: "bg-emerald-600",
      progress: "70%",
    },
  ];

  return (
    <div>
      {/* PageHeader menggunakan breadcrumb array sesuai instruksi[cite: 6, 12] */}
      <PageHeader title="Hotel Overview" breadcrumb={["Main", "Dashboard"]} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-3xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-lg"
          >
            {/* Wrapper ikon dengan warna dinamis[cite: 12] */}
            <div
              className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white mb-4 shadow-lg shadow-opacity-20`}
            >
              {item.icon}
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-black text-gray-800">
                {item.value}
              </h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {item.label}
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-bold text-gray-500">
                  Target
                </span>
                <span className="text-[10px] font-bold text-gray-700">
                  {item.progress}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${item.barColor} h-2 rounded-full`}
                  style={{ width: item.progress }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ROOM CATEGORIES SECTION */}
      <div className="mt-12">
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
              price: "2.5M",
              badge: "STANDARD",
              img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500",
            },
            {
              name: "Suite Room",
              price: "5.2M",
              badge: "POPULAR",
              img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
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
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-serif font-bold">{room.name}</h3>
                  <span className="text-[9px] bg-slate-50 px-2 py-1 rounded font-bold">
                    {room.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4 font-serif italic">
                  Refined comfort with premium amenities...
                </p>
                <div className="flex justify-between items-end border-t pt-4">
                  <span className="text-xs text-slate-400">
                    Rp {room.price}{" "}
                    <span className="italic font-serif">/night</span>
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
