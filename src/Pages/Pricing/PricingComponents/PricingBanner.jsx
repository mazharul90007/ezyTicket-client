import { FaArrowRight, FaTicketAlt } from "react-icons/fa";
import ticket from "../../../assets/Pricing_image/ticket.png";

const PricingBanner = () => {
    return (
        <div className="min-h-[500px] md:min-h-[600px] lg:min-h-[680px] xl:min-h-[600px] bg-gradient-to-br from-green-300 via-green-50 to-green-200 pt-16">
            <div className=" grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-10 py-16 md:py-20 items-center">
                {/* Text Content */}
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        EzyTicket Pricing
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500">
                        We believe your event experience should be simple, elegant, and hassle-free. Our aim is to create that experience so that you can focus on hosting your event while we take care of the rest.
                    </p>
                    <button className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center justify-center md:justify-start rounded-lg shadow-md hover:scale-95 transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0">
                        Create Event
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center bg-green-200 py-8 rounded-2xl overflow-hidden shadow">
                    <img
                        src={ticket}
                        alt="ticket"
                        className="w-72 md:w-80 h-auto transform hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </div>
    );
};

export default PricingBanner;