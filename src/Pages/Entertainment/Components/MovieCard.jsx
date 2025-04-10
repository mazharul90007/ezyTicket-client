import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { darkMode } = useAuth();

  return (
    <div
      key={movie.id}
      className={`min-w-[280px]  w-62 relative group flex flex-col justify-between md:min-w-0 ${
        darkMode ? "text-white bg-gray-800" : "bg-white"
      } rounded-t-xl shadow-lg transition hover:-translate-y-1 duration-300`}
    >
      {/* Background Image with Overlay */}
      <div className="relative h-80 w-62 overflow-hidden rounded-t-xl">
        <img
          src={movie.imageLink}
          alt={movie.name}
          className="h-full w-full object-cover transition duration-300 group-hover:brightness-50"
        />
        {/* Movie Details on Hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
          <h3 className="text-xl font-semibold mb-1">{movie.name}</h3>
          <p className="text-sm text-gray-300 mb-2">{movie.genre}</p>
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span>{movie.rating || "7.8/10"}</span>
          </div>
        </div>
      </div>

      {/* Book Now Button Always Visible */}
      <div className="p-4">
        <Link to={`/entertainment/allmovies/${movie._id}`}>
          <button className="mt-2 w-full bg-supporting hover:bg-green-700 transition text-white py-2 px-3 cursor-pointer rounded-full font-semibold">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
