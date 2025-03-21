import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import Swal from "sweetalert2";
import { IoPersonCircle } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

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

  // Countdown Timer Logic
  useEffect(() => {
    if (!eventData?.dateTime) return;

    const targetTime = new Date(eventData.dateTime).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft("Event has started!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [eventData]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const eventDate = new Date(eventData?.dateTime);
  const month = eventDate
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const day = eventDate.getDate().toString().padStart(2, "0");

  return (
    <div className="bg-gray-100 mt-15">
      <div className="container mx-auto w-11/12 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-4 md:px-10">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-4">
            {/* Calendar Box */}
            <div className="flex flex-col items-center bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
              <span className="text-sm font-bold">{month}</span>
              <span className="text-3xl font-bold">{day}</span>
            </div>

            {/* Title */}
            <p className="text-black font-bold text-2xl md:text-4xl">
              {eventData?.title}
            </p>
          </div>

          {/* Event Info */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm md:text-lg">
            <p className="text-gray-500 flex items-center gap-1">
              <MdDateRange className="text-xl" />{" "}
              {eventData?.dateTime?.split("T")[0]}
            </p>
            <p className="text-gray-500 flex items-center gap-1">
              <IoIosTime className="text-xl" /> {eventData?.duration}
            </p>
            <p className="text-gray-500 flex items-center gap-1">
              <IoLocation className="text-xl" /> {eventData?.location}
            </p>
          </div>

          {/* Event Image */}
          <img
            src={eventData?.photo}
            alt={eventData?.name}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md mt-4"
          />

          {/* Description */}
          <div className="mt-4 bg-white p-6 md:p-10 rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {eventData?.name}
            </h2>
            <p className="text-black mt-2 text-md md:text-xl">
              {eventData?.description}
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 md:p-10 shadow-lg rounded-lg h-fit md:mt-35">
          <h3 className="text-xl md:text-2xl text-black font-semibold mb-4">
            Event Information
          </h3>

          {/* Countdown Timer */}
          <div className="bg-gray-200 text-black p-4 rounded-lg text-center">
            <h4 className="text-lg font-semibold">Event Starts In:</h4>
            <p className="text-xl font-bold">{timeLeft}</p>
          </div>

          <p className="text-black text-lg flex items-center gap-2 mt-4">
            <IoPersonCircle className="text-green-500 text-3xl md:text-4xl" />
            Organized by: {eventData?.organizedBy}
          </p>

          <p className="text-black text-lg flex items-center gap-2 mt-2">
            <MdDateRange className="text-green-500 text-3xl md:text-4xl" />
            Date: {eventData?.dateTime?.split("T")[0]}
          </p>

          <p className="text-black text-lg flex items-center gap-2 mt-2">
            <IoMdPricetags className="text-green-500 text-3xl md:text-4xl" />
            Price: ${eventData?.price}
          </p>

          <p className="text-black text-lg flex items-center gap-2 mt-2">
            <IoLocation className="text-green-500 text-3xl md:text-4xl" />
            Location: {eventData?.location}
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <button className="w-full md:w-auto py-2 md:py-3 px-4 md:px-6 bg-green-500 flex items-center justify-center rounded-lg shadow-md text-white font-semibold hover:bg-green-600 transition">
              Buy Tickets
            </button>

            <Link
              to="/events"
              className="w-full md:w-auto py-2 md:py-3 px-4 md:px-6 bg-gray-500 flex items-center justify-center rounded-lg shadow-md text-white font-semibold hover:bg-gray-600 transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
