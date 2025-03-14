import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/events/${eventId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setError("Failed to fetch event details. Please try again later.");
        Swal.fire("Error", "Failed to fetch event details.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchClassDetails();
  }, [eventId]);
  if (loading)
    return (
      <p>
        <Loading></Loading>
      </p>
    );
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="mt-40 w-11/12 mx-auto mb-10">
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Event Details
      </h1>
      <div className="card bg-white shadow-md rounded-lg p-6 dark:text-black flex md:flex-row">
        <figure>
          <img
            src={eventData.photo}
            alt={eventData.title}
            className="w-fit h-66 px-5 object-cover rounded-lg"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg">{eventData.title}</h2>
          <p className="text-sm">
            <strong>Name:</strong> {eventData.name}
          </p>
          <p className="text-sm">
            <strong>Price:</strong> ${eventData.price}
          </p>
          <p className="text-sm">
            <strong>Description:</strong> {eventData.description}
          </p>
          <p className="text-sm">
            <strong>Total Enrolment:</strong> {eventData.enrollmentCount || 0}
          </p>
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-lg bg-blue-500 text-white">
              Buy ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
