import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { FaImdb, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { darkMode } = useAuth();

  return (
    <div
      key={movie.id}
      className={`min-w-[280px]  w-62 relative group flex flex-col scale-50 md:scale-90 justify-between md:min-w-0 ${
        darkMode ? " " : " text-black"
      } rounded-t-xl transition hover:-translate-y-1 duration-300`}
    >
      <Link to={`/entertainment/allmovies/${ movie.id}`} >
      {/* Background Image with Overlay */}
      <div className="relative h-80 w-56 overflow-hidden rounded-t-xl">
        <img
          src={movie.imageLink || `https://image.tmdb.org/t/p/w500${movie.poster_path}`|| "/moviedefault.jpg"}
          alt={movie.name}
          className="h-full w-full object-cover rounded-lg  shadow-lg transition duration-300 group-hover:brightness-50"
        />
        {/* Movie Details on Hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
   
          <div className="flex items-center gap-1 text-yellow-400">
          <FaImdb className="size-8 e"/> :
            <FaStar />
            <span>{movie.rating || "7.8/10"}</span>
          </div>
        </div>
      </div>

      {/* Book Now Button Always Visible */}
      <div className="p-4 bg-transparent">
      <h3 className="text-xl font-semibold mb-1">{movie.name || movie.title}</h3>
      <p className="text-sm mb-2">{movie.genre}</p>
         
     
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
