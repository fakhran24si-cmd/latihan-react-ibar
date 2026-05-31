import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { FaCalendarPlus } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Orders() {
  const navigate = useNavigate();

  const orders = Array.from({ length: 10 }, (_, i) => ({
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
        breadcrumb={["Dashboard", "Reservations"]}
      >
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold transition-all flex items-center">
              <FaCalendarPlus className="mr-2" /> Add Reservation
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>New Reservation</DialogTitle>
              <DialogDescription>
                Masukkan detail tamu untuk membuat reservasi baru.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <input
                type="text"
                placeholder="Nama Tamu..."
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium w-full">
              Simpan Data
            </button>
          </DialogContent>
        </Dialog>
      </PageHeader>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mt-4 p-2">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="font-bold text-gray-600 p-4">
                No Reservation
              </TableHead>
              <TableHead className="font-bold text-gray-600 p-4">
                Customer
              </TableHead>
              <TableHead className="font-bold text-gray-600 p-4">
                Total
              </TableHead>
              <TableHead className="font-bold text-gray-600 p-4">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => navigate(`/orders/${item.no}`)}
                className="cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <TableCell className="p-4 font-bold text-indigo-600">
                  {item.no}
                </TableCell>
                <TableCell className="p-4 text-gray-700">{item.name}</TableCell>
                <TableCell className="p-4 text-gray-700">
                  {item.total}
                </TableCell>
                <TableCell className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
