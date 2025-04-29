import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useEntertainmentData from "../../Hooks/EntertainmentHook/useEntertainmentData";
import MovieCard from "./Components/MovieCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import useAuth from "../../Hooks/useAuth";

const TrendingMovies = () => {
  const { movies } = useEntertainmentData();
  const { darkMode } = useAuth();

  return (
    <section
      className={`mt-24 w-11/12 mx-auto transition duration-300 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold border-l-4 pl-3 border-main">
          🎬 Now Showing
        </h2>
        <Link to="allmovies">
          <button className="btn ezy-button-primary w-36 flex items-center justify-center gap-2 text-sm md:text-base">
            View All <FaArrowAltCircleRight className="text-lg" />
          </button>
        </Link>
      </div>

      {/* Movie Swiper */}
      <div className="mt-6">
        <Swiper
          spaceBetween={20}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingMovies;
