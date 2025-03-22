import { useState, useEffect } from "react";
import { MdDateRange, MdLocationOn, MdAttachMoney } from "react-icons/md";
import Loading from "../../../Shared/Loading/Loading";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const EventCards = () => {
  const { darkMode } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();

        // Sort events by date (ascending order)
        const sortedEvents = data.sort(
          (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
        );

        setTimeout(() => {
          setEvents(sortedEvents);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setTimeout(() => {
          setError(error.message);
          setLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <p className="text-center text-lg mt-30">
        <Loading />
      </p>
    );
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // Show only the first 4 events
  const displayedEvents = events.slice(0, 3);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      } py-10`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-11/12">
        {displayedEvents.map((event, index) => {
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
              key={index}
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
                <h2 className="text-xl font-bold text-center">{event.title}</h2>

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

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/allevents"
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default EventCards;
