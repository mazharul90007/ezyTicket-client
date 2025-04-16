import { FaCheck, FaShippingFast, FaHeadset } from "react-icons/fa";
import busTicket from '../../../assets/Home_image/busTicket.webp';
import movieTicket from '../../../assets/Home_image/movieTicket.webp';
import concertTicket from '../../../assets/Home_image/concertTicket.webp';
import { motion } from "framer-motion";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { darkMode } = useAuth();
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const imageRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const content = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="my-16 grid md:grid-cols-2 gap-6 w-11/12 mx-auto px-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Left Column - Images */}
      <div className="relative flex items-center justify-center h-[400px] md:h-auto">
        <motion.img
          variants={imageLeft}
          src={busTicket}
          alt="Bus Ticket"
          className="w-2/3 md:w-2/3 absolute top-0 left-0 rounded-xl shadow-lg border-4 border-white"
        />
        <motion.img
          variants={imageRight}
          src={movieTicket}
          alt="Movie Ticket"
          className="w-2/3 md:w-2/3 absolute bottom-0 right-0 md:right-20 rounded-xl shadow-lg border-4 border-white"
        />
        <motion.img
          variants={imageRight}
          src={concertTicket}
          alt="Concert Ticket"
          className="w-2/3 md:w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg border-4 border-white z-10"
        />
      </div>

      {/* Right Column - Content */}
      <motion.div
        variants={content}
        className="flex flex-col justify-center"
      >
        <p className="uppercase text-xl font-semibold text-main mb-2">
          About EzyTicket
        </p>
        <h3 className={`uppercase text-2xl md:text-3xl lg:text-4xl font-bold mb-8 ${darkMode ? 'text-dark-primary' : 'text-gray-700'}`}>
          One Platform for All Your Ticketing Needs
        </h3>

        <p className={`text-lg mb-8 ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
          Whether it's hopping on a bus, catching the latest blockbuster, or attending the hottest concerts — EzyTicket brings convenience to your fingertips. We're here to simplify your bookings and elevate your experiences.
        </p>

        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-4">
            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className={`font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'}`}>Simple & Fast Booking</h4>
              <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>Book your tickets in seconds with a user-friendly interface.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <FaShippingFast className="text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className={`font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'}`}>Instant Confirmation</h4>
              <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>Get real-time confirmation and never miss out on events.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <FaHeadset className="text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className={`font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'}`}>24/7 Customer Support</h4>
              <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>We're always here to help with your ticketing queries.</p>
            </div>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
