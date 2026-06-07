import React, { useEffect, useRef } from "react"; // Tambahkan useEffect dan useRef
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { FaArrowLeft, FaPrint, FaRegCreditCard } from "react-icons/fa";
import { MdOutlineBedroomParent, MdOutlineDateRange } from "react-icons/md";

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // IMPLEMENTASI USEREF: Menandai area elemen struk pembayaran saja
  const invoiceAreaRef = useRef(null);

  // IMPLEMENTASI USEEFFECT: Mengubah judul tab browser sesuai reservasi yang aktif
  useEffect(() => {
    document.title = `Detail Reservasi: ${id} | Marline CRM`;

    return () => {
      document.title = "Marline Hotel CRM"; // Kembalikan ke judul default saat tab ditinggalkan
    };
  }, [id]); // Berjalan ulang jika ID reservasi berubah

  // Fungsi Cetak Khusus Area Struk Pembayaran
  const handlePrintInvoice = () => {
    const printContents = invoiceAreaRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents; // Ganti layar dengan isi struk saja
    window.print(); // Panggil jendela print bawaan OS
    document.body.innerHTML = originalContents; // Kembalikan struktur web asli
    window.location.reload(); // Segarkan status aplikasi
  };

  const orderData = {
    no: id,
    customerName: "Fakhran Ikbaar",
    email: "fakhran@example.com",
    phone: "0812-3456-7890",
    roomType: "Suite Room",
    checkIn: "15 May 2026",
    checkOut: "17 May 2026",
    pricePerNight: 5200000,
    nights: 2,
    status: id.endsWith("2") || id.endsWith("4") ? "Pending" : "Success",
  };

  const total = orderData.pricePerNight * orderData.nights;

  return (
    <div className="p-4">
      <PageHeader
        title={`Reservation Detail: ${id}`}
        breadcrumb={["Dashboard", "Reservations", id]}
      >
        <div className="flex space-x-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all font-semibold text-sm"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          {/* Tambahkan onClick handler cetak di bawah ini */}
          <button
            onClick={handlePrintInvoice}
            className="flex items-center bg-[#0B0F19] text-[#E8B953] px-4 py-2 rounded-xl font-bold text-sm border border-[#E8B953]/30 hover:bg-slate-800 transition-all shadow-md"
          >
            <FaPrint className="mr-2" /> Print Invoice
          </button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-serif font-bold text-[#0B0F19] border-b pb-3 mb-4">
              Guest Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Full Name
                </p>
                <p className="font-medium text-slate-700">
                  {orderData.customerName}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Contact
                </p>
                <p className="font-medium text-slate-700">{orderData.phone}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Email
                </p>
                <p className="font-medium text-slate-700">{orderData.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-serif font-bold text-[#0B0F19] border-b pb-3 mb-4">
              Stay Details
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-xl text-indigo-500">
                <MdOutlineBedroomParent className="text-3xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">
                  {orderData.roomType}
                </h4>
                <p className="text-sm text-slate-500">2 Adults, 0 Children</p>
              </div>
            </div>

            <div className="flex justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <p className="text-xs text-slate-400 font-bold flex items-center gap-1">
                  <MdOutlineDateRange /> CHECK-IN
                </p>
                <p className="font-bold text-slate-800">{orderData.checkIn}</p>
              </div>
              <div className="text-center px-4 border-x border-slate-200">
                <p className="text-xs text-slate-400 font-bold">NIGHTS</p>
                <p className="font-bold text-slate-800">{orderData.nights}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 font-bold flex items-center justify-end gap-1">
                  <MdOutlineDateRange /> CHECK-OUT
                </p>
                <p className="font-bold text-slate-800">{orderData.checkOut}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pasang ref={invoiceAreaRef} di container yang mau di-print */}
        <div ref={invoiceAreaRef}>
          <div className="bg-[#0B0F19] rounded-2xl p-6 shadow-lg text-white border border-slate-800 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-serif font-bold text-[#E8B953]">
                Payment Summary
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${orderData.status === "Success" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`}
              >
                {orderData.status}
              </span>
            </div>

            <div className="space-y-4 text-sm text-slate-300 border-b border-slate-700 pb-6 mb-6">
              <div className="flex justify-between">
                <span>Room Rate ({orderData.nights}x)</span>
                <span>
                  Rp{" "}
                  {(orderData.pricePerNight * orderData.nights).toLocaleString(
                    "id-ID",
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees (10%)</span>
                <span>Rp {(total * 0.1).toLocaleString("id-ID")}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-slate-200">Total Amount</span>
              <span className="text-xl font-bold text-white">
                Rp {(total + total * 0.1).toLocaleString("id-ID")}
              </span>
            </div>

            <button
              className={`w-full py-3 rounded-xl font-bold text-sm flex justify-center items-center gap-2 transition-colors ${orderData.status === "Success" ? "bg-slate-800 text-slate-400 cursor-not-allowed" : "bg-[#E8B953] hover:bg-amber-400 text-[#0B0F19]"}`}
            >
              <FaRegCreditCard />{" "}
              {orderData.status === "Success"
                ? "Payment Settled"
                : "Process Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
