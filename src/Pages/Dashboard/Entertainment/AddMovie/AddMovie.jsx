import React, { useState } from "react";

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    name: "",
    description: "",
    duration: "",
    category: "",
    genre: "",
    actors: "",
    releaseDate: "",
    language: "",
    director: "",
    imageLink: "",
    cinemaHalls: [],
  });

  const cinemaHallOptions = [
    "Hall 1",
    "Hall 2",
    "Hall 3",
    "Premium Cineplex",
    "IMAX Theater",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCinemaHallChange = (e) => {
    const { options } = e.target;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setMovieData((prev) => ({ ...prev, cinemaHalls: selected }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Data Submitted:", movieData);
    // You can now send `movieData` to your backend or API
  };

  return (
    <div className="relative">
      <img src="/addcine2.jpg" alt="" className="" />
      <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

      <div className=" absolute top-0  mx-auto p-6 text-white shadow-md rounded-lg ">
        <h2 className="text-3xl font-semibold mb-6  text-purple-700">
          Add New Movie
        </h2>
        <div className="flex gap-5">
          <form onSubmit={handleSubmit} className="space-y-4 w-2/3">
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-amber-50"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              name="duration"
              placeholder="Duration (e.g., 2h 15m)"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              name="category"
              placeholder="Category (e.g., Action, Drama)"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              name="genre"
              placeholder="Genre (e.g., Thriller, Romance)"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              name="actors"
              placeholder="Actors (comma separated)"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="date"
              name="releaseDate"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              name="language"
              placeholder="Language (e.g., English, Hindi)"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              name="director"
              placeholder="Director"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              name="imageLink"
              placeholder="Image Link (URL)"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <button type="submit" className="btn w-full btn-primary mt-4">
              Add Movie
            </button>
          </form>

          <div className="w-1/3">
            <label className="block mb-2 font-medium">
              Select Cinema Halls
            </label>
            <div className="border rounded-lg p-4 space-y-2">
              {cinemaHallOptions.map((hall, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={hall}
                    checked={movieData.cinemaHalls.includes(hall)}
                    onChange={handleCinemaHallChange}
                    className="checkbox checkbox-primary"
                  />
                  <span className="text-sm">{hall}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
