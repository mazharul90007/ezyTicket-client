import { MdDateRange } from "react-icons/md";
import Loading from "../../../Shared/Loading/Loading";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { FaBangladeshiTakaSign, FaRegClock } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";

const AllEvents = () => {
  const { darkMode } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 13; // 3 rows × 4 cols = 12 cards

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
      );
    },
  });

  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

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

  const verifiedEvents = currentEvents.filter(
    (event) => event.status === "verified"
  );
  const displayedEvents = verifiedEvents.slice(0, 12); // Display 12 verified events

  return (
    <div
      className={`my-16 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="relative h-[240px] md:h-[300px] lg:h-[320px] xl:h-[360px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-80 blur-sm"></div>

        <div className="relative z-10 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-xl p-6 md:p-10 text-center w-11/12 max-w-4xl mx-auto shadow-lg border border-white/20 dark:border-black/20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-md leading-tight">
            Your Next Adventure Awaits
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-medium">
            Discover unforgettable experiences with{" "}
            <span className="font-bold text-green-700 dark:text-green-400">
              EzyTicket
            </span>{" "}
            — where every event becomes a memory.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-10 w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedEvents.map((event) => {
            return (
              <Link to={`/eventdetailspublic/${event._id}`} key={event._id}>
                <div
                  className={`${
                    darkMode
                      ? "bg-dark-surface text-dark-primary"
                      : "bg-white text-black"
                  } rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-full flex flex-col group`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-56 object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold flex-grow">
                      {event.title}
                    </h2>

                    <div className="mt-auto pt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-supporting font-semibold">
                          <FaBangladeshiTakaSign />
                          {event.price}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <GiTicket className="" />
                          {event.totalTickets - event.soldTickets} Remaining
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center justify-center gap-2 text-gray-500">
                          <MdDateRange className="" />
                          <span>{event.eventDate}</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-gray-500">
                          <FaRegClock className="" />
                          <span>{event.duration}</span>
                        </div>
                      </div>
                    </div>
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
                : "ezy-button-primary"
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
                : "ezy-button-primary"
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
