import EventCard from "./EventCard";
import { MdDateRange } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import tanoura from "../../../assets/Home_image/tanoura.jpg"
import { motion } from "framer-motion";
import { FaBus, FaCalendarAlt, FaHeadphonesAlt, FaMapMarkerAlt, FaRegSmile, FaStar, FaTag, FaTicketAlt } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const EventSection = () => {
    const { darkMode } = useAuth();

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            id="eventSection" 
            className="mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={container}
        >
            <div className="w-11/12 mx-auto px-4">
                {/* Animated Image */}
                <motion.div 
                    className="mb-12 flex justify-center w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    variants={imageVariants}
                >
                    <img
                        src={tanoura}
                        alt="Tanoura Dance"
                        className="object-cover w-full h-full rounded-xl shadow-lg"
                    />
                </motion.div>

                {/* Text + Features */}
                <motion.div 
                    className="flex flex-col lg:flex-row gap-12"
                    variants={container}
                >
                    {/* Left - Text */}
                    <motion.div 
                        className="lg:w-1/2"
                        variants={container}
                    >
                        <motion.h2 
                            className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}
                            variants={itemVariants}
                        >
                            Get Your Event Tickets <br /> With EzyTicket
                        </motion.h2>

                        <motion.div 
                            className="space-y-6"
                            variants={container}
                        >
                            <motion.div 
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaTicketAlt className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Book Event Tickets Quickly and Easily
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Whether it's concerts, theater, or festivals, we make it easy to book your event tickets online.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaStar className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Exclusive Offers for Events
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        We offer exclusive discounts and unbeatable prices on the best events in town.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Features */}
                    <motion.div 
                        className="lg:w-1/2 rounded-xl"
                        variants={container}
                    >
                        <motion.h3 
                            className="text-2xl md:text-3xl font-bold text-main mb-4 md:mb-6"
                            variants={itemVariants}
                        >
                            Why Choose EzyTicket for Your Events?
                        </motion.h3>

                        <motion.div 
                            className="space-y-6"
                            variants={container}
                        >
                            <motion.div 
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaCalendarAlt className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Top Events & Shows</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Choose from a wide variety of events, from live concerts to theater performances.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaHeadphonesAlt className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Seamless Booking Experience</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        With just a few clicks, secure your tickets and enjoy a seamless experience.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaTag className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Exclusive Discounts</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Enjoy amazing deals and discounts on your event bookings.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="mt-8"
                            variants={itemVariants}
                        >
                            <Link to={'/events'}>
                                <button className="ezy-button-primary w-fit py-3 text-lg font-semibold hover:scale-105 transition-transform">
                                    Book Your Event Ticket Now
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default EventSection;