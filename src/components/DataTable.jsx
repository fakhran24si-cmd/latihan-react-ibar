import React from "react";

export default function DataTable({ headers, children }) {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50/50">
            {headers.map((head, index) => (
              <th
                key={index}
                className="py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
