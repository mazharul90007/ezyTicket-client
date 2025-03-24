import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./EventCard";

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
            <p className="text-xl text-supporting font-semibold mb-1">Events</p>
            <h3 className="text-4xl font-bold">Buy Events Ticket Easily</h3>
            <div className="my-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Left Column - Single Event */}
                    <div className="md:col-span-6">
                        {events[0] &&
                            <div className="card bg-base-100 w-full shadow-sm">
                                <figure>
                                    <img
                                        src={events[0].photo}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>}
                    </div>

                    {/* Right Column - Grid Layout */}
                    <div className="md:col-span-6 grid grid-cols-2 gap-4">
                        {events.slice(1, 5).map((event, index) => (
                            <div key={index} className="relative rounded-xl overflow-hidden shadow-md">
                                {/* Image with Overlay */}
                                <img src={event.photo} alt="events" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}

                                {/* Text Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end text-white px-4 text-center">
                                    <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                                    <div className="flex w-full justify-between items-center">
                                        <p className="">
                                            {event.dateTime ? new Date(event.dateTime).toLocaleDateString() : "Date not available"}
                                        </p>
                                        <p>
                                           BDT {event.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventSection;
