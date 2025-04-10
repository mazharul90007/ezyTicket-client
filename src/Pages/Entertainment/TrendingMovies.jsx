import React from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useEntertainmentData from "../../Hooks/EntertainmentHook/useEntertainmentData";
import MovieCard from "./Components/MovieCard";

// const trendingMovies = [
//   {
//     id: 21,
//     title: "Venom",
//     poster:
//       "https://imageio.forbes.com/specials-images/imageserve/67508810cdaf3caeed2896b9/0x0.jpg?format=jpg&crop=1150,647,x0,y43,safe&height=900&width=1600&fit=bounds",
//     genre: "Sci-Fi, Action",
//     rating: 4.8,
//   },
//   {
//     id: 22,
//     title: "MUFASA The Lion King",
//     poster:
//       "https://substack-post-media.s3.amazonaws.com/public/images/9184cb58-4f51-452c-8b63-3fd60b1ff306_1313x739.jpeg",
//     genre: "Romance, Drama",
//     rating: 4.5,
//   },
//   {
//     id: 23,
//     title: "Avengers : End Game",
//     poster:
//       "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp",
//     genre: "Thriller, Mystery",
//     rating: 4.7,
//   },
// ];

const TrendingMovies = () => {
  const { darkMode } = useAuth();

  const {movies}=useEntertainmentData();


 
  return (
    <section className=" mt-24  mx-4 md:px-10">
      <div className="flex justify-between">
        <h2 className="text-3xl border-l-4 pl-3 mb-4 text-supporting md:text-4xl font-bold ">
          Now Showing
        </h2>

        <Link to="allmovies">
          <button className="btn bg-supporting text-white border-none text-end">
            View All <FaArrowAltCircleRight></FaArrowAltCircleRight>{" "}
          </button>
        </Link>
      </div>
      <div className="flex gap-10 flex-row-reverse">
       

       
      </div>
      <div className="flex justify-between">
        

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 md:grid-cols-3 lg:grid-cols-4 md:gap-10 overflow-x-auto no-scrollbar md:overflow-visible">
          {movies.map((movie) => (
          <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default TrendingMovies;
