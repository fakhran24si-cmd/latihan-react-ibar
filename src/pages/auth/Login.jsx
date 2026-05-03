import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaIdBadge, FaLock, FaEye } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk toggle mata
  const [dataForm, setDataForm] = useState({
    email: "", // Tetap gunakan 'email' sebagai key sesuai logic lama Anda
    password: "",
  });

  // 1. Logic: Mencatat perubahan input
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // 2. Logic: Memproses pengiriman form ke DummyJSON
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email, // Mapping email ke username API
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/"); // Ke dashboard jika sukses
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Login gagal");
        } else {
          setError("Terjadi kesalahan jaringan");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      {/* Header Desain Luxury */}
      <h1 className="text-[32px] font-serif text-white font-bold tracking-wide mb-1">
        Login
      </h1>
      <p className="text-slate-400 text-sm mb-8 italic font-serif">
        Authorized personnel only.
      </p>

      {/* Menampilkan status error jika ada[cite: 20] */}
      {error && (
        <div className="bg-red-900/30 border border-red-500/50 mb-6 p-3 text-xs text-red-200 rounded flex items-center animate-pulse">
          <BsFillExclamationDiamondFill className="text-red-500 me-2 text-base" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Username (Mapping ke state email) */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-[#E8B953] uppercase tracking-[0.2em] block">
            Username / Email
          </label>
          <div className="relative flex items-center">
            <FaIdBadge className="absolute left-4 text-[#E8B953] text-lg" />
            <input
              type="text"
              name="email" // HARUS 'email' agar terbaca handleChange[cite: 20]
              value={dataForm.email}
              onChange={handleChange}
              placeholder="Enter username..."
              className="w-full bg-transparent border border-slate-700 text-slate-200 rounded-sm py-3 pl-12 pr-4 focus:outline-none focus:border-[#E8B953] transition-all placeholder:text-slate-600 text-sm"
              required
            />
          </div>
        </div>

        {/* Input Password */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-[#E8B953] uppercase tracking-[0.2em] block">
            Password
          </label>
          <div className="relative flex items-center">
            <FaLock className="absolute left-4 text-[#E8B953] text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              name="password" // HARUS 'password'[cite: 20]
              value={dataForm.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-transparent border border-slate-700 text-slate-200 rounded-sm py-3 pl-12 pr-12 focus:outline-none focus:border-[#E8B953] transition-all placeholder:text-slate-600 text-sm"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-slate-500 hover:text-[#E8B953]"
            >
              <FaEye />
            </button>
          </div>
        </div>

        <div className="pt-2">
          <a href="/forgot" className="text-[11px] font-bold text-[#E8B953] hover:underline tracking-wider">
            FORGOT PASSWORD?
          </a>
        </div>

        {/* Tombol Login dengan State Loading[cite: 20] */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E8B953] hover:bg-[#d6a541] disabled:bg-slate-700 disabled:cursor-not-allowed text-[#131722] font-bold text-[11px] py-4 rounded-sm tracking-[0.2em] mt-4 transition-all flex justify-center items-center"
        >
          {loading ? (
            <>
              <ImSpinner2 className="animate-spin mr-2 text-lg" /> PROCESSING...
            </>
          ) : (
            "ENTER CONCIERGE PORTAL"
          )}
        </button>
      </form>
    </div>
  );
}