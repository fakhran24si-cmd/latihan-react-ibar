import React from "react";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";
import Avatar from "./Avatar";

export default function TableRow({ data }) {
  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
      <td className="py-4 px-4 text-sm text-gray-600 font-medium">
        #{data.id}
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <Avatar alt={data.name} size="sm" src={data.avatarSrc} />
          <div>
            <p className="text-sm font-semibold text-gray-800">{data.name}</p>
            <p className="text-xs text-gray-400">{data.subtext}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-sm text-gray-600">{data.product}</td>
      <td className="py-4 px-4 text-sm font-bold text-gray-800">
        ${data.amount}
      </td>
      <td className="py-4 px-4">
        <StatusBadge status={data.status} />
      </td>
      <td className="py-4 px-4">
        <ActionButtons />
      </td>
    </tr>
  );
}
