import React, { useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdLocalMovies } from "react-icons/md";
import "./allmovie.css";
import Select from "react-select";
import useEntertainmentData from "../../../Hooks/EntertainmentHook/useEntertainmentData";
import MovieCard from "../Components/MovieCard";




const AllMovies = () => {
  const [isNowActive, setisActive] = useState(true);
  const [isComingActive, setisComingActive] = useState(false);
  const [isAdvancedActive, setisAdvancedActive] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  // const [showMovie, setShowMovie] = useState([]);


  const { darkMode } = useAuth();
  const { halls,movies } = useEntertainmentData();

 

  const options = [
    { value: "london", label: "Dhaka" },
    { value: "new_york", label: "Jessore" },
    { value: "paris", label: "Khulna" },
    { value: "tokyo", label: "Mirpur" },
    { value: "berlin", label: "Dhanmondi" },
  ];
  

  const handleHallSelect=(selectedHall)=>{

 const showingHanll = movies.filter((movie) => movie.cinemaHalls.map(p=>p==selectedHall) );
console.log(showingHanll);
  }

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
          ? "text-white"
          : ""
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

      <div className="flex flex-col-reverse md:flex-row-reverse md:justify-between">
       

        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 md:gap-10 overflow-x-auto no-scrollbar md:overflow-visible ">
          {movies.map((movie) => (
          <MovieCard movie={movie}></MovieCard>
          ))}
        </div>


        
        <div className="w-64  overflow-auto">
          <label className="block text-xl ml-1 mt-2 mb-2">
            Select Cineplex
          </label>
          <div className="space-y-2">
            {halls.map((cineplex) => (
              <label
                key={cineplex._id}
                className="flex items-center gap-2 text-white bg-gray-800 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-700 transition"
              >
                <input
                  type="radio"
                  name="cineplex"
                  onChange={(e)=>handleHallSelect(e.target.value)}
                  value={cineplex.name}
                  className="accent-green-500"
                  required
                />
                {cineplex.name}
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllMovies;
