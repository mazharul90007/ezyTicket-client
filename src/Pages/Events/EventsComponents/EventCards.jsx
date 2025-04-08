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
      className={`py-10`}
    >
      <h1 className="text-5xl font-bold text-center mt-5 mb-5">
        Explore Events
      </h1>
      <p className="text-lg  text-center mb-10">
        Buy Your Event Tickets Anytime, Anywhere – Hassle-Free & Instant
        Confirmation!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4 mx-auto w-11/12">
        {displayedEvents.map((event) =>
          <div>
            <Link to={`/eventdetailspublic/${event._id}`}>
              <div
                key={event._id}
                className={`${darkMode ? "bg-dark-surface text-white" : "bg-white text-black"
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
                    {/* Price and Remaining Seat */}
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

                    {/* Date and Duration */}
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
          </div>
        )}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <Link to="/allevents" className="ezy-button-primary">
          View All
        </Link>
      </div>
    </div>
  );
};

export default EventCards;
