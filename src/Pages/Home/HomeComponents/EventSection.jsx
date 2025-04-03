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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[500px]">
                    {/* Left Column - Single Event */}
                    <div className="md:col-span-6 h-full">
                        {events[0] &&
                            <Link to={`/eventdetailspublic/${events[0]._id}`} className="block h-full">
                                <div className="relative rounded-lg overflow-hidden shadow-md h-full transform transition-transform cursor-pointer group hover:scale-105 duration-300">
                                    {/* Image Wrapper */}
                                    <div className="h-full overflow-hidden">
                                        <img
                                            src={events[0].image}
                                            alt="Shoes"
                                            className="w-full h-full object-cover flex-1 transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-200/20"></div>

                                    {/* Text Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end text-white p-8">
                                        <h2 className="text-xl md:text-3xl font-bold mb-4">{events[0].title}</h2>
                                        <div className="flex flex-col w-full text-xl">
                                            <div className="flex items-center gap-1 text-sm md:text-lg font-semibold text-yellow-300">
                                                <FaBangladeshiTakaSign />
                                                <p className="">{events[0].price} BDT</p>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm md:text-lg">
                                                <MdDateRange />
                                                <p>
                                                    {events[0].eventDate ? new Date(events[0].eventDate).toLocaleDateString() : "Date not available"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        }
                    </div>
                    {/* Right Column - Grid Layout */}
                    <div className="md:col-span-6 grid grid-cols-2 gap-4 h-full">
                        {events.slice(1, 5).map((event, index) => (
                            <Link key={index} to={`/eventdetailspublic/${event._id}`} className="block h-full">
                                <div className="relative rounded-lg overflow-hidden shadow-md transform transition-transform cursor-pointer flex flex-col h-full group hover:scale-105 duration-300">
                                    {/* Image Wrapper */}
                                    <div className="overflow-hidden h-full">
                                        <img src={event.image} alt="events" className="w-full h-full object-cover flex-1 transition-transform duration-300 group-hover:scale-110" />
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-200/20"></div>

                                    {/* Text Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end text-white px-4 p-2">
                                        <h2 className=" text-base md:text-lg font-bold mb-2">{event.title}</h2>
                                        <div className="flex flex-col w-full">
                                            <div className="flex items-center gap-1 text-xs md:text-base font-semibold text-yellow-300">
                                                <FaBangladeshiTakaSign />
                                                <p>{event.price} BDT</p>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs md:text-base ">
                                                <MdDateRange />
                                                <p>{event.eventDate ? new Date(event.eventDate).toLocaleDateString() : "Date not available"}</p>
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
