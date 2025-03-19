import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";


const useCardData = () => {

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
            icon: <MdHealthAndSafety />
        },
        {
            title: "No Booking Fees",
            description: "Enjoy a hassle-free experience with no hidden charges or booking fees.",
            linkText: "Sign up or Login",
            linkUrl: "#",
            icon: <AiFillDollarCircle />
        },
        {
            title: "Travel Now. Pay Later.",
            description: "Book your tickets today and pay later with interest-free options.",
            linkText: "Learn More",
            buttonUrl: "#",
            icon: <MdOutlineTravelExplore />
        }
    ];


    return [travelCards]
}

export default useCardData;