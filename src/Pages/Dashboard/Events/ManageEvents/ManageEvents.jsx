import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageEvents = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allEvents = [], isLoading, isError } = useQuery({
        queryKey: ['allEvents'],
        queryFn: async () => {
            const res = await axiosSecure.get('/events');
            return res.data;
        }
    });

    if (isLoading) return <div className="text-center my-8">Loading events...</div>;
    if (isError) return <div className="text-center my-8 text-red-500">Error loading events</div>;

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-center my-8">Manage Events</h2>

            <div className="bg-background rounded-lg shadow-md p-4">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* Table Header */}
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left py-4 px-4">Photo</th>
                                <th className="text-left py-4 px-4">Title</th>
                                <th className="text-left py-4 px-4">Type</th>
                                <th className="text-left py-4 px-4">Date & Time</th>
                                <th className="text-left py-4 px-4">Tickets & Price</th>
                                <th className="text-right py-4 px-4">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {allEvents.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-8 text-gray-500">
                                        No events available
                                    </td>
                                </tr>
                            ) : (
                                allEvents.map((event) => (
                                    <tr key={event._id} className="hover:bg-gray-50 border-b">
                                        <td className="p-2">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-20 h-16 rounded"
                                            />
                                        </td>
                                        <td className="p-2">
                                            {event.title}
                                        </td>
                                        <td className="p-2">
                                            {event.eventType}
                                        </td>
                                        <td className="p-2">
                                            {new Date(event.eventDate).toLocaleDateString()}
                                            <br />
                                            <span className="text-sm text-gray-500">
                                                {event.eventTime}
                                            </span>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex flex-col">
                                                <span>Total: {event.totalTickets}</span>
                                                <span>Price: ${event.price}</span>
                                            </div>
                                        </td>
                                        <td className="p-2 flex justify-end">
                                            {
                                                event?.status === 'rejected' ?
                                                    <p className="py-1 px-3 bg-red-100 text-red-600 border border-red-300 w-fit rounded">Rejected</p>
                                                    :
                                                    event?.status === 'verified' ?
                                                        <p className="py-1 px-3 bg-green-100 text-green-600 border border-green-300 w-fit rounded">Verified</p>
                                                        :
                                                        <div className="flex gap-2 justify-end">
                                                            <button className="ezy-button-primary-sm">
                                                                Verify
                                                            </button>
                                                        </div>
                                            }

                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageEvents;