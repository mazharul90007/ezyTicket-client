import { MdDateRange, MdLocationOn, MdAttachMoney } from "react-icons/md";
import Loading from "../../../Shared/Loading/Loading";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";

const AllEvents = () => {
  const { darkMode } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // ✅ Correct way to reference an image in `public/`
  const bannerImageUrl = "/AllEventBanner.jpg";

  // Fetch events using useQuery
  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data.sort(
        (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
      ); // Sort events by date (newest first)
    },
  });

  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  // Pagination Logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  if (isLoading)
    return (
      <p className="text-center text-lg mt-30">
        <Loading />
      </p>
    );

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div
        className="relative py-16 px-8 text-white text-center overflow-hidden h-[500px] md:h-[600px] lg:h-[680px] xl:h-[600px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${bannerImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} // ✅ Correct usage
      >
        <div className=" absolute inset-0 bg-black opacity-70 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            All Events
          </h1>
          <p className="text-lg text-gray-200 mt-2">
            Explore our latest events and book your spot now!
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-10 w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event) => {
            const eventDate = new Date(event.dateTime).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            const eventTime = new Date(event.dateTime).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }
            );

            return (
              <Link
                to={`/eventdetailspublic/${event._id}`}
                key={event._id}
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                } 
                rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300`}
              >
                <img
                  src={event.photo}
                  alt={event.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />

                <div className="p-5 space-y-3">
                  <h2 className="text-xl font-bold text-center">
                    {event.title}
                  </h2>

                  <div className="flex items-center justify-center text-lg font-semibold text-green-600">
                    <MdAttachMoney className="text-2xl mr-2" />
                    {event.price} Tk
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <MdDateRange className="text-lg text-green-600" />
                    <span>
                      {eventDate}, {eventTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <MdLocationOn className="text-lg text-green-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-green-700 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
