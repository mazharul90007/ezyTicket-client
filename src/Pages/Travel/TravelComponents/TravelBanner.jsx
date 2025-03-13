import travelBannerImage from "../../../assets/Travel_image/Bus.jpg"
import Heading from "../../../components/Heading"

const TravelBanner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${travelBannerImage})`,
            }}
            className="w-full h-[600px] bg-cover relative my-10"
        >
            {/* overly */}
            <div className="absolute z-0 inset-0 bg-black opacity-40"></div>
            {/* main content */}
            <div className="relative pt-30 z-10 flex justify-center items-center">
                <Heading
                    title={"Smart Bus Ticket Booking – Fast, Easy & Secure!"}
                    subtitle={"Book Your Bus Tickets Anytime, Anywhere – Hassle-Free & Instant Confirmation!"}
                />
            </div>

        </div>
    )
}

export default TravelBanner