import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Movies } from "../AllMovie/AllMovies";

import { motion } from "framer-motion";
import { FaBus, FaCheckSquare } from "react-icons/fa";
import Heading from "../../../components/Heading";
import useAuth from "../../../Hooks/useAuth";
import { IoStar } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";

const MovieDetails = () => {
  // const [isavailable,seIsAvailablr]=useState('A4');

  const { id } = useParams();
  const { darkMode } = useAuth();
  const movie = Movies.filter((movie) => movie.id == id)[0];

  console.log(movie[0]);
  const rows = [..."ABCDEFGHIJ"]; // 10 rows
  const leftSeats = [1, 2, 3, 4]; // Left section
  const rightSeats = [5, 6, 7, 8]; // Right section
  const cornerSeats = [9, 10, 11, 12]; // Right section
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div
      className={`pt-24 bg-gradient-to-br ${
        darkMode
          ? "from-black via-blue-900 to-purple-900 text-white"
          : "from-green-200 via-green-50 to-green-200 text-purple-700"
      }`}
    >
      <section>
        
        <div
          // style={{
          //     backgroundImage: `url(${movie.poster})`,
          // }}
          className="bg-fixed"
        >
          <div className="container mx-auto py-16  px-6 flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img
                src={movie.poster}
                alt="Bus Service"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h2 className="flex justify-center items-center gap-5 text-3xl font-bold ">
                {movie.title}
              </h2>
              <p className="mt-4  text-lg " >
               {movie.description || "The amazing viewer experience got in the theatre. This is the movie of all time. Book now to experience the best of the best."}
              </p>

              {/* Benefits List */}
              <ul className="mt-4  text-lg space-y-2">
                <li className="flex items-center gap-2">
                <MdLocalMovies />Genre: {movie.genre}
                </li>
                <li className="flex items-center gap-2">
                <IoStar /> Rating: {movie.rating}
                 
                </li>
        

            </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        {/* Screen */}
        <div className="bg-gray-700 text-white text-center py-2 rounded-md">
          📽️ SCREEN 📽️
        </div>
        <div className="flex">
          <div className="grid gap-4">
            {rows.map((row) => (
              <div key={row} className="flex items-center justify-center gap-4">
                {/* Row Label */}
                <p className="w-6 text-center font-bold">{row}</p>

                {/* Left Side Seats */}
                {leftSeats.map((num) => (
                  <button
                    key={`${row}${num}`}
                    onClick={() => handleSeatSelect(`${row}${num}`)}
                    className={`btn w-10 h-10 rounded-md ${
                      selectedSeats.includes(`${row}${num}`)
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {row}
                    {num}
                  </button>
                ))}

                {/* Aisle (Gap) */}
                <div className="w-10"></div>

                {/* Right Side Seats */}
                {rightSeats.map((num) => (
                  <button
                    key={`${row}${num}`}
                    onClick={() => handleSeatSelect(`${row}${num}`)}
                    className={`btn w-10 h-10 rounded-md ${
                      selectedSeats.includes(`${row}${num}`)
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {row}
                    {num}
                  </button>
                ))}
                <div className="w-10"></div>
                {cornerSeats.map((num) => (
                  <button
                    key={`${row}${num}`}
                    onClick={() => handleSeatSelect(`${row}${num}`)}
                    className={`btn w-10 h-10 rounded-md ${
                      selectedSeats.includes(`${row}${num}`)
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {row}
                    {num}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div>
            Here is the <details></details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
