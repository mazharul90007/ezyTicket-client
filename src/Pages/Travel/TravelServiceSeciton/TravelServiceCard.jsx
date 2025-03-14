import { FaArrowRight } from "react-icons/fa";

const TravelServiceCard = ({ service }) => {
    return (
        <div className="relative">
            <img src={service.image} className="w-full" alt="" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            {/* Title Centered */}
            <div className="absolute inset-0 flex flex-col items-center  justify-end text-center">
                <h3 className="text-white text-2xl font-black mb-14">{service.title}</h3>
              <button className="text-2xl -mb-7 text-main bg-supporting h-14 w-14 rounded-full flex justify-center items-center"><FaArrowRight /></button>
            </div>
        </div>
    )
}

export default TravelServiceCard