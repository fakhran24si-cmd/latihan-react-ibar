import React, { useState, useEffect } from "react"; // Tambahkan useEffect
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaIdBadge, FaLock, FaEye } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  // IMPLEMENTASI USEEFFECT: Bersihkan pesan error otomatis setelah 3 detik
  useEffect(() => {
    if (!error) return; // Jika tidak ada error, diam saja

    const errorTimer = setTimeout(() => {
      setError(""); // Kosongkan error setelah waktu habis
    }, 3000);

    return () => clearTimeout(errorTimer); // Reset timer jika component dibongkar
  }, [error]); // Terpicu kembali setiap ada teks error baru masuk

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
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
      <h1 className="text-[32px] font-serif text-white font-bold tracking-wide mb-1">
        Login
      </h1>
      <p className="text-slate-400 text-sm mb-8 italic font-serif">
        Authorized personnel only.
      </p>

      {error && (
        <div className="bg-red-900/30 border border-red-500/50 mb-6 p-3 text-xs text-red-200 rounded flex items-center animate-pulse">
          <BsFillExclamationDiamondFill className="text-red-500 me-2 text-base" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-[#E8B953] uppercase tracking-[0.2em] block">
            Username / Email
          </label>
          <div className="relative flex items-center">
            <FaIdBadge className="absolute left-4 text-[#E8B953] text-lg" />
            <input
              type="text"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="Enter username..."
              className="w-full bg-transparent border border-slate-700 text-slate-200 rounded-sm py-3 pl-12 pr-4 focus:outline-none focus:border-[#E8B953] transition-all placeholder:text-slate-600 text-sm"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-[#E8B953] uppercase tracking-[0.2em] block">
            Password
          </label>
          <div className="relative flex items-center">
            <FaLock className="absolute left-4 text-[#E8B953] text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
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
          <a
            href="/forgot"
            className="text-[11px] font-bold text-[#E8B953] hover:underline tracking-wider"
          >
            FORGOT PASSWORD?
          </a>
        </div>

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
