import { FaTicketAlt } from "react-icons/fa";


const ProfileBanner = () => {
    return (
        <div className=" bg-gradient-to-br from-green-300 via-green-50 to-green-200 ">
            <div className="py-16 px-8 text-white text-center overflow-hidden h-[300px] md:h-[350px] lg:h-[380px] justify-center items-center">
                <h2 className="text-black text-4xl font-bold mb-4">Host Events, Sell Tickets, and Grow with EzyTicket</h2>
                <p className="text-2xl text-gray-600 font-semibold">Whether you're a beginner or a pro, EzyTicket makes event hosting easy.</p>
            </div>

        </div>
    );
};

export default ProfileBanner;