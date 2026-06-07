import React, { useRef, useEffect } from "react"; // Tambahkan useRef dan useEffect
import { MdOutlineLockReset } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function Forgot() {
  // IMPLEMENTASI USEREF: Membuat rujukan/jangkar langsung ke tag input HTML
  const emailInputRef = useRef(null);

  // IMPLEMENTASI USEEFFECT: Eksekusi penempatan fokus kursor saat halaman terbuka
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus(); // Kotak input email langsung aktif otomatis
    }
  }, []);

  return (
    <div className="bg-white -m-10 p-10 rounded-sm shadow-sm border border-gray-300">
      <div className="flex justify-center mb-6">
        <div className="bg-[#F0F4F8] w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
          <MdOutlineLockReset className="text-3xl text-[#8B6D19]" />
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-[#8B6D19] mb-4">
          Forgot Your Password?
        </h2>
        <p className="text-[13px] text-slate-500 leading-relaxed px-2">
          Please enter the email address associated with your concierge account.
          We will send a secure reset link to your inbox.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm text-slate-700 block mb-1">
            Email Address
          </label>
          <div className="relative flex items-center">
            <FiMail className="absolute left-4 text-slate-400 text-lg" />

            {/* Sambungkan variabel ref={emailInputRef} di sini */}
            <input
              ref={emailInputRef}
              type="email"
              placeholder="concierge@midnightgilt.com"
              className="w-full bg-[#FAFBFC] border border-slate-200 text-slate-700 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:border-[#8B6D19] focus:ring-1 focus:ring-[#8B6D19] transition-all placeholder:text-slate-300 text-sm"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#8B6D19] hover:bg-[#6E5511] text-white font-medium py-3 rounded-md transition-colors flex justify-center items-center gap-2"
        >
          Send Reset Link <FaArrowRight className="text-xs" />
        </button>
      </form>
    </div>
  );
}
