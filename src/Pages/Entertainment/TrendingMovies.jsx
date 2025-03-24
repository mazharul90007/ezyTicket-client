import React from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const trendingMovies = [
  {
    id: 21,
    title: "Venom",
    poster:
      "https://imageio.forbes.com/specials-images/imageserve/67508810cdaf3caeed2896b9/0x0.jpg?format=jpg&crop=1150,647,x0,y43,safe&height=900&width=1600&fit=bounds",
    genre: "Sci-Fi, Action",
    rating: 4.8,
  },
  {
    id: 22,
    title: "MUFASA The Lion King",
    poster:
      "https://substack-post-media.s3.amazonaws.com/public/images/9184cb58-4f51-452c-8b63-3fd60b1ff306_1313x739.jpeg",
    genre: "Romance, Drama",
    rating: 4.5,
  },
  {
    id: 23,
    title: "Avengers : End Game",
    poster:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp",
    genre: "Thriller, Mystery",
    rating: 4.7,
  },
];

const TrendingMovies = () => {
  return (
    <section className="  py-12 px-4 md:px-10">
      <div className="flex justify-between">
        <p></p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
        🔥 Trending Movies
      </h2>
      <Link to='allmovies'>
      <button className="btn text-end">View All <FaArrowAltCircleRight></FaArrowAltCircleRight> </button>
      </Link>
      </div>
    
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-10 overflow-x-auto no-scrollbar md:overflow-visible">
        {trendingMovies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[280px] md:min-w-0 bg-zinc-900 rounded-xl shadow-lg hover:shadow-purple-600 transition hover:-translate-y-1 duration-300"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-t-xl h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">{movie.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{movie.genre}</p>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span>{movie.rating}</span>
              </div>
              <Link to ={`/entertainment/allmovies/${movie.id}`}>
                           <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 cursor-pointer rounded-full font-semibold">
                             Book Now
                           </button>
                           </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;
