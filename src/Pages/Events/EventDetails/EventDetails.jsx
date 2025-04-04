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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import noImage from "../../../assets/Common_image/noImage.png";
import { FaArrowRightLong, FaBangladeshiTakaSign, FaRegClock } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";

const EventDetails = () => {
  const { darkMode } = useAuth();
  const { user } = useAuth();
  const { eventId } = useParams();
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");

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

  const {
    data: suggestionsData,
    isLoading: isSuggestionsLoading,
    error: suggestionsError,
  } = useQuery({
    queryKey: ["suggestions", eventData?.location],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/events?location=${eventData?.location}`
      );
      return res.data;
    },
    enabled: !!eventData?.location,
  });

  useEffect(() => {
    if (!eventData?.eventDate) return;

    const eventDate = new Date(eventData.eventDate);

    const updateTimer = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [eventData?.eventDate]);

  useEffect(() => {
    const checkIfSaved = async () => {
      if (!user?.email || !eventData?._id) return;

      try {
        const res = await axiosPublic.get(`/wishlist/${user.email}`);
        const eventExists = res.data.some(
          (item) => item.eventId === eventData._id
        );
        setIsSaved(eventExists);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    checkIfSaved();
  }, [user?.email, axiosPublic, eventData?._id]);

  const handleSaveEvent = async () => {
    if (!user?.email) {
      Swal.fire("Error", "You must be logged in to save events!", "error");
      return;
    }

    try {
      if (isSaved) {
        await axiosPublic.delete(`/wishlist/${user.email}/${eventData?._id}`);
        setIsSaved(false);
        Swal.fire("Removed", "Event removed from wishlist!", "info");
      } else {
        const wishlistItem = {
          eventId: eventData?._id,
          title: eventData?.title,
          eventDate: eventData?.eventDate,
          location: eventData?.location,
          price: eventData?.price,
          photo: eventData?.photo,
          userEmail: user.email,
          userName: user.displayName,
        };
        await axiosPublic.post("/wishlist", wishlistItem);
        setIsSaved(true);
        Swal.fire("Success!", "Event saved to wishlist!", "success");
      }
      queryClient.invalidateQueries(["wishlist", user?.email]);
    } catch (error) {
      console.error("Error updating wishlist:", error);
      Swal.fire("Error", "Something went wrong. Try again!", "error");
    }
  };
  // Modal toggle
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddComment = async () => {
    if (!comment.trim()) {
      Swal.fire("Error", "Please enter a comment.", "error");
      return;
    }

    try {
      const reviewData = {
        eventId: eventData._id,
        comment: comment,
        userEmail: user?.email,
      };

      await axiosPublic.post("/event-reviews", reviewData); // Add comment to the database
      Swal.fire("Success", "Your comment has been added!", "success");
      setComment(""); // Reset the comment field
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error("Error adding comment:", error);
      Swal.fire("Error", "Something went wrong. Try again!", "error");
    }
  };

  if (isLoading || isSuggestionsLoading) return <Loading />;
  if (error || suggestionsError)
    return (
      <p className="text-red-500 text-center">
        {error?.message || suggestionsError?.message}
      </p>
    );

  const EventDate = eventData?.eventDate?.split("T")[0];
  const month = EventDate
    ? new Date(eventData?.eventDate).toLocaleString("default", {
      month: "long",
    })
    : "";
  const day = EventDate ? new Date(eventData?.eventDate).getDate() : "";

  return (
    <div className="bg-background py-24">
      <div
        className={`${darkMode ? "bg-black text-white" : "text-black"
          } mx-auto w-11/12`}
      >
        <div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center text-center overflow-hidden rounded-md shadow-md">
              <div className="text-xl font-semibold bg-supporting text-white w-full py-0.5 flex items-center justify-center">
                {month}
              </div>
              <div className="text-4xl font-semibold bg-white py-2 px-6 flex items-center justify-center">
                {day}
              </div>
            </div>

            <div className="flex flex-col">
              <p className={`text-black font-bold text-2xl md:text-4xl mb-4`}>
                {eventData?.title}
              </p>
              <div className="flex flex-wrap gap-4 text-sm md:text-base mt-auto">
                <p className="text-gray-500 flex items-center gap-1">
                  <MdDateRange className="text-xl" /> {eventData?.eventDate}
                </p>
                <p className="text-gray-500 flex items-center gap-1">
                  <IoIosTime className="text-xl" /> {eventData?.duration}
                </p>
                <p className="text-gray-500 flex items-center gap-1">
                  <IoLocation className="text-xl" /> {eventData?.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mt-4">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <img
              src={eventData?.image ? eventData.image : noImage}
              alt={eventData?.name}
              className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg shadow-md"
            />

            <button
              onClick={handleSaveEvent}
              className={`flex flex-row btn ml-20 md:ml-60 lg:ml-90 mt-10 ${isSaved
                ? "bg-green-500 text-white"
                : "hover:bg-green-400 hover:text-white"
                }`}
            >
              <FaBookmark />
              {isSaved ? "Saved" : "Save"}
            </button>

            <div
              className={`${darkMode ? "bg-gray-600 text-white" : "bg-white text-black"
                } mt-4 p-6 md:p-10 rounded-lg shadow`}
            >
              <h2 className="text-xl md:text-2xl font-bold text-black">
                {eventData?.name}
              </h2>
              <p className="mt-2 text-md md:text-xl">{eventData?.details}</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div
            className={`${darkMode ? "bg-gray-500 text-white" : "bg-white text-black"
              } p-6 md:p-10 shadow-lg rounded-lg h-fit lg:col-span-1`}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Event Details
            </h3>
            <div className="divider">Starts in</div>

            <div className="rounded-lg text-center">
              <div className="flex justify-center gap-4 md:gap-2 text-white">
                {/* Days */}
                <div className="flex flex-col items-center bg-green-600 py-2 px-5 font-semibold rounded">
                  <span className="text-3xl md:text-3xl font-bold">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-sm uppercase tracking-wider">Days</span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center bg-green-600 py-2 px-6 font-semibold rounded">
                  <span className="text-3xl md:text-3xl font-bold ">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-sm uppercase tracking-wider">Hours</span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center bg-green-600 py-2 px-6 font-semibold rounded">
                  <span className="text-3xl md:text-3xl font-bold ">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-sm uppercase tracking-wider">Mins</span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center bg-green-600 py-2 px-6 font-semibold rounded">
                  <span className="text-3xl md:text-3xl font-bold ">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-sm uppercase tracking-wider">Secs</span>
                </div>
              </div>
            </div>

            <p className="text-lg flex items-center gap-2 mt-4">
              <IoPersonCircle className="text-green-500 text-3xl md:text-4xl" />
              Total Ticket: {eventData?.totalTickets}
            </p>

            <p className="text-lg flex items-center gap-2 mt-2">
              <IoMdPricetags className="text-green-500 text-3xl md:text-4xl" />
              Price: ${eventData?.price}
            </p>

            <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
              <button className="ezy-button-secondary">Buy Tickets</button>
            </div>
          </div>
        </div>

        {/* Comment Section Starts*/}
        <div className="flex gap-4 mt-10">
          <button className="ezy-button-primary-sm">
            Comments
          </button>
          <button
            onClick={openModal}
            className="ezy-button-secondary-sm"
          >
            Add Comment
          </button>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/5">
              <h2 className="text-xl font-bold mb-4">Add Comment</h2>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Write your comment here..."
              />
              <div className="flex justify-between">
                <button
                  onClick={handleAddComment}
                  className="ezy-button-primary-sm"
                >
                  Add Comment
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Comment Section ends */}

        {/* More Events section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-start border-l-4 border-supporting pl-2 rounded">
            More Events
          </h2>
          <div className="">
            <div className="flex justify-end mb-4">
              <Link to={'/allevents'}>
                <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors font-semibold cursor-pointer">
                  Browse All <FaArrowRightLong />
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestionsData?.slice(0, 3).map((suggestedEvent) => (
                <Link to={`/eventdetailspublic/${suggestedEvent._id}`}>
                  <div
                    key={suggestedEvent._id}
                    className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                      } rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-full flex flex-col group`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={suggestedEvent.image}
                        alt={suggestedEvent.title}
                        className="w-full h-56 object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h2 className="text-xl font-bold flex-grow">
                        {suggestedEvent.title}
                      </h2>

                      <div className="mt-auto pt-2">
                        {/* Price and Remaining Seat */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-supporting font-semibold">
                            <FaBangladeshiTakaSign />
                            {suggestedEvent.price}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <GiTicket className="" />
                            {suggestedEvent.totalTickets - suggestedEvent.soldTickets} Remaining
                          </div>
                        </div>

                        {/* Date and Duration */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center justify-center gap-2 text-gray-500">
                            <MdDateRange className="" />
                            <span>{suggestedEvent.eventDate}</span>
                          </div>

                          <div className="flex items-center justify-center gap-2 text-gray-500">
                            <FaRegClock className="" />
                            <span>{suggestedEvent.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;