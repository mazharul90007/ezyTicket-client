import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const slides = [
  {
    title:"BORBAD Now in Cinemas.",
    image: '/borbad2.jpg'
  },

  {
    title: "Sci fi, Romance, Action & Top Thriller ",
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
  {
    title:'',
    image: '/cineplex2.jpg'
  },
  {
    title:'',
    image: '/cineplex3.jpg'
  },
  {
    title:'',
    image: '/cineplex4.jpg'
  },
  
];

const MovieHeroSlider = () => {
  return (
    <div className="relative text-white">
      <Swiper
        centeredSlides={true}
        slidesPerView={'auto'}
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
           <div className="relative h-56 md:h-64 lg:h-96 overflow-hidden rounded-xl shadow-lg">
  <img
    src={slide.image}
    alt={`Slide ${idx + 1}`}
    className="w-full h-full object-cover"
  />
 <div className="absolute inset-0 z-5 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 max-w-4xl mx-auto">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
      {slide.title.split(" ").slice(0, 3).join(" ")}
      <div className="text-green-600">
        {slide.title.split(" ").slice(3).join(" ")}
      </div>
    </h1>
    <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300">
      {slide.desc}
    </p>
  </div>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20 z-10" />

  {/* Content */}
 
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieHeroSlider;
