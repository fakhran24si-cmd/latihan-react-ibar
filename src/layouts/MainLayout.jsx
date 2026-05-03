import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react"; // Tambahkan ini
import Loading from "../components/Loading"; // Tambahkan ini

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <Header />

          {/* Tambahkan pembungkus di sini agar Outlet memiliki penangan loading */}
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
