/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";


import { motion } from "framer-motion";
import { FaBus, FaCheckSquare } from "react-icons/fa";
import Heading from "../../../components/Heading";
import useAuth from "../../../Hooks/useAuth";
import { IoStar } from "react-icons/io5";
import { MdCast, MdDirectionsBike, MdLocalMovies } from "react-icons/md";
import TicketBooking from "./TicketBooking";
import useEntertainmentData from "../../../Hooks/EntertainmentHook/useEntertainmentData";


const MovieDetailsPage = () => {
  // const [isavailable,seIsAvailablr]=useState('A4');
  const { darkMode } = useAuth();
  const { id } = useParams();

  const {movies}=useEntertainmentData();
  
  const movie = movies.filter((movie) => movie._id == id)[0];




  return (
    <div
      className={`pt-16 bg-gradient-to-br ${
        darkMode
          ? "bg-neutral-900 text-white"
          : "from-green-200 via-green-50 to-green-200 text-black"
      }`}
    >
      {/* <img src={movie.poster} alt="" /> */}
      <section>
        <div
          style={{
            backgroundImage: `url(${movie?.imageLink})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative bg-cover text-white "
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 md:via-black/80  to-black/90" />

          <div className="relative container  mx-auto py-16  px-6 flex flex-col md:flex-row items-center justify-center ">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-xs"
            >
              <img
                src={movie?.imageLink }
                alt={movie?.title}
                className="rounded-lg shadow-lg h-96"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-center  md:text-left"
            >
              <h2 className=" gap-5 text-3xl md:text-5xl  font-bold ">
                {movie?.name}
              </h2>
              <div className="flex flex-col text-lg gap-4 mt-3">
                <p>{movie?.duration}</p>
                <p>Imdb: 7.8/10</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Link to='https://www.youtube.com/watch?v=u9Mv98Gr5pY&ab_channel=SonyPicturesEntertainment'>
                  <button  className="btn shadow-none bg-transparent text-white hover:shadow-white hover:shadow-md">
                    Watch Trailer
                  </button>
                  </Link>
                  
                
                  <button
                  onClick={()=>document.getElementById("booksection")?.scrollIntoView({
                    behavior:"smooth"
                  })}
                  className="btn shadow-none bg-transparent text-white hover:shadow-white hover:shadow-md">
                    Book now
                  </button>
                </div>
              </div>
              <div className="flex mt-10">
                <h1 className="my-auto mr-4">Showing On:</h1>
                {
                  movie?.cinemaHalls.map((cinemaHall, index) => (

                    <div className="border-2 border-purple-800 hover:bg-purple-800 transition-all duration-300 rounded-4xl py-2 px-3 mr-3" key={index}>
                      <p>{cinemaHall}</p>

                    </div>
                  ))
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="mt-12 w-10/12 pl-8 mx-auto ">
        <h1 className="text-3xl font-semibold">About the movie</h1>
        <p className="mt-4  text-lg ">
          {movie?.description ||
            "The amazing viewer experience got in the theatre. This is the movie of all time. Book now to experience the best of the best."}
        </p>

        {/* Benefits List */}
        <ul className="mt-4  text-lg space-y-2">
          <li className="flex items-center gap-2">
            <MdLocalMovies />
            Genre: {movie?.genre}
          </li>
          <li className="flex items-center gap-2">
            <MdDirectionsBike></MdDirectionsBike>Director: Jeremy Workman
          </li>
          <li className="flex items-center gap-2">
            <IoStar /> Rating: {movie?.rating}
          </li>
          <li className="flex items-center gap-2">
            <MdCast></MdCast> Casts: Tilda Swinton, Paul Bettany, Josh Brolin,
            Elizabeth Olsen, Samuel L. Jackson
          </li>
        </ul>
      </div>

      <TicketBooking></TicketBooking>
    </div>
  );
};

export default MovieDetailsPage;
