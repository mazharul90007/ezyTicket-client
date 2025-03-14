import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const EventCards = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
  const handleViewDetails = (eventId) => {
    navigate(`/eventdetailspublic/${eventId}`);
  };
  if (loading)
    return (
      <p className="text-center text-lg">
        <Loading></Loading>
      </p>
    );
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <div
          key={index}
          className="border shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={event.photo}
            alt={event.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p className="text-gray-600 mt-2">{event.description}</p>
            <p className="text-sm mt-1">
              <strong>Organized By:</strong> {event.organizedBy}
            </p>
            <p className="text-sm mt-1">
              <strong>Date & Time:</strong>{" "}
              {new Date(event.dateTime).toLocaleString()}
            </p>
            <p className="text-sm mt-1">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="text-lg font-semibold mt-2">
              Price: {event.price} Tk
            </p>
            <Link
              onClick={() => handleViewDetails(event._id)}
              className="btn bg-[#F5F7F9] hover:bg-gray-400 hover:text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
