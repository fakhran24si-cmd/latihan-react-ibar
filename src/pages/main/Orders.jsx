// File: src/pages/main/Orders.jsx

import { useNavigate } from "react-router-dom"; // 1. Import ini
import PageHeader from "../../components/PageHeader";
import { FaCalendarPlus } from "react-icons/fa";

export default function Orders() {
  const navigate = useNavigate(); // 2. Inisialisasi hook

  const orders = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    no: `ORD-00${i + 1}`,
    name: `User ${i + 1}`,
    total: `Rp ${(i + 1) * 15000}`,
    status: i % 2 === 0 ? "Success" : "Pending",
  }));

  return (
    <div>
      <PageHeader
        title="Reservations"
        breadcrumb={["Dashboard", "reservations"]}
      >
        <button className="bg-indigo-500 text-white px-5 py-2 rounded-xl font-bold">
          <FaCalendarPlus className="mr-2" />+ Add Reservation
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b text-gray-600 font-bold">
            <tr>
              <th className="p-4">No Reservation</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              /* 3. Tambahkan onClick dan class cursor-pointer di sini */
              <tr
                key={item.id}
                onClick={() => navigate(`/orders/${item.no}`)}
                className="border-b hover:bg-indigo-50 cursor-pointer transition-colors"
              >
                <td className="p-4 font-bold text-indigo-600">{item.no}</td>
                <td className="p-4 text-gray-700">{item.name}</td>
                <td className="p-4 text-gray-700">{item.total}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
