
import BusImage1 from "../../assets/Travel_image/travel-service/image1.jpg"
import BusImage3 from "../../assets/Travel_image/travel-service/image3.jpg"
import BusImage4 from "../../assets/Travel_image/travel-service/image4.jpg"
import BusImage5 from "../../assets/Travel_image/travel-service/image5.jpg"
import BusImage6 from "../../assets/Travel_image/travel-service/image6.jpg"
import BusImage2 from "../../assets/Travel_image/travel-service/image2.jpg"


const useTravelData = () => {

    // reservation data start
    const busServices = [
        {
            title: "Corporate Shuttle Service",
            image: BusImage1,
        },
        {
            title: "Airport Transfer Service",
            image: BusImage2,
        },
        {
            title: "City & Intercity Bus Service",
            image: BusImage3,
        },
        {
            title: "Event Transportation",
            image: BusImage4,
        },
        {
            title: "School & College Bus Service",
            image: BusImage5,
            path: "//travelbus-reservation"
        },
        {
            title: "Tour & Travel Bus Rentals",
            image: BusImage6,
        },
    ];
    // reservation data end

    
    return [busServices]
}

export default useTravelData