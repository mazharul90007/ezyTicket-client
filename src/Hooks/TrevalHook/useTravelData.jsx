// reservation data image
import BusImage1 from "../../assets/Travel_image/travel-service/image1.jpg"
import BusImage3 from "../../assets/Travel_image/travel-service/image3.jpg"
import BusImage4 from "../../assets/Travel_image/travel-service/image4.jpg"
import BusImage5 from "../../assets/Travel_image/travel-service/image5.jpg"
import BusImage6 from "../../assets/Travel_image/travel-service/image6.jpg"
import BusImage2 from "../../assets/Travel_image/travel-service/image2.jpg"
// icon
import { FaBus, FaPlane, FaCalendarAlt, FaSchool, FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutlineCorporateFare } from "react-icons/md";


const useTravelData = () => {

    // reservation data start
    const busServices = [
        {
            title: "Corporate Shuttle Service",
            image: BusImage1,
            icon:<MdOutlineCorporateFare className="mr-2"/>
        },
        {
            title: "Airport Transfer Service",
            image: BusImage2,
            icon:<FaPlane className="mr-2" />
        },
        {
            title: "City & Intercity Bus Service",
            image: BusImage3,
            icon:<FaMapMarkedAlt className="mr-2" />
        },
        {
            title: "Event Transportation",
            image: BusImage4,
            icon: <FaCalendarAlt className="mr-2" />
        },
        {
            title: "School & College Bus Service",
            image: BusImage5,
            icon:<FaSchool className="mr-2" />
        },
        {
            title: "Tour & Travel Bus Rentals",
            image: BusImage6,
            icon: <FaMapMarkedAlt className="mr-2" />
        },
    ];
    // reservation data end

    
    return [busServices]
}

export default useTravelData