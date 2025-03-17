import travelBannerImage from "../../../assets/Travel_image/Bus.jpg"
import { MdHealthAndSafety } from "react-icons/md";
import BannerCard from "./BannerCard";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";

const TravelBanner = () => {

    const travelCards = [
        {
            title: "Book Direct",
            description: "Get the best prices by booking your tickets directly with us.",
            linkText: "Cheap Coach Tickets",
            linkUrl: "#",
            icon: <AiFillSafetyCertificate />
        },
        {
            title: "Keeping You Safe",
            description: "We prioritize your safety with enhanced cleaning and security measures.",
            linkText: "Explore Now",
            linkUrl: "#",
            icon:<MdHealthAndSafety />
        },
        {
            title: "No Booking Fees",
            description: "Enjoy a hassle-free experience with no hidden charges or booking fees.",
            linkText: "Sign up or Login",
            linkUrl: "#",
            icon:<AiFillDollarCircle />
        },
        {
            title: "Travel Now. Pay Later.",
            description: "Book your tickets today and pay later with interest-free options.",
            linkText: "Learn More",
            buttonUrl: "#",
            icon: <MdOutlineTravelExplore/>
        }
    ];


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
                        <button className="btn bg-button border-none text-white">Book Now</button>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="container mx-auto flex justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 absolute z-20 top-[520px] px-5">
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
    )
}

export default TravelBanner