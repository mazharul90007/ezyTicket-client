import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import Swal from "sweetalert2";
import { IoPersonCircle } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { FaBookmark } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const EventDetails = () => {
  const { darkMode } = useAuth();
  const { user } = useAuth();
  const { eventId } = useParams();
  const axiosPublic = useAxiosPublic();
  const [timeLeft, setTimeLeft] = useState("");

  const {
    data: eventData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/events/${eventId}`);
      return res.data;
    },
  });

  // Calculate time left until the event
  useEffect(() => {
    if (eventData?.dateTime) {
      const eventDate = new Date(eventData.dateTime);
      const interval = setInterval(() => {
        const now = new Date();
        const difference = eventDate - now;
        if (difference <= 0) {
          clearInterval(interval);
          setTimeLeft("Event Started");
        } else {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          setTimeLeft(`${hours}h ${minutes}m`);
        }
      }, 60000); // Update every minute

      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, [eventData]);

  const handleSaveEvent = async () => {
    if (!user?.email) {
      Swal.fire("Error", "You must be logged in to save events!", "error");
      return;
    }

    const wishlistItem = {
      eventId: eventData?._id,
      title: eventData?.title,
      dateTime: eventData?.dateTime,
      location: eventData?.location,
      price: eventData?.price,
      photo: eventData?.photo,
      userEmail: user.email,
      userName: user.displayName,
    };

    try {
      await axiosPublic.post("/wishlist", wishlistItem);
      Swal.fire("Success!", "Event saved to wishlist!", "success");
    } catch (error) {
      console.error("Error saving event:", error);
      Swal.fire("Error", "Failed to save event. Try again!", "error");
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">{error.message}</p>;

  const eventDate = eventData?.dateTime?.split("T")[0]; // Extract date part
  const month = eventDate
    ? new Date(eventData?.dateTime).toLocaleString("default", { month: "long" })
    : "";
  const day = eventDate ? new Date(eventData?.dateTime).getDate() : "";

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } mt-15`}
    >
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
            <p
              className={`${
                darkMode ? "bg-black text-white" : "bg-white text-black"
              } text-black font-bold text-2xl md:text-4xl`}
            >
              {eventData?.title}
            </p>
          </div>

          {/* Event Info */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm md:text-lg">
            <p className="text-gray-500 flex items-center gap-1">
              <MdDateRange className="text-xl" /> {eventDate}
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

          {/* Wishlist Button */}
          <button
            onClick={handleSaveEvent}
            className="flex flex-row btn ml-20 md:ml-60 lg:ml-90 mt-10 hover:bg-green-400 hover:text-white"
          >
            <FaBookmark />
            Save
          </button>

          {/* Description */}
          <div
            className={`${
              darkMode ? "bg-gray-600 text-white" : "bg-white text-black"
            } mt-4 p-6 md:p-10 rounded-lg shadow`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {eventData?.name}
            </h2>
            <p className="mt-2 text-md md:text-xl">{eventData?.description}</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className={`${
            darkMode ? "bg-gray-500 text-white" : "bg-white text-black"
          } p-6 md:p-10 shadow-lg rounded-lg h-fit md:mt-35`}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Event Information
          </h3>

          {/* Countdown Timer */}
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <h4 className="text-lg text-black font-semibold">
              Event Starts In:
            </h4>
            <p className="text-xl text-black font-bold">{timeLeft}</p>
          </div>

          <p className="text-lg flex items-center gap-2 mt-4">
            <IoPersonCircle className="text-green-500 text-3xl md:text-4xl" />
            Organized by: {eventData?.organizedBy}
          </p>

          <p className="text-lg flex items-center gap-2 mt-2">
            <MdDateRange className="text-green-500 text-3xl md:text-4xl" />
            Date: {eventDate}
          </p>

          <p className="text-lg flex items-center gap-2 mt-2">
            <IoMdPricetags className="text-green-500 text-3xl md:text-4xl" />
            Price: ${eventData?.price}
          </p>

          <p className="text-lg flex items-center gap-2 mt-2">
            <IoLocation className="text-green-500 text-3xl md:text-4xl" />
            Location: {eventData?.location}
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <button className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center justify-center md:justify-start rounded-lg shadow-md hover:scale-95 transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0">
              Buy Tickets
            </button>

            <Link
              to="/events"
              className="w-full md:w-auto py-2 md:py-3 px-4 md:px-6 bg-gray-700 flex items-center justify-center rounded-lg shadow-md text-white font-semibold hover:bg-gray-600 transition"
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
