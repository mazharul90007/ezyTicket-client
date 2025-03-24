import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./EventCard";
import { MdDateRange } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EventSection = () => {
    const axiosPublic = useAxiosPublic();

    const { data: events = [] } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await axiosPublic.get('/events');
            return res.data;
        }
    });

    return (
        <div className="py-16 w-11/12 mx-auto">
            <p className="text-xl text-supporting font-semibold mb-1 border-l-4 border-supporting pl-2">Events</p>
            <h3 className="text-4xl font-bold">Buy Events Ticket Easily</h3>
            <div className="my-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px]">
                    {/* Left Column - Single Event */}
                    <div className="md:col-span-6 h-full">
                        {events[0] &&
                            <Link to={`/eventdetailspublic/${events[0]._id}`} className="block h-full">
                                <div className="relative rounded-xl overflow-hidden shadow-md h-full hover:scale-105 transform transition-transform cursor-pointer">
                                    <figure className="h-full">
                                        <img
                                            src={events[0].photo}
                                            alt="Shoes"
                                            className="w-full h-full object-cover"
                                        />
                                    </figure>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-200/20"></div>
                                    {/* Overlay */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end text-white px-4 text-center p-2">
                                        <h2 className="text-3xl font-bold mb-8">{events[0].title}</h2>
                                        <div className="flex w-full justify-between items-center text-xl">
                                            <div className="flex items-center gap-1">
                                                <MdDateRange />
                                                <p className="">
                                                    {events[0].dateTime ? new Date(events[0].dateTime).toLocaleDateString() : "Date not available"}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaBangladeshiTakaSign />
                                                <p>{events[0].price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        }
                    </div>


                    {/* Right Column - Grid Layout */}
                    {/* Right Column - Grid Layout */}
                    <div className="md:col-span-6 grid grid-cols-2 gap-4 h-full">
                        {events.slice(1, 5).map((event, index) => (
                            <Link key={index} to={`/eventdetailspublic/${event._id}`} className="block h-full">
                                <div className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition-transform cursor-pointer flex flex-col h-full">
                                    {/* Image with Overlay */}
                                    <img src={event.photo} alt="events" className="w-full h-full object-cover flex-1" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-200/20"></div> {/* Overlay */}

                                    {/* Text Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end text-white px-4 text-center p-2">
                                        <h2 className="text-lg font-bold mb-2">{event.title}</h2>
                                        <div className="flex w-full justify-between items-center">
                                            <div className="flex items-center gap-1">
                                                <MdDateRange />
                                                <p>{event.dateTime ? new Date(event.dateTime).toLocaleDateString() : "Date not available"}</p>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm">
                                                <FaBangladeshiTakaSign />
                                                <p>{event.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default EventSection;
