import { AiFillDollarCircle } from "react-icons/ai";
import { FaBus } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";

const useCardData = () => {
    const travelCards = [
        {
          title: "Select Your Bus",
          description: "Choose the best bus option for your journey.",
          icon: <FaBus />,
        },
        {
          title: "Booking & Confirm",
          description: "Confirm your booking details and proceed.",
          icon:<IoMdDoneAll />,
        },
        {
          title: "Booking Payment",
          description: "Securely pay for your ticket online.",
          icon: <AiFillDollarCircle />,
        },
        {
          title: "Start Your Roadtrip",
          description: "Get ready to enjoy your journey.",
          icon: <FaMapLocationDot/>,
        },]
      

    return [travelCards]
}

export default useCardData;