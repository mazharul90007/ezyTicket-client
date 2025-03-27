import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import HomeBanner from "./HomeComponents/HomeBanner";
import HomeCategory from "./HomeComponents/HomeCategory";
import EventSection from "./HomeComponents/EventSection";
import eidPopUp from "../../assets/Home_image/eidPopUp.gif"

const Home = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);
  const [countdown, setCountdown] = useState(6);

  // Auto-close modal after 6 seconds with countdown
  useEffect(() => {
    if (showModal && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
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

  console.log(location);

  return (
    <div className="pt-16 min-h-screen relative">
      {/* Blur effect only on Home Page content */}
      <div className={showModal ? "blur-md" : ""}>
        <HomeBanner />
        <HomeCategory />
        <EventSection />
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/10 bg-opacity-70 z-50 flex items-center justify-center">
          <div className="rounded-lg mx-4">
            <img src={eidPopUp} alt="EidPopUp" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto max-h-[80vh] mx-auto" />
            <div className='flex items-center justify-between'>
              <p className="mb-4 text-amber-600 text-lg">
                Close in <span className="font-bold text-main text-3xl">{countdown}</span>.
              </p>
              <button
                onClick={handleClose}
                className="bg-supporting text-white px-3 py-1 rounded hover:bg-supporting transition cursor-pointer"
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
