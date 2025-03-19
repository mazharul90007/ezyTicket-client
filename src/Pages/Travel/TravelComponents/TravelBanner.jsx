import travelBannerImage from "../../../assets/Travel_image/Bus.jpg"
import { MdHealthAndSafety } from "react-icons/md";
import BannerCard from "./BannerCard";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import useCardData from "./useCardData";

const TravelBanner = () => {
    const [travelCards] = useCardData()

    const handleScroll = () => {
        const section = document.getElementById("scroll-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <div className="relative mb-40 h-[1350px] md:h-[880px] lg:h-[680px] xl:h-[650px]">
            <div
                className="hero md:min-h-[600px] min-h-screen my-10"
                style={{
                    backgroundImage: `url(${travelBannerImage})`,
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className='text-2xl font-bold md:text-3xl lg:text-5xl'>Smart Bus Ticket Booking <br /><span className="text-main">Fast, Easy & Secure!</span> </h1>
                        <p className='my-4'>Book Your Bus Tickets Anytime, Anywhere – Hassle-Free & Instant Confirmation!</p>
                        <button onClick={handleScroll} className="btn bg-main border-none text-white ">Book Now</button>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="flex justify-center items-center">
                <div className=" absolute z-20 top-[520px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 container mx-auto px-5">
                        {
                            travelCards.map((card, idx) => <BannerCard
                                key={idx}
                                idx={idx}
                                card={card}
                            ></BannerCard>)
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TravelBanner