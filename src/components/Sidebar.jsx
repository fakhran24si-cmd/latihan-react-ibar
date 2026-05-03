import { NavLink } from "react-router-dom";
// Import semua ikon dalam satu baris dari library masing-masing[cite: 7]
import {
  MdDashboard,
  MdBedroomChild,
  MdMeetingRoom,
  MdError,
} from "react-icons/md";
import { FaCalendarCheck, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-4 font-medium transition-all ${
      isActive
        ? "bg-indigo-100 text-indigo-700 font-bold" // Tema Indigo[cite: 7]
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <div className="w-64 bg-[#0B0F19] h-screen sticky top-0 flex flex-col shadow-2xl z-50">
      {/* Area Logo & Branding */}
      <div className="p-8 pb-10">
        <h2 className="text-3xl font-serif text-amber-500 italic tracking-wider">
          Grand stay
        </h2>
        <p className="text-[10px] text-amber-600/80 font-bold uppercase tracking-[0.3em] mt-2">
          Luxury Hotel
        </p>
      </div>

      {/* Navigasi Menu */}
      <nav className="flex-1 mt-4">
        {[
          { path: "/", label: "Dashboard", icon: <MdDashboard /> },
          { path: "/orders", label: "Reservations", icon: <FaCalendarCheck /> },
          { path: "/customers", label: "Guest List", icon: <FaUsers /> },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 py-4 px-8 transition-all duration-300 border-l-4 ${
                isActive
                  ? "border-amber-500 bg-slate-800/30 text-amber-500 font-bold"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm tracking-wide">{item.label}</span>
          </NavLink>
        ))}

        {/* Label System Status */}
        <div className="pt-8 pb-2 px-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          System Status
        </div>
        <NavLink
          to="/401"
          className={({ isActive }) =>
            `flex items-center gap-4 py-4 px-8 border-l-4 ${
              isActive
                ? "border-red-500 text-red-500"
                : "border-transparent text-slate-500"
            }`
          }
        >
          <MdError className="text-xl" />{" "}
          <span className="text-sm">Security Error</span>
        </NavLink>
      </nav>
    </div>
  );
}
