import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageMovies = () => {
  const [movies, setMovies] = useState([
    {
      _id: "1",
      title: "Avengers: Endgame",
      genre: "Action, Sci-Fi",
      releaseDate: "2019-04-26",
      posterUrl: "https://i.ibb.co/Y7MZt5M/endgame.jpg",
    },
    {
      _id: "2",
      title: "Inception",
      genre: "Action, Adventure",
      releaseDate: "2010-07-16",
      posterUrl: "https://i.ibb.co/nDtFMq7/inception.jpg",
    },
    {
      _id: "3",
      title: "Interstellar",
      genre: "Drama, Sci-Fi",
      releaseDate: "2014-11-07",
      posterUrl: "https://i.ibb.co/sWh7X7G/interstellar.jpg",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this movie?")) {
      setMovies((prev) => prev.filter((movie) => movie._id !== id));
    }
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">🎬 Manage Movies</h2>
      <table className="min-w-full bg-white border rounded shadow-md text-sm md:text-base">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3 border">Poster</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Genre</th>
            <th className="p-3 border">Release Date</th>
            <th className="p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id} className="hover:bg-gray-50 transition-all">
              <td className="p-3 border">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="h-20 w-14 object-cover rounded"
                />
              </td>
              <td className="p-3 border font-medium">{movie.title}</td>
              <td className="p-3 border text-gray-600">{movie.genre}</td>
              <td className="p-3 border">{movie.releaseDate}</td>
              <td className="p-3 border text-center">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                    onClick={() => handleDelete(movie._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {movies.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-400">
                No movies available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMovies;
