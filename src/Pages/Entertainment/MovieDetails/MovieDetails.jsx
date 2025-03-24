/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Movies } from "../AllMovie/AllMovies";

import { motion } from "framer-motion";
import { FaBus, FaCheckSquare } from "react-icons/fa";
import Heading from "../../../components/Heading";
import useAuth from "../../../Hooks/useAuth";
import { IoStar } from "react-icons/io5";
import { MdCast, MdDirectionsBike, MdLocalMovies } from "react-icons/md";
import TicketBooking from "./TicketBooking";

const MovieDetails = () => {
  // const [isavailable,seIsAvailablr]=useState('A4');
  const { darkMode } = useAuth();
  const { id } = useParams();

  const movie = Movies.filter((movie) => movie.id == id)[0];

  return (
    <div
      className={`pt-24 bg-gradient-to-br ${
        darkMode
          ? "from-black via-blue-900 to-purple-900 text-white"
          : "from-green-200 via-green-50 to-green-200 text-black"
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
              <h2 className=" gap-5 text-3xl font-bold ">
                {movie.title}
              </h2>
              <p className="mt-4  text-lg ">
                {movie.description ||
                  "The amazing viewer experience got in the theatre. This is the movie of all time. Book now to experience the best of the best."}
              </p>

              {/* Benefits List */}
              <ul className="mt-4  text-lg space-y-2">
                <li className="flex items-center gap-2">
                  <MdLocalMovies />
                  Genre: {movie.genre}
                </li>
                <li className="flex items-center gap-2">
                <MdDirectionsBike></MdDirectionsBike>Director: Jeremy Workman
                </li>
                <li className="flex items-center gap-2">
                  <IoStar /> Rating: {movie.rating}
                </li>
                <li className="flex items-center gap-2">
                  <MdCast></MdCast> Casts: Tilda Swinton, Paul Bettany, Josh Brolin, Elizabeth Olsen, Samuel L. Jackson
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <TicketBooking></TicketBooking>
    </div>
  );
};

export default MovieDetails;
