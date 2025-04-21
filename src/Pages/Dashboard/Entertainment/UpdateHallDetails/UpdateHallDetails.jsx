import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const UpdateHallDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    totalSeats: "",
    price: "",
    email: "",
    image: "",
    facilities: {
      ac: false,
      DDD: false,
      food: false,
      vip: false,
    },
  });

  const { data: hallDataFromQuery, isLoading } = useQuery({
    queryKey: ["hall", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/cinemahalls/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (hallDataFromQuery) {
      setFormData(hallDataFromQuery);
    }
  }, [hallDataFromQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFacilitiesChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      facilities: {
        ...prev.facilities,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.patch(`/allhalls/${id}`, formData);
      if (response.status === 200 || response.data.modifiedCount > 0) {
        Swal.fire("Updated!", "The hall details have been updated.", "success");
        navigate("/dashboard/managecineplex");
      } else {
        Swal.fire("Warning", "No changes were made.", "info");
      }
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire("Error", "Failed to update hall. Please try again.", "error");
    }
  };

  if (isLoading)
    return <p className="text-center mt-10">Loading hall details...</p>;

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        🎬 Update Hall Details
      </h2>

      <form className="max-w-3xl mx-auto space-y-6" onSubmit={handleSubmit}>
        {/* Hall Name */}
        <div>
          <label className="block font-semibold text-lg">Hall Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold text-lg">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
            required
          />
        </div>

        {/* Total Seats */}
        <div>
          <label className="block font-semibold text-lg">Total Seats</label>
          <input
            type="number"
            name="totalSeats"
            value={formData.totalSeats}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold text-lg">Ticket Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-semibold text-lg">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
            required
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Hall Preview"
              className="mt-2 w-60 rounded-lg"
            />
          )}
        </div>

        {/* Facilities */}
        <div>
          <label className="block font-semibold text-lg mb-2">Facilities</label>
          <div className="flex gap-6 flex-wrap">
            {["ac", "DDD", "food", "vip"].map((facility) => (
              <label
                key={facility}
                className="flex items-center gap-2 capitalize"
              >
                <input
                  type="checkbox"
                  name={facility}
                  checked={formData.facilities?.[facility] || false}
                  onChange={handleFacilitiesChange}
                />
                {facility}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700"
          >
            Update Hall
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateHallDetails;
