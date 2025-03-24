import React, { useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdLocalMovies } from "react-icons/md";
import "./allmovie.css";
import Select from "react-select";

export const Movies = [
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
  {
    id: 1,
    title: "Anora",
    poster: "https://www.impawards.com/2024/posters/anora_ver5.jpg",
    genre: "Drama",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Wicked",
    poster:
      "https://ionabmargit.pages.dev/hwmkbvp-wicked-2024-poster-images-wepnwrd/wicked_2024_poster.jpg",
    genre: "Musical, Fantasy",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Den of Thieves 2: Pantera",
    poster:
      "https://www.impawards.com/2024/posters/den_of_thieves_two_pantera_ver3.jpg",
    genre: "Action, Thriller",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Dune: Part Two",
    poster:
      "https://jeremyctaylor.pages.dev/fscda-dune-part-two-2025-hd-tyhhj/dune_part_two_2025_poster.jpg",
    genre: "Sci-Fi, Adventure",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Inside Out 2",
    poster:
      "https://stefaniewjemie.pages.dev/qxplrwl-inside-out-2-2024-cast-images-dmxmuua/inside_out_2_2024_poster.jpg",
    genre: "Animation, Comedy",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Deadpool & Wolverine",
    poster:
      "https://www.marvel.com/articles/movies/deadpool-and-wolverine-trailer-posters/deadpool_and_wolverine_poster.jpg",
    genre: "Action, Comedy",
    rating: 4.9,
  },
  {
    id: 7,
    title: "Joker: Folie à Deux",
    poster: "https://www.impawards.com/2024/posters/joker_folie_a_deux.jpg",
    genre: "Crime, Thriller",
    rating: 4.8,
  },
  {
    id: 8,
    title: "Ghostbusters: Frozen Empire",
    poster:
      "https://www.impawards.com/2024/posters/ghostbusters_frozen_empire.jpg",
    genre: "Comedy, Fantasy",
    rating: 4.5,
  },
  {
    id: 9,
    title: "The Fall Guy",
    poster: "https://www.impawards.com/2024/posters/the_fall_guy.jpg",
    genre: "Action, Comedy",
    rating: 4.7,
  },
  {
    id: 10,
    title: "Kingdom of the Planet of the Apes",
    poster:
      "https://www.impawards.com/2024/posters/kingdom_of_the_planet_of_the_apes.jpg",
    genre: "Sci-Fi, Action",
    rating: 4.7,
  },
  {
    id: 11,
    title: "Godzilla x Kong: The New Empire",
    poster:
      "https://www.impawards.com/2024/posters/godzilla_x_kong_the_new_empire.jpg",
    genre: "Action, Sci-Fi",
    rating: 4.8,
  },
  {
    id: 12,
    title: "Borderlands",
    poster: "https://www.impawards.com/2024/posters/borderlands.jpg",
    genre: "Sci-Fi, Adventure",
    rating: 4.5,
  },
  {
    id: 13,
    title: "The Marvels",
    poster: "https://www.impawards.com/2024/posters/the_marvels.jpg",
    genre: "Action, Sci-Fi",
    rating: 4.6,
  },
  {
    id: 14,
    title: "Saw XI",
    poster: "https://www.impawards.com/2024/posters/saw_xi.jpg",
    genre: "Horror, Thriller",
    rating: 4.4,
  },
  {
    id: 15,
    title: "The Exorcist: Believer",
    poster: "https://www.impawards.com/2024/posters/the_exorcist_believer.jpg",
    genre: "Horror, Mystery",
    rating: 4.3,
  },
  {
    id: 16,
    title: "Oppenheimer",
    poster: "https://www.impawards.com/2024/posters/oppenheimer.jpg",
    genre: "Drama, History",
    rating: 4.9,
  },
  {
    id: 17,
    title: "Mission: Impossible - Dead Reckoning Part Two",
    poster:
      "https://www.impawards.com/2024/posters/mission_impossible_dead_reckoning_part_two.jpg",
    genre: "Action, Thriller",
    rating: 4.8,
  },
  {
    id: 18,
    title: "Fast X",
    poster: "https://www.impawards.com/2024/posters/fast_x.jpg",
    genre: "Action, Adventure",
    rating: 4.6,
  },
  {
    id: 19,
    title: "Aquaman and the Lost Kingdom",
    poster:
      "https://www.impawards.com/2024/posters/aquaman_and_the_lost_kingdom.jpg",
    genre: "Action, Fantasy",
    rating: 4.5,
  },
  {
    id: 20,
    title: "Wonka",
    poster: "https://www.impawards.com/2024/posters/wonka.jpg",
    genre: "Family, Fantasy",
    rating: 4.7,
  },
];

const AllMovies = () => {
  const [isNowActive, setisActive] = useState(true);
  const [isComingActive, setisComingActive] = useState(false);
  const [isAdvancedActive, setisAdvancedActive] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const { darkMode } = useAuth();

  const options = [
    { value: "london", label: "London" },
    { value: "new_york", label: "New York" },
    { value: "paris", label: "Paris" },
    { value: "tokyo", label: "Tokyo" },
    { value: "berlin", label: "Berlin" },
  ];

  const handleNowShowing = () => {
    setisActive(true);
    setisComingActive(false);
    setisAdvancedActive(false);
  };

  const handleComing = () => {
    setisActive(false);
    setisComingActive(true);
    setisAdvancedActive(false);
  };

  const handleAdvanced = () => {
    setisActive(false);
    setisComingActive(false);
    setisAdvancedActive(true);
  };

  return (
    <section
      className={`py-24 px-4 md:px-10 bg-gradient-to-br ${
        darkMode
          ? "from-black via-blue-900 to-purple-900 text-white"
          : "from-green-200 via-green-50 to-green-200 text-black"
      } `}
    >
      <h2 className="text-3xl underline flex items-center justify-center md:text-4xl font-bold  mb-10 ">
        <MdLocalMovies />
        Movies
      </h2>

      <div className="my-5  flex flex-col md:flex-row gap-6 md:gap-32">
        <div className="flex gap-4 font-semibold md:text-3xl">
          <button
            className={` ${isNowActive ? "border-b-2 pb-1" : ""}`}
            onClick={() => handleNowShowing()}
          >
            Now Showing
          </button>
          |
          <button
            className={` ${isComingActive ? "border-b-2" : ""}`}
            onClick={() => handleComing()}
          >
            Coming Soon
          </button>
          |
          <button
            className={` ${isAdvancedActive ? "border-b-2" : ""}`}
            onClick={() => handleAdvanced()}
          >
            Advanced Booking
          </button>
        </div>

        <div className="md:w-96">
          <Select
            options={options}
            isMulti
            isSearchable
            value={selectedLocations}
            onChange={setSelectedLocations}
            placeholder="Select locations..."
            className="text-black"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 md:gap-10 overflow-x-auto no-scrollbar md:overflow-visible">
        {Movies.map((movie) => (
          <div
            key={movie.id}
            className={`min-w-[280px] flex flex-col justify-between md:min-w-0 ${darkMode? "text-white bg-gray-800":""} rounded-xl shadow-lg hover:shadow-green-600 transition hover:-translate-y-1 duration-300`}
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
              <Link to={`/entertainment/allmovies/${movie.id}`}>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 transition text-white py-2 cursor-pointer rounded-full font-semibold">
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

export default AllMovies;
