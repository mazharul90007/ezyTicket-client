import { Link } from "react-router-dom";
import travelBannerImage from "../../../assets/Travel_image/Bus3.jpg"
import BannerCard from "./BannerCard";
import useCardData from "./useCardData";
import SelectPlaceTime from "../TravelTicekBook/SelectPlaceTime";

const TravelBanner = () => {
    const [travelCards] = useCardData()

    const handleScroll = () => {
        const section = document.getElementById("scroll-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <>
            <div className="relative mb-40 h-[730px] md:h-[520px] xl:h-[520px]">
                <div
                    className="hero md:min-h-[600px] min-h-screen "
                    style={{
                        backgroundImage: `url(${travelBannerImage})`,
                    }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="">
                            <h1 className='text-2xl font-bold md:text-3xl lg:text-5xl'>Smart Bus Ticket Booking <br /><span className="text-main">Fast, Easy & Secure!</span> </h1>
                            <p className='my-4'>Book Your Bus Tickets Anytime, Anywhere – Hassle-Free & Instant Confirmation!</p>

                        </div>
                    </div>
                </div>
                {/* cards */}

                <div className="flex justify-center items-center">
                    <div className=" absolute z-20 top-[380px] md:top-[450px]  ">
                        <div className="text-black shadow-2xl px-5">
                            <SelectPlaceTime />
                        </div>
                    </div>

                </div>

            </div>

            <div>
                <BannerCard/>
            </div>

        </>
    )
}

export default TravelBanner;