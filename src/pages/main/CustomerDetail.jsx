// File: src/pages/main/CustomerDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { FaArrowLeft, FaEnvelope, FaPhoneAlt, FaCrown } from "react-icons/fa";

export default function CustomerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock Data Tamu
  const guestInfo = {
    id: id,
    name: "Fakhran Ikbaar",
    email: "fakhran@mail.com",
    phone: "0812-3456-7890",
    loyalty: "Gold",
    totalStay: "12 Nights",
    memberSince: "Aug 2024",
  };

  // Mock Data Riwayat Inap (Filter otomatis seolah-olah milik tamu ini)
  const history = [
    {
      no: "ORD-088",
      date: "10 May 2026",
      room: "Suite Room",
      status: "Success",
    },
    {
      no: "ORD-045",
      date: "12 Feb 2026",
      room: "Deluxe Room",
      status: "Success",
    },
    {
      no: "ORD-012",
      date: "20 Dec 2025",
      room: "Deluxe Room",
      status: "Success",
    },
  ];

  return (
    <div className="p-4">
      <PageHeader
        title="Guest Profile"
        breadcrumb={["Dashboard", "Guest List", id]}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
        >
          <FaArrowLeft className="mr-2" /> Back to List
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* KOLOM KIRI: Profil Tamu */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-3xl text-indigo-600 font-bold mb-4">
            {guestInfo.name.charAt(0)}
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#0B0F19]">
            {guestInfo.name}
          </h3>
          <span className="flex items-center gap-1 text-amber-600 font-bold text-xs uppercase tracking-widest mt-1">
            <FaCrown /> {guestInfo.loyalty} Member
          </span>

          <div className="w-full mt-8 space-y-4 border-t pt-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FaEnvelope className="text-gray-400" /> {guestInfo.email}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FaPhoneAlt className="text-gray-400" /> {guestInfo.phone}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Total Stay
              </p>
              <p className="font-bold text-slate-800">{guestInfo.totalStay}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Joined
              </p>
              <p className="font-bold text-slate-800">
                {guestInfo.memberSince}
              </p>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: Riwayat Reservasi (Reuse gaya tabel Orders) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-serif font-bold text-[#0B0F19] mb-6">
            Booking History
          </h3>
          <div className="overflow-hidden border border-gray-50 rounded-xl">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase">
                    Order ID
                  </th>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase">
                    Room
                  </th>
                  <th className="p-4 text-xs font-bold text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b hover:bg-gray-50 transition-all"
                  >
                    <td className="p-4 text-sm font-bold text-indigo-600">
                      {item.no}
                    </td>
                    <td className="p-4 text-sm text-gray-600">{item.date}</td>
                    <td className="p-4 text-sm text-gray-600">{item.room}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
