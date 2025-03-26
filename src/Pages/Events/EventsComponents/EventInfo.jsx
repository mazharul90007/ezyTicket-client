import React from "react";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserFriends,
  FaRegHandshake,
} from "react-icons/fa";
import { IoMusicalNoteSharp } from "react-icons/io5";
import useAuth from "../../../Hooks/useAuth";

const EventInfo = () => {
  const { darkMode } = useAuth();
  const events = [
    {
      title: "Venue Events",
      description:
        "We organize in-person events that connect attendees, offering a memorable and engaging experience.",
      icon: <FaCalendarAlt className="text-4xl text-supporting" />,
    },
    {
      title: "Online Webinars",
      description:
        "Host seamless virtual events with interactive features for a fully immersive experience.",
      icon: <FaChalkboardTeacher className="text-4xl text-pink-600" />,
    },
    {
      title: "Workshops",
      description:
        "Create educational workshops that engage your audience and help them develop new skills.",
      icon: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
    },
    {
      title: "Networking Events",
      description:
        "Bring together professionals for valuable networking opportunities and idea sharing.",
      icon: <FaUserFriends className="text-4xl text-purple-500" />,
    },
    {
      title: "Conferences",
      description:
        "Organize large-scale conferences with a variety of speakers, workshops, and networking sessions.",
      icon: <FaRegHandshake className="text-4xl text-orange-500" />,
    },
    {
      title: "Concerts",
      description:
        "Organize large-scale Concerts with a variety of Band, Solos and Fest.",
      icon: <IoMusicalNoteSharp className="text-4xl text-green-600" />,
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      } px-4 py-12  text-center mt-10 `}
    >
      {/* Title */}
      <h1 className="text-3xl font-semibold ">
        Experience Engaging Online and Venue Events with{" "}
        <span className="text-green-400">EzyTicket</span>
      </h1>
      {/* Description */}
      <p className="mt-4 text-lg ">
        Organize venue events and host online events with unlimited
        possibilities using our built-in virtual event platform. Build a unique
        event experience for you and your attendees.
      </p>

      {/* Event Cards */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-green-500 to-teal-400 px-10 py-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
          >
            {/* Event Icon */}
            <div className="flex justify-center mb-4">{event.icon}</div>
            {/* Event Title */}
            <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
            {/* Event Description */}
            <p className="mt-4 text-base text-white opacity-80">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfo;
