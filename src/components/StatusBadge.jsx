import React from "react";

export default function StatusBadge({ status = "process" }) {
  const styles = {
    process: "bg-yellow-50 text-yellow-600 border-yellow-100",
    delivered: "bg-green-50 text-green-600 border-green-100",
    canceled: "bg-red-50 text-red-600 border-red-100",
    waiting: "bg-blue-50 text-blue-600 border-blue-100",
    ready: "bg-purple-50 text-purple-600 border-purple-100",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || styles.process}`}
    >
      {status.replace("-", " ")}
    </span>
  );
}
