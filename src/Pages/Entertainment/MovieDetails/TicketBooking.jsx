import React, { useState } from "react";
import { Movies } from "../AllMovie/AllMovies";
import { useParams } from "react-router-dom";

const TicketBooking = () => {
  const { id } = useParams();

  const movie = Movies.filter((movie) => movie.id == id)[0];

  console.log(movie[0]);

  const rows = [..."ABCDEFGHIJ"]; // 10 rows
  const leftSeats = [1, 2, 3, 4]; // Left section
  const rightSeats = [5, 6, 7, 8]; // Right section
  const cornerSeats = [9, 10, 11, 12]; // Right section
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

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
      <div className="space-y-4">
        {/* Screen */}
        <div className="bg-gray-700 text-white text-center py-2 rounded-md">
          📽️ SCREEN 📽️
        </div>
        <div className="flex justify-around py-5">
          <div className="grid gap-4">
            {rows.map((row) => (
              <div key={row} className="flex items-center justify-center gap-4">
                {/* Row Label */}
                <p className="w-6 text-center font-bold">{row}</p>

                {/* Left Side Seats */}
                {leftSeats.map((num) => (
                  <button
                    key={`${row}${num}`}
                    onClick={() => handleSeatSelect(`${row}${num}`)}
                    className={`btn w-10 h-10 rounded-md ${
                      selectedSeats.includes(`${row}${num}`)
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {row}
                    {num}
                  </button>
                ))}

                {/* Aisle (Gap) */}
                <div className="w-10"></div>

                {/* Right Side Seats */}
                {rightSeats.map((num) => (
                  <button
                    key={`${row}${num}`}
                    onClick={() => handleSeatSelect(`${row}${num}`)}
                    className={`btn w-10 h-10 rounded-md ${
                      selectedSeats.includes(`${row}${num}`)
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {row}
                    {num}
                  </button>
                ))}
                <div className="w-10"></div>
                {cornerSeats.map((num) => (
                  <button
                    key={`${row}${num}`}
                    onClick={() => handleSeatSelect(`${row}${num}`)}
                    className={`btn w-10 h-10 rounded-md ${
                      selectedSeats.includes(`${row}${num}`)
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {row}
                    {num}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Booking form */}
          <section>
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-2xl mx-auto mt-10">
              <h2 className="text-2xl font-bold text-center mb-4">
                🎟 Book Your Ticket
              </h2>

              <p className="text-center text-gray-400 mb-4">
                Movie:{" "}
                <span className="text-white font-semibold">{movie.title}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 mb-1">Full Name</label>
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
                  <label className="block text-gray-300 mb-1">Email</label>
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
                  <label className="block text-gray-300 mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Number of Seats */}
                <div>
                  <label className="block text-gray-300 mb-1">
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
                  className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-semibold"
                >
                  🎟 Confirm Booking
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
