import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../../../../Hooks/useAuth";

const fakeMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    category: "Sci-Fi",
    releaseDate: "2024-03-01",
    status: "Now Showing",
    poster:
      "https://m.media-amazon.com/images/I/71Fq3hdN5wL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Joker: Folie à Deux",
    category: "Drama",
    releaseDate: "2024-10-04",
    status: "Coming Soon",
    poster: "https://m.media-amazon.com/images/I/81F0uT1LQuL.jpg",
  },
  {
    id: 3,
    title: "Deadpool 3",
    category: "Action",
    releaseDate: "2024-07-26",
    status: "Advanced Booking",
    poster: "https://m.media-amazon.com/images/I/71wnn+nblbL.jpg",
  },
];

const ManageMovies = () => {
  const { darkMode } = useAuth();

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">🎬 Manage Movies</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-md rounded-xl overflow-hidden">
          <thead>
            <tr className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
              <th className="px-4 py-3 text-left">Poster</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Release Date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fakeMovies.map((movie) => (
              <tr
                key={movie.id}
                className={`border-b ${
                  darkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"
                }`}
              >
                <td className="px-4 py-3">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-16 h-24 object-cover rounded-md shadow"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{movie.title}</td>
                <td className="px-4 py-3">{movie.category}</td>
                <td className="px-4 py-3">{movie.releaseDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      movie.status === "Now Showing"
                        ? "bg-green-200 text-green-800"
                        : movie.status === "Coming Soon"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-blue-200 text-blue-800"
                    }`}
                  >
                    {movie.status}
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
      </div>
    </div>
  );
};

export default ManageMovies;
