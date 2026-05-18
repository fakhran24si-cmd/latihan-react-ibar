import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import StatusBadge from "../../components/StatusBadge";
import ActionButtons from "../../components/ActionButton";
import Avatar from "../../components/Avatar";

export default function Dashboard() {
  const recentBookings = [
    {
      id: "HB-99281",
      date: "18/05/2026",
      room: "Deluxe Room #204",
      guest: "Allan Wood",
      amount: "Rp 1.2M",
      status: "Check-in", // Sesuai StatusBadge
    },
    {
      id: "HB-99282",
      date: "19/05/2026",
      room: "Presidential Suite",
      guest: "Damian Simsons",
      amount: "Rp 12.8M",
      status: "Waiting payment",
    },
  ];

  return (
    <div className="p-4 space-y-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Hotel Overview</h1>
        <p className="text-sm text-gray-400">
          Manage your guests and rooms today
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Revenue"
          value="Rp 450M"
          trend="2.4"
          isUp={true}
        />
        <StatCard title="Total Bookings" value="142" trend="1.2" isUp={true} />
        <StatCard title="Occupancy Rate" value="88%" trend="5.0" isUp={false} />
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
        <h3 className="font-bold text-lg mb-6">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-[10px] uppercase border-b border-gray-50 font-bold">
                <th className="pb-4">Booking ID</th>
                <th className="pb-4">Stay Date</th>
                <th className="pb-4">Room Type</th>
                <th className="pb-4">Guest Name</th>
                <th className="pb-4 text-center">Total Price</th>
                <th className="pb-4">Status</th>
                <th className="pb-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-gray-50/40 transition-all group"
                >
                  <td className="py-4 text-sm font-bold">{booking.id}</td>
                  <td className="py-4 text-sm text-gray-400">{booking.date}</td>
                  <td className="py-4 text-sm font-medium">
                    {booking.room}
                    <p className="text-[10px] text-gray-400 font-normal">
                      View Details ›
                    </p>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={booking.guest} size="w-7 h-7" />
                      <span className="text-sm font-bold text-gray-700">
                        {booking.guest}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-sm font-black text-center text-gray-800">
                    {booking.amount}
                  </td>
                  <td className="py-4">
                    <StatusBadge status={booking.status} />
                  </td>
                  <td className="py-4 text-right">
                    <ActionButtons />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
