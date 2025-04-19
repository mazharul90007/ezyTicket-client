import React from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

import useEntertainmentData from "../../Hooks/EntertainmentHook/useEntertainmentData";
import MovieCard from "./Components/MovieCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const TrendingMovies = () => {
  const { movies } = useEntertainmentData();

  return (
    <section className=" mt-24  mx-4  md:px-10">
      <div className="flex justify-between">
        <h2 className="text-3xl border-l-4 pl-3 text-main md:text-4xl font-bold ">
          Now Showing
        </h2>

        <Link to="allmovies">
          <button className="btn ezy-button-primary  ">
            View All <FaArrowAltCircleRight></FaArrowAltCircleRight>{" "}
          </button>
        </Link>
      </div>
      
      {/* <div className="flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 md:grid-cols-3 lg:grid-cols-4 md:gap-10 overflow-x-auto no-scrollbar md:overflow-visible">
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      </div> */}

<div className="">

<div >
  
  <div className="flex gap-4 mt-4">
    <button className="px-4 py-2 text-white rounded-md border-2 hover">
      English
    </button>
    <button className="px-4 py-2  text-white rounded-md border-2 hover:">
      Spanish
    </button>
    <button className="px-4 py-2  text-white rounded-md border-2 hover:">
      French
    </button>
    <button className="px-4 py-2  text-white rounded-md border-2 hover:">
      German
    </button>
  </div>
</div>


 <div >
        <Swiper
        
          spaceBetween={30}
          freeMode={true}
       
          navigation={true}
          modules={[FreeMode,Navigation, Pagination]}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            500:{
              slidesPerView: 2,
            },
            // when window width is >= 768px (medium screens)
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px (large screens)
            1024: {
              slidesPerView: 4,
            },
            
              1280:{
                slidesPerView: 5,
              }
            
          }}
          className="mySwiper text-white mt-5 "
        >
          {movies.map((movie) => (
            <SwiperSlide><MovieCard movie={movie}></MovieCard></SwiperSlide>
            
          ))}
        </Swiper>
      </div>

</div>
     
    </section>
  );
};

export default TrendingMovies;
