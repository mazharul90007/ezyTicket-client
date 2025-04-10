import { useState, useEffect } from "react";
import HomeBanner from "./HomeComponents/HomeBanner";
import HomeCategory from "./HomeComponents/HomeCategory";
import EventSection from "./HomeComponents/EventSection";
import eidPopUp from "../../assets/Home_image/eidPopUp.gif";
import TravelSection from "./HomeComponents/TravelSection";
import { LuPopcorn } from "react-icons/lu";
import { FaBus } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import useAuth from "../../Hooks/useAuth";
import EntertainmentSection from "./HomeComponents/EntertainmentSection";

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [countdown, setCountdown] = useState(6);
  const { darkMode } = useAuth();

  // Auto-close modal after 6 seconds with countdown
  useEffect(() => {
    if (showModal && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (countdown === 0) {
      setShowModal(false);
    }
  }, [showModal, countdown]);

  // Close modal when clicking the button
  const handleClose = () => {
    setShowModal(false);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pt-16 min-h-screen relative">
      {/* Blur effect only on Home Page content */}
      <div className={showModal ? "blur-md" : ""}>
        <HomeBanner />
        <div className="py-16">
          <div className="w-11/12 mx-auto">
            <p className={`text-center text-xl md:text-2xl font-semibold mb-2 md:mb-1 ${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>
              One Platform, Endless Possibilities – The Best Ticketing System Online.
            </p>
            <h2 className="text-2xl md:text-4xl text-main font-bold text-center">EzyTicket <span className={` ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Your One-Stop Solution for Hassle-Free Ticketing</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 py-8">
              {/* Bus Ticket Card */}
              <div 
                onClick={() => scrollToSection("travelSection")}
                className={`md:col-span-1 shadow p-8 ${darkMode ? 'bg-dark-surface hover:bg-[#3D3D3D]' : 'bg-white'} rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300`}
              >
                <div className="mb-4 text-7xl text-dark-accent font-bold">
                  <FaBus />
                </div>
                <h3 className={`text-2xl font-semibold ${darkMode && 'text-dark-primary'}`}><span className={`${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>Bus </span>Ticket</h3>
                <p className={`text-lg ${darkMode && 'text-dark-secondary'}`}>Your journey starts here! Book bus tickets effortlessly on EzyTicket. </p>
              </div>

              {/* Event Ticket Card */}
              <div 
                onClick={() => scrollToSection("eventSection")}
                className={`md:col-span-1 shadow p-8 ${darkMode ? 'bg-dark-surface hover:bg-[#3D3D3D]' : 'bg-white'} rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300`}
              >
                <div className="mb-4 text-7xl text-dark-accent font-bold">
                  <GiMicrophone />
                </div>
                <h3 className={`text-2xl font-semibold ${darkMode && 'text-dark-primary'}`}><span className={`${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>Events </span>Ticket</h3>
                <p className={`text-lg ${darkMode && 'text-dark-secondary'}`}>Experience the thrill! Event tickets just a click away on EzyTicket. </p>
              </div>

              {/* Entertainment Ticket Card */}
              <div 
              onClick={() => scrollToSection("entertainmentSection")}
              className={`md:col-span-1 shadow p-8 ${darkMode ? 'bg-dark-surface hover:bg-[#3D3D3D]' : 'bg-white'} rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300`}>
                <div className="mb-4 text-7xl text-dark-accent font-bold">
                  <LuPopcorn />
                </div>
                <h3 className={`text-2xl font-semibold ${darkMode && 'text-dark-primary'}`}><span className={`${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>Entertainmet </span>Ticket</h3>
                <p className={`text-lg ${darkMode && 'text-dark-secondary'}`}>Lights, camera, action! Book entertainment tickets in seconds. </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3 Sections */}
        <TravelSection/>
        <EventSection/>
        <EntertainmentSection/>

      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/10 bg-opacity-70 z-50 flex items-center justify-center">
          <div className="rounded-lg mx-4">
            <img
              src={eidPopUp}
              alt="EidPopUp"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto max-h-[80vh] mx-auto rounded-md"
            />
            <div className="flex items-center justify-between">
              <p className="mb-4 text-amber-600 text-lg">
                Close in{" "}
                <span className="font-bold text-main text-3xl">
                  {countdown}
                </span>
                .
              </p>
              <button
                onClick={handleClose}
                className="bg-supporting text-white px-2 md:px-3 py-1 rounded hover:bg-supporting transition text-xs md:text-sm cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;