
import BusImage1 from "../../../assets/Travel_image/travel-service/image1.jpg"
import BusImage2 from "../../../assets/Travel_image/travel-service/image2.jpg"
import BusImage3 from "../../../assets/Travel_image/travel-service/image3.jpg"
import BusImage4 from "../../../assets/Travel_image/travel-service/image4.jpg"
import BusImage5 from "../../../assets/Travel_image/travel-service/image5.jpg"
import BusImage6 from "../../../assets/Travel_image/travel-service/image6.jpg"

import Heading from "../../../components/Heading"
import TravelServiceCard from "./TravelServiceCard"

const TravelService = () => {


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


  return (
    <section className="container mx-auto px-5">
      <Heading
        title="Reliable Bus Rental & Shuttle Services"
        subtitle="Ezy Ticket offers efficient and comfortable bus and shuttle services for all your travel needs. Whether you're planning a group trip, airport transfer, or daily commute, we ensure a smooth and reliable experience."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {
          busServices.map((service, idx) => <TravelServiceCard key={idx} service={service} />)
        }
      </div>
    </section>
  )
}

export default TravelService