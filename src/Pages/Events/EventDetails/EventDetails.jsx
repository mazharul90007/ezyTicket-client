import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!eventId) {
      console.error("❌ eventId is missing from useParams");
      return;
    }

    const fetchEventDetails = async () => {
      try {
        console.log(`🔍 Fetching event details for ID: ${eventId}`);
        const response = await fetch(`http://localhost:3000/events/${eventId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Event data fetched:", data);
        setEventData(data);
      } catch (error) {
        console.error("❌ Error fetching event details:", error);
        setError("Failed to fetch event details. Please try again later.");
        Swal.fire("Error", "Failed to fetch event details.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container  mx-auto w-11/12 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 bg-gray-100 px-10">
      {/* Left Section */}
      <div className="lg:col-span-2">
        <img
          src={eventData?.photo}
          alt={eventData?.name}
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
        <div className="mt-4 bg-gradient-to-br from-black via-blue-900 to-purple-900 p-20 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-white">{eventData?.name}</h2>
          <p className="text-white mt-2">{eventData?.description}</p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="bg-gradient-to-br from-black via-blue-900 to-purple-900 p-20 shadow-lg rounded-lg h-fit">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Event Information
        </h3>
        <p className="text-white mt-10 text-xl">
          <strong>Name:</strong> {eventData?.title}
        </p>
        <p className="text-white mt-10 text-xl">
          <strong>Price:</strong> ${eventData?.price}
        </p>
        <p className="text-white mt-10 text-xl">
          <strong>Location:</strong> {eventData?.location || "N/A"}
        </p>
        <p className="text-white">
          <div className="flex justify-between mt-20">
            <button className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center justify-center md:justify-start rounded-lg shadow-md hover:scale-95 transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0 hover:bg-main">
              Buy Tickets
            </button>

            <Link
              to="/events"
              className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center justify-center md:justify-start rounded-lg shadow-md hover:scale-95 transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0 hover:bg-main"
            >
              Back
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
