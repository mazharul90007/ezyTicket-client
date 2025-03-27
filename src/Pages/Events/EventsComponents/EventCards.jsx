import { MdDateRange, MdLocationOn, MdAttachMoney } from "react-icons/md";
import Loading from "../../../Shared/Loading/Loading";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

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

  // Show only the first 3 events
  const displayedEvents = events.slice(0, 6);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      } py-10`}
    >
      <h1 className="text-5xl font-bold text-center mt-5 mb-5">
        Explore Events
      </h1>
      <p className="text-lg  text-center mb-10">
        Buy Your Event Tickets Anytime, Anywhere – Hassle-Free & Instant
        Confirmation!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-11/12">
        {displayedEvents.map((event) => {
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
            <div>
              <div>
                <Link
                  to={`/eventdetailspublic/${event._id}`}
                  key={event._id}
                  className={`${darkMode ? "bg-gray-800 text-white" : ""} 
              rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300`}
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
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/allevents"
          className="ezy-button"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default EventCards;
