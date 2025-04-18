import { MdDateRange } from "react-icons/md";
import Loading from "../../../Shared/Loading/Loading";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaBangladeshiTakaSign, FaRegClock } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";

const EventCards = () => {
  const { darkMode } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data.sort(
        (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
      ); // Sorting after fetching
    },
  });

  if (isLoading)
    return (
      <p className="text-center text-lg mt-30">
        <Loading />
      </p>
    );

  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  const verifiedEvents = events.filter((event) => event.status === "verified");

  const displayedEvents = verifiedEvents.slice(0, 4);
  return (
    <div
      className={`pt-12 ${
        darkMode ? "bg-dark-background text-dark-primary" : "bg-background"
      }`}
    >
      <h1 className="text-5xl font-bold text-center text-main mb-3">
        Recent Events
      </h1>
      <p className="text-xl font-semibold text-center text-gray-500 mb-10">
        Buy Your Event Tickets Anytime, Anywhere – Hassle-Free & Instant
        Confirmation!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto w-11/12">
        {displayedEvents.map((event) => (
          <div
            key={event._id}
            className={`${
              darkMode ? "bg-dark-surface text-white" : "bg-white text-black"
            } rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-full flex flex-col group`}
          >
            <Link to={`/eventdetailspublic/${event._id}`}>
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 flex-grow">
                  {event.title}
                </h2>

                <div className="mt-auto pt-4">
                  {/* Price and Remaining Seat */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-main font-semibold">
                      <FaBangladeshiTakaSign className="text-xl" />
                      <span className="text-lg">{event.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <GiTicket className="text-xl" />
                      <span className="text-lg">
                        {event.totalTickets - event.soldTickets} Remaining
                      </span>
                    </div>
                  </div>

                  {/* Date and Duration */}
                  <div className="flex items-center justify-between text-gray-500 text-lg">
                    <div className="flex items-center gap-2">
                      <MdDateRange />
                      <span>{event.eventDate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaRegClock />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {/* <div className="flex justify-center mt-8">
        <Link
          to="/allevents"
          className="ezy-button-primary py-3 px-6 font-semibold text-xl rounded-lg"
        >
          View All Events
        </Link>
      </div> */}
    </div>
  );
};

export default EventCards;
