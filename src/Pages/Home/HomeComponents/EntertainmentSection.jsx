import EventCard from "./EventCard";
import { MdDateRange } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
import cinema from "../../../assets/Home_image/banner-cineplex.jpg"
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FaBus, FaCalendarAlt, FaChair, FaFilm, FaHeadphonesAlt, FaMapMarkerAlt, FaRegSmile, FaStar, FaTag, FaTicketAlt } from "react-icons/fa";
import { LuPopcorn } from "react-icons/lu";
import useAuth from "../../../Hooks/useAuth";

const EntertainmentSection = () => {
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
                duration: 0.6,
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
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };
    return (
        <motion.section
            id="entertainmentSection"
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
                        src={cinema}
                        alt="Tanoura Dance"
                        className="object-cover w-full h-full rounded"
                    />
                </motion.div>

                {/* Text + Features */}
                <motion.div
                    className="flex flex-col lg:flex-row gap-12"
                    variants={container}
                >
                    {/* Left - Text Content */}
                    <motion.div
                        className="lg:w-1/2"
                        variants={container}
                    >
                        <motion.h2
                            className={`uppercase text-3xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}
                            variants={itemVariants}
                        >
                            Book Your Seat & <br /> Enjoy The Show
                        </motion.h2>

                        <motion.div className="space-y-6"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaFilm className="text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Latest Blockbusters & Classics
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        From Hollywood hits to indie gems, we've got all the movies you love in one place.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaTicketAlt className="text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Instant Ticket Booking
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Secure your seats in seconds with our lightning-fast booking system.
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
                            Why Movie Lovers Choose Us
                        </motion.h3>

                        <motion.div
                            className="space-y-6"
                            variants={container}
                        >
                            <motion.div
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaCalendarAlt className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Showtimes For All Schedules</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Morning matinees, evening shows, or late-night screenings - we've got you covered.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <FaChair className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Best Seat Selection</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Choose your perfect spot with our interactive seat maps.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <LuPopcorn className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Combo Deals</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Special discounts on ticket+popcorn combos and other snacks.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="mt-8"
                            variants={itemVariants}
                        >
                            <Link to={'/entertainment'}>
                                <button className="ezy-button-primary w-fit py-3 text-lg font-semibold flex items-center gap-2">
                                    <FaTicketAlt /> Book Movie Tickets Now
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default EntertainmentSection;