import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EventCards = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fake API call (simulated fetch)
    const fetchData = async () => {
      const eventData = [
        {
          title: "AI & Future Tech Summit",
          description:
            "A deep dive into the latest advancements in artificial intelligence and emerging technologies.",
          organizedBy: "TechVision Bangladesh",
          dateTime: "2025-04-10T10:00:00",
          location: "Radisson Blu, Dhaka",
          photo:
            "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          price: 1500,
        },
        {
          title: "StartUp Pitch Night",
          description:
            "A platform for startups to pitch their ideas to investors and industry experts.",
          organizedBy: "Bangladesh Startup Hub",
          dateTime: "2025-04-15T18:30:00",
          location: "Online",
          photo:
            "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          price: 100,
        },
        {
          title: "Gaming Fiesta 2025",
          description:
            "A gaming festival featuring tournaments, workshops, and a showcase of upcoming games.",
          organizedBy: "Gamers Unite Bangladesh",
          dateTime: "2025-05-05T12:00:00",
          location: "BICC, Dhaka",
          photo:
            "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          price: 500,
        },
        {
          title: "Photography Masterclass",
          description:
            "A hands-on photography workshop conducted by renowned photographers.",
          organizedBy: "Shutterbugs Bangladesh",
          dateTime: "2025-03-30T15:00:00",
          location: "Online",
          photo:
            "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          price: 800,
        },
        {
          title: "Green Future Expo",
          description:
            "An exhibition on sustainable living, renewable energy, and eco-friendly innovations.",
          organizedBy: "EcoVision BD",
          dateTime: "2025-06-12T10:00:00",
          location: "Bashundhara Convention Center, Dhaka",
          photo:
            "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 200,
        },
        {
          title: "Blockchain & Crypto Conference",
          description:
            "Exploring the impact of blockchain and cryptocurrency in the modern financial world.",
          organizedBy: "Crypto Enthusiasts Bangladesh",
          dateTime: "2025-07-20T14:00:00",
          location: "Online",
          photo:
            "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          price: 1000,
        },
        {
          title: "Music Fest Dhaka",
          description:
            "A night of live performances featuring top local and international artists.",
          organizedBy: "Dhaka Music Crew",
          dateTime: "2025-08-05T19:00:00",
          location: "Army Stadium, Dhaka",
          photo:
            "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          price: 3000,
        },
      ];
      setEvents(eventData);
    };

    fetchData();
  }, []);

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
            <Link className="btn bg-[#F5F7F9] hover:bg-gray-400 hover:text-white">
              Buy Ticket
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
