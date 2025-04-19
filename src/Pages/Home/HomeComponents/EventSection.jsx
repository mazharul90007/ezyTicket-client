import { motion } from "framer-motion";
import { FaCalendarAlt, FaHeadphonesAlt, FaStar, FaTag, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
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

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative">
            {/* --- Scrollable Content --- */}
            <div className={`relative z-10 ${darkMode ? 'bg-dark-bg' : 'bg-white'}`}>

                {/* Content Container */}
                <div className="w-11/12 mx-auto px-4">
                    <motion.div
                        className="flex flex-col lg:flex-row gap-12 py-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        variants={container}
                    >
                        {/* Left - Text */}
                        <motion.div className="lg:w-1/2" variants={container}>
                            <motion.h2
                                className={`uppercase text-3xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}
                                variants={itemVariants}
                            >
                                Get Your Event Tickets <br /> With EzyTicket
                            </motion.h2>

                            <motion.div className="space-y-6" variants={container}>
                                <motion.div className="flex items-start gap-4" variants={itemVariants}>
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

                                <motion.div className="flex items-start gap-4" variants={itemVariants}>
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
                        <motion.div className="lg:w-1/2" variants={container}>
                            <motion.h3
                                className="text-2xl md:text-3xl font-bold text-main mb-4 md:mb-6"
                                variants={itemVariants}
                            >
                                Why Choose EzyTicket for Your Events?
                            </motion.h3>

                            <motion.div className="space-y-6" variants={container}>
                                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                                    <FaCalendarAlt className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Top Events & Shows</h4>
                                        <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                            Choose from a wide variety of events, from live concerts to theater performances.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                                    <FaHeadphonesAlt className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Seamless Booking Experience</h4>
                                        <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                            With just a few clicks, secure your tickets and enjoy a seamless experience.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                                    <FaTag className="text-xl md:text-2xl text-main mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Exclusive Discounts</h4>
                                        <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                            Enjoy amazing deals and discounts on your event bookings.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div className="mt-8" variants={itemVariants}>
                                <Link to={'/events'}>
                                    <button className={`py-3 px-6 rounded-lg text-lg font-semibold transition-transform ${darkMode ? 'bg-dark-primary text-white hover:bg-dark-secondary' : 'bg-main text-white hover:bg-main-dark'} hover:scale-105`}>
                                        Book Your Event Ticket Now
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EventSection;