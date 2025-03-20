import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const EventCards = () => {
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

        setTimeout(() => {
          setEvents(data);
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
      <p className="text-center text-lg mt-50 mb-50">
        <Loading></Loading>
      </p>
    );
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-200">
      <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-11/12 py-10 mb-10 mt-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="hover:shadow-2xl hover:scale-105 transition-transform duration-300  rounded-lg bg-green-100 overflow-hidden shadow-sm shadow-[#A2CA71]"
          >
            <img
              src={event.photo}
              alt={event.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-10">{event.title}</h2>

              <p className="text-lg font-semibold mt-4 mb-4">
                Price: {event.price} Tk
              </p>
              <Link
                to={`/eventdetailspublic/${event._id}`}
                className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center justify-center md:justify-start rounded-lg shadow-md hover:scale-95 transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0 hover:bg-main"
              >
                View Details
              </Link>
              <div className="flex justify-around mt-4">
                <p className="text-sm mt-1">
                  <strong>Date & Time:</strong>{" "}
                  {new Date(event.dateTime).toLocaleString()}
                </p>
                <p className="text-sm mt-1">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
