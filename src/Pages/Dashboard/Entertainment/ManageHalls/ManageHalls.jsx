import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";

const fakeHalls = [
  {
    id: 1,
    name: "Star Cineplex Bashundhara",
    location: "Bashundhara City, Dhaka",
    seats: 150,
    status: "Active",
  },
  {
    id: 2,
    name: "Blockbuster Cinemas",
    location: "Jamuna Future Park, Dhaka",
    seats: 200,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Shyamoli Cinema Hall",
    location: "Shyamoli, Dhaka",
    seats: 100,
    status: "Active",
  },
];

const ManageHalls = () => {
  const { darkMode } = useAuth();

  return (
    <div
      className={`min-h-screen p-6 transition duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">🏢 Manage Halls</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-lg rounded-xl overflow-hidden">
          <thead>
            <tr className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Total Seats</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fakeHalls.map((hall) => (
              <tr
                key={hall.id}
                className={`border-b ${
                  darkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"
                }`}
              >
                <td className="px-4 py-3 font-medium">{hall.name}</td>
                <td className="px-4 py-3">{hall.location}</td>
                <td className="px-4 py-3">{hall.seats}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      hall.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {hall.status}
                  </span>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700 transition"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 transition"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {fakeHalls.length === 0 && (
          <p className="text-center text-gray-500 py-6">No halls found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageHalls;
