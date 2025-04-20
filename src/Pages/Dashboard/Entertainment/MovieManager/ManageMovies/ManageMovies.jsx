import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const ManageMovies = () => {
  const { darkMode } = useAuth();

  const axiosSecure = useAxiosSecure();
  const fetchMovies = async () => {
    try {
      const res = await axiosSecure.get("/allmovies");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch movies");
    }
  };

  const {
    data: movies = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  console.log(movies);

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">🎬 Manage Movies</h2>

      {isLoading ? (
        <p className="text-center text-lg font-medium">Loading movies...</p>
      ) : isError ? (
        <p className="text-center text-red-500 font-medium">
          Failed to load movies: {error.message}
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse shadow-md rounded-xl overflow-hidden">
            <thead>
              <tr className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                <th className="px-4 py-3 text-left">Poster</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Genre</th>
                <th className="px-4 py-3 text-left">Release Date</th>
                <th className="px-4 py-3 text-left">Cinema Halls</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr
                  key={movie._id}
                  className={`border-b ${
                    darkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"
                  }`}
                >
                  <td className="px-4 py-3">
                    <img
                      src={movie.imageLink}
                      alt={movie.name}
                      className="w-16 h-24 object-cover rounded-md shadow"
                    />
                  </td>
                  <td className="px-4 py-3 font-semibold">{movie.name}</td>
                  <td className="px-4 py-3">{movie.category}</td>
                  <td className="px-4 py-3">{movie.genre}</td>
                  <td className="px-4 py-3">{movie.releaseDate}</td>
                  <td className="px-4 py-3">{movie.cinemaHalls?.join(", ")}</td>
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
      )}
    </div>
  );
};

export default ManageMovies;
