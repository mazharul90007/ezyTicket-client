import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import noImage from "../../../../assets/Common_image/noImage.png"

const MyAddedEvents = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: addedEvents = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['addedEvents', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myAddedEvents/${user?.email}`);
            return res.data;
        }
    });

    const handleDeleteEvent = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/events/${id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your event has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    };

    if (isLoading) return <div className="text-center my-8">Loading your events...</div>;
    if (isError) return <div className="text-center my-8 text-red-500">Error loading events</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center gap-2 mb-8">
                <MdEventAvailable className="text-4xl text-main" />
                <h2 className="text-3xl md:text-5xl font-semibold text-center">My Added Events</h2>
            </div>

            {addedEvents.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500 mb-4">You haven't added any events yet</p>
                    <Link
                        to="/dashboard/addEvent"
                        className="btn btn-primary"
                    >
                        Add Your First Event
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>Event</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Tickets</th>
                                <th>Available</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addedEvents.map((event) => (
                                <tr key={event._id} className="hover:bg-gray-50 border-b border-gray-300">
                                    <td className="p-2">
                                        <img src={event?.image ? event.image : noImage} alt={event.title} className="w-20 h-16 rounded" />
                                    </td>
                                    <td className="p-2">{event.title}</td>
                                    <td className="capitalize">
                                        {event.eventType}
                                    </td>
                                    <td>
                                        {new Date(event.eventDate).toLocaleDateString()}
                                        <br />
                                        <span className="text-sm text-gray-500">
                                            {event.eventTime}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex flex-col">
                                            <span>Total: {event.totalTickets}</span>
                                            <span>Price: ${event.price}</span>
                                        </div>
                                    </td>
                                    <td>
                                        {event.totalTickets - event.soldTickets}
                                    </td>
                                    <td>
                                        <span className={`badge ${event.status === 'approved' ? 'badge-outline badge-success' : event.status === 'rejected' ? 'badge-outline badge-error' : 'badge-outline badge-warning'}`}>
                                            {event.status || 'pending'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                to={`/dashboard/updateEvent/${event._id}`}
                                                className="btn btn-sm btn-outline btn-primary"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteEvent(event._id)}
                                                className="btn btn-sm btn-outline btn-error"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyAddedEvents;