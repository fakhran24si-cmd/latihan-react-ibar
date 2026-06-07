import { useState, useEffect } from "react"; // Tambahkan useState dan useEffect di sini
import PageHeader from "../../components/PageHeader";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

export default function Customers() {
  const navigate = useNavigate();
  const [customersData, setCustomersData] = useState([]); // State untuk menampung data tamu
  const [loading, setLoading] = useState(true); // State untuk animasi loading

  // IMPLEMENTASI USEEFFECT: Mengambil data tamu dari API/Server saat halaman dibuka
  useEffect(() => {
    const fetchCustomers = setTimeout(() => {
      const mockData = Array.from({ length: 30 }, (_, i) => ({
        id: `CUST-00${i + 1}`,
        name: `Pelanggan Ke-${i + 1}`,
        email: `customer${i + 1}@mail.com`,
        phone: `0812-3456-78${i + 1}`,
        loyalty: i % 3 === 0 ? "Gold" : i % 2 === 0 ? "Silver" : "Bronze",
      }));
      setCustomersData(mockData);
      setLoading(false); // Matikan loading setelah data masuk
    }, 1000); // Simulasi delay jaringan 1 detik

    return () => clearTimeout(fetchCustomers); // Cleanup function
  }, []); // Array kosong berarti hanya berjalan sekali saat komponen dimuat

  return (
    <div className="p-4">
      <PageHeader title="Customers" breadcrumb="Dashboard / Customer List">
        <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-xl">
          <FaUserPlus className="mr-2" /> Add Guest
        </button>
      </PageHeader>

      {loading ? (
        <div className="flex justify-center items-center h-60 bg-white rounded-xl border border-gray-100 shadow-sm">
          <ImSpinner2 className="animate-spin text-indigo-600 text-3xl" />
          <span className="ml-2 text-gray-500 font-medium">
            Loading Guest Data...
          </span>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-bold text-gray-600">Customer ID</th>
                <th className="p-4 font-bold text-gray-600">Customer Name</th>
                <th className="p-4 font-bold text-gray-600">Email</th>
                <th className="p-4 font-bold text-gray-600">Phone</th>
                <th className="p-4 font-bold text-gray-600">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customersData.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => navigate(`/customers/${item.id}`)}
                  className="border-b border-gray-50 hover:bg-indigo-50 cursor-pointer transition-colors"
                >
                  <td className="p-4 text-sm font-medium text-indigo-600">
                    {item.id}
                  </td>
                  <td className="p-4 text-sm text-gray-600">{item.name}</td>
                  <td className="p-4 text-sm text-gray-600">{item.email}</td>
                  <td className="p-4 text-sm text-gray-600">{item.phone}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        item.loyalty === "Gold"
                          ? "bg-orange-100 text-orange-600"
                          : item.loyalty === "Silver"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
