import React from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useEntertainmentData from "../../Hooks/EntertainmentHook/useEntertainmentData";

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
    <section className=" mt-24  px-4 md:px-10">
      <div className="flex justify-between">
        <h2 className="text-3xl border-l-4 pl-3 mb-4 text-supporting md:text-4xl font-bold ">
          Now Showing
        </h2>

        <Link to="allmovies">
          <button className="btn bg-green-600 text-white border-none text-end">
            View All <FaArrowAltCircleRight></FaArrowAltCircleRight>{" "}
          </button>
        </Link>
      </div>
      <div className="flex gap-10 flex-row-reverse">
        <div className="w-64 h-96 overflow-auto">
          <label className="block text-xl ml-1 mt-2 mb-2">
            Select Cineplex
          </label>
          <div className="space-y-2">
            {[
              "AMC Theatres",
              "Regal Cinemas",
              "Cineplex Odeon",
              "IMAX",
              "Cinemark Theatres",
              "Showcase Cinemas",
              "Vue Cinemas",
              "Odeon Cinemas",
              "Cinépolis",
              "Pathé Cinemas",
              "Megaplex Theatres",
              "Event Cinemas",
              "Broadway Circuit",
            ].map((cineplex) => (
              <label
                key={cineplex}
                className="flex items-center gap-2 text-white bg-gray-800 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-700 transition"
              >
                <input
                  type="radio"
                  name="cineplex"
                  value={cineplex}
                  className="accent-green-500"
                  required
                />
                {cineplex}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-8 md:grid md:grid-cols-3 md:gap-10 overflow-x-auto no-scrollbar md:overflow-visible">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={`min-w-[280px] md:min-w-0 ${
                darkMode ? "text-white bg-gray-800" : ""
              } rounded-xl shadow-lg hover:shadow-green-600 transition hover:-translate-y-1 duration-300`}
            >
              <img
                src={movie.imageLink                }
                alt={movie.name}
                className="rounded-t-xl h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{movie.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{movie.genre}</p>
                <div className="flex items-center gap-1 text-green-600">
                  <FaStar />
                  <span>{movie.rating || "8.8/10"}</span> 
                </div>
                <Link to={`/entertainment/allmovies/${movie._id}`}>
                  <button className="mt-4 w-full bg-supporting hover:bg-green -700 transition text-white py-2 cursor-pointer rounded-full font-semibold">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
