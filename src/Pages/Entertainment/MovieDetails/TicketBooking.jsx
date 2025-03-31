import React, { useState } from "react";
import { Movies } from "../AllMovie/AllMovies";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const TicketBooking = () => {
  const { id } = useParams();

  const movie = Movies.filter((movie) => movie.id == id)[0];
  const {darkMode}=useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    seats: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Confirmed:", formData);
    alert(`🎟 Booking Confirmed for ${movie.title}!`);
  };
  return (
    <div>
      <div className="pb-6">
        {/* Booking form */}
        <section>
          <div className={`${darkMode? "text-white bg-gray-500/20 backdrop-blur-3xl":"bg-green-300/20 backdrop-blur-3xl"}  p-6 rounded-lg shadow-lg w-11/12 md:w-2xl pb-8 mx-auto mt-10`}>
            <h2 className="text-2xl font-bold text-center mb-4">
              🎟 Book Your Ticket
            </h2>

            <p className="text-center  mb-4">
              Movie:{" "}
              <span className=" font-semibold">{movie.title}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block  mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block  mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Date Selection */}
              <div>
                <label className="block  mb-1">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block  mb-1">
                  Select Cineplex
                </label>
                <select
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label className="block  mb-1">
                  Number of Seats
                </label>
                <select
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
