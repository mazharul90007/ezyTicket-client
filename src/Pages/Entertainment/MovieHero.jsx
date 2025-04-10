import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "",
    image: "/starcineplex.webp",
  },

  {
    title: "Monihar Cineplex",
    image: "/monihar.avif",
  },

  {
    title: "",
    image: "/cineplex2.jpg",
  },
  {
    title: "UltraAVX",
    image: "/cineplex3.jpg",
  },
  {
    title: "IMAX",
    image: "/cineplex4.jpg",
  },
];

const MovieHeroSlider = () => {
  return (
    <div className="relative text-white">
   <div className="bg-white/10 backdrop-blur-md text-supporting text-center py-3 px-6 text-base  shadow-md  mb-2  flex flex-col md:flex-row items-center justify-center gap-4">
  <span>🎟️ Enjoy instant booking + exclusive online discounts!</span>
  <span className="hidden md:inline-block">|</span>
  <span>🎬 Book your seat now — Experience Movies Like Never Before!</span>
  <span className="hidden md:inline-block">|</span>
  <span>🎥 We bring all the screens across the country — just for you!</span>
</div>

      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[80%] md:!w-[60%] lg:!w-[80%] mx-auto transition-all duration-500 ease-in-out"
          >
            <div className="relative h-56 md:h-64 lg:h-96 overflow-hidden rounded-xl border-2 border-purple-800 shadow-lg">
              <img
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 mb-5  left-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-4xl md:text-5xl text-white/50 font-extrabold leading-tight">
                  {slide.title}
                  {/* {slide.title.split(" ").slice(0, 3).join(" ")}
                  <div className="text-green-600">
                    {slide.title.split(" ").slice(3).join(" ")}
                  </div> */}
                </h1>
                <p className=" text-base sm:text-lg md:text-xl text-gray-300">
                  {slide?.desc}
                </p>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />

              {/* Content */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieHeroSlider;
