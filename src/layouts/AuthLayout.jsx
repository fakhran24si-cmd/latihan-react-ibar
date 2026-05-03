import { Outlet } from "react-router-dom";
import { MdOutlineSupportAgent, MdOutlineSecurity } from "react-icons/md";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#131722]">
      {/* Wrapper Card Login */}
      <div className="relative w-full max-w-md">
        {/* Aksen Garis Emas (Gold Border) di Kanan Atas */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#E8B953] rounded-tr-lg opacity-60 pointer-events-none z-0 mt-[-1px] mr-[-1px]"></div>

        {/* Main Card */}
        <div className="bg-[#1C212D] p-10 shadow-2xl relative z-10 w-full rounded-sm">
          {/* Outlet ini yang akan memanggil form dari Login.jsx */}
          <Outlet />
        </div>
      </div>

      {/* Footer System & Security Links */}
      <div className="flex space-x-12 text-xs text-slate-500 mt-8 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-[#E8B953] transition-colors cursor-pointer"
        >
          <MdOutlineSupportAgent className="mr-2 text-lg" /> System Support
        </a>
        <a
          href="#"
          className="flex items-center hover:text-[#E8B953] transition-colors cursor-pointer"
        >
          <MdOutlineSecurity className="mr-2 text-lg" /> Security Policy
        </a>
      </div>
    </div>
  );
}
