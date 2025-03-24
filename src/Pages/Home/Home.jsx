import { useLocation } from "react-router-dom";
import HomeBanner from "./HomeComponents/HomeBanner";
import bus from "../../assets/Home_image/bus.png"
import event from "../../assets/Home_image/event.png"
import entertainment from "../../assets/Home_image/entertainment.png"

const Home = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className="pt-16 min-h-screen">
      <HomeBanner></HomeBanner>
      <div className="bg-background py-8 my-16">
        <div className="w-11/12 mx-auto">
          <p className="text-center text-2xl font-semibold text-supporting mb-1">
            One Platform, Endless Possibilities – The Best Ticketing System Online.
          </p>
          <h2 className="text-4xl text-main font-bold text-center">EzyTicket <span className="text-gray-800">Your One-Stop Solution for Hassle-Free Ticketing</span></h2>

          <div className="grid grid-cols-3 gap-4 py-8">
            {/* Bus */}
            <div className="col-span-1 shadow p-8 bg-white rounded-lg cursor-pointer hover:scale-105 transform transition-transform">
              <div className="mb-4 w-fit">
                <img src={bus} alt="bus" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold"><span className="text-supporting">Bus </span>Ticket</h3>
              <p className="text-lg">Your journey starts here! Book bus tickets effortlessly on EzyTicket. </p>
            </div>

            {/* Event */}
            <div className="col-span-1 shadow p-8 bg-white rounded-lg cursor-pointer hover:scale-105 transform transition-transform">
              <div className="mb-4 w-fit">
                <img src={event} alt="bus" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold"><span className="text-supporting">Events </span>Ticket</h3>
              <p className="text-lg">Experience the thrill! Event tickets just a click away on EzyTicket. </p>
            </div>

            {/* Entertainment */}
            <div className="col-span-1 shadow p-8 bg-white rounded-lg cursor-pointer hover:scale-105 transform transition-transform">
              <div className="mb-4 w-fit">
                <img src={entertainment} alt="bus" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold"><span className="text-supporting">Entertainmet </span>Ticket</h3>
              <p className="text-lg">Lights, camera, action! Book entertainment tickets in seconds. </p>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
