import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Feel the Thrill of Blockbusters 🎬",
    desc: "Book tickets instantly and dive into epic cinematic worlds.",
    image:
      "https://substack-post-media.s3.amazonaws.com/public/images/9184cb58-4f51-452c-8b63-3fd60b1ff306_1313x739.jpeg",
  },
  {
    title: "Romance, Action & More 💘💥",
    desc: "From heartwarming love stories to edge-of-your-seat thrillers.",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/67508810cdaf3caeed2896b9/0x0.jpg?format=jpg&crop=1150,647,x0,y43,safe&height=900&width=1600&fit=bounds",
  },
  {
    title: "Your Next Movie Night Starts Here 🍿",
    desc: "Explore showtimes, trailers & reserve your seat now!",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp",
  },
];

const MovieHeroSlider = () => {
  return (
    <div className="relative min-h-[90vh] text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative h-[90vh] bg-cover bg-center flex items-center justify-center transition-transform duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

              {/* Content */}
              <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 max-w-4xl">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_0_25px_#9333ea]">
                  {slide.title}
                </h1>
                <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300">
                  {slide.desc}
                </p>
                <button className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300">
                  🎟️ Browse Movies
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieHeroSlider;
