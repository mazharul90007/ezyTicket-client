import { FaTicketAlt } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";


const ProfileBanner = () => {
    const { user } = useAuth();
    return (
        <div className=" bg-gradient-to-br from-green-300 via-green-50 to-green-200 ">
            <div className="py-16 px-8 text-white text-center overflow-hidden h-[300px] md:h-[350px] lg:h-[380px] justify-center items-center">
                <h2 className="text-black text-4xl font-bold mb-4">Host Events, Sell Tickets, and Grow with EzyTicket</h2>
                <p className="text-2xl text-gray-600 font-semibold">Whether you're a beginner or a pro, EzyTicket makes event hosting easy.</p>
                <div className="mt-16">
                    {
                        user?.role === 'organizer' ?
                            <button className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center rounded mx-auto shadow-md hover:scale-95 transform transition-transform cursor-pointer">
                                <FaTicketAlt className="mr-2" /> Create Event
                            </button>
                            : user?.role === 'admin' ?
                                <button className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center rounded mx-auto shadow-md hover:scale-95 transform transition-transform cursor-pointer">
                                    <FaTicketAlt className="mr-2" /> Admin Pannel
                                </button>
                                :
                                <button className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center rounded mx-auto shadow-md hover:scale-95 transform transition-transform cursor-pointer">
                                    <FaTicketAlt className="mr-2" /> Be a Organizer
                                </button>
                    }
                </div>


            </div>

        </div>
    );
};

export default ProfileBanner;