import React, { useState } from "react";
import { Movies } from "../AllMovie/AllMovies";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion";
import axios from "axios";

import Swal from "sweetalert2";

const TicketBooking = () => {
  const { id } = useParams();
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = ["7:30 AM", "12:30 PM", "4:30 PM", "8:30 PM"];
  const seatRows = ["A", "B", "C", "D", "F"];
  const seatPerRow = 8;
  
  const seatNumbers = seatRows.flatMap((row) =>
    Array.from({ length: seatPerRow }, (_, i) => `${row}${i + 1}`)
  );
    const movie = Movies.filter((movie) => movie.id == id)[0];
  const { darkMode } = useAuth();
  console.log(selectedTime);
 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seat: 1,
    date:"",
    time:"",
    seats: [],
  });
  console.log(formData);
  console.log(name);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setFormData({time:selectedTime})
  };
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setFormData((prevData) => ({
      ...prevData,
      time, // Update formData with selected time
    }));
  };

  const handleSeatSelection = (seat) => {
    setFormData((prevData) => {
      const isSelected = prevData.seats.includes(seat);
  
      return {
        ...prevData,
        seats: isSelected
          ? prevData.seats.filter((s) => s !== seat) // Remove if already selected
          : [...prevData.seats, seat], // Add new selection
      };
    });
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/movie_tickets',formData)
    .then(res=>{
      Swal.fire({
        title: "Ticket Booked!",
        text: ` Booking Confirmed for ${movie.title}!`,
        icon: "success"
      });

      setFormData(
        {
          name: "",
          email: "",
          phone: "",
          seat: 1,
          date:"",
          time:"",
          seats: [],
        }
      )
     
    })
    
  };

  return (
    <div id="booksection">
      <div className="pb-6 flex flex-col md:flex-row justify-around">
        {/* Selection Zone */}

        <div className="md:w-1/2  flex justify-center items-center px-4">
          <div
            className={`${
              darkMode
                ? "text-white bg-gray-500/20 backdrop-blur-3xl"
                : "bg-green-300/20 backdrop-blur-3xl"
            }  p-6 rounded-lg shadow-lg w-11/12 md:w-2xl pb-8 mx-auto mt-10`}
          >
            <h1 className="text-2xl font-bold  text-center mb-6">
              🎬 Pick Your One
            </h1>

            {/* Pick Date Section */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold  mb-2">📅 Pick Date:</h2>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Pick Time Slot */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold  mb-2">
                ⏰ Pick Time Slot:
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time, index) => (
                  <motion.button
                    key={index}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-lg text-black text-center border ${
                      selectedTime === time
                        ? "bg-supporting "
                        : "bg-gray-200 hover:bg-gray-300"
                    } transition`}
                    onClick={() => handleTimeSelection(time)}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>
{/* Seat Selection */}
<div className="mb-4">
  <h2 className="text-lg font-semibold mb-2">💺 Select Your Seats:</h2>
  <div className="grid grid-cols-5 md:grid-cols-8 gap-3 ">
    {seatNumbers.map((seat) => (
      <motion.button
        key={seat}
        whileTap={{ scale: 0.9 }}
        className={`p-1 rounded-lg md:w-12 text-center border ${
          formData.seats.includes(seat) ? "bg-green-500 " : ""
        } transition`}
        onClick={() => handleSeatSelection(seat)}
      >
        {seat}
      </motion.button>
    ))}
  </div>
</div>


            {/* Confirm Button */}
          </div>
        </div>

        {/* Booking form */}
        <section >
          <div
            className={`${
              darkMode
                ? "text-white bg-gray-500/20 backdrop-blur-3xl"
                : "bg-green-300/20 backdrop-blur-3xl"
            }  p-6 rounded-lg shadow-lg   pb-8 mx-auto mt-10`}
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              🎟 Book Your Ticket
            </h2>

            <p className="text-center  mb-4">
              Movie: <span className=" font-semibold">{movie.title}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="md:flex gap-3 ">
                {/* Name */}
                <div>
                  <label className="block text-sm ml-1 mt-2  mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full  p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm ml-1 mt-2  mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full  p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              {/* Phone */}
              <div>
                <label className="block text-sm ml-1 mt-2  mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              {/* Date Selection */}

              <div>
                <label className="block text-sm ml-1 mt-2  mb-1">
                  Select Cineplex
                </label>
                <select
                  name="seat"
                  value={formData.seat}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
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
                  ].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Seats */}
              <div>
                <label className="block text-sm ml-1 mt-2  mb-1">
                  Number of Seats
                </label>
                <select
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600  cursor-pointer transition text-white py-2 rounded-lg font-semibold"
              >
                🎟 Confirm Booking
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketBooking;
