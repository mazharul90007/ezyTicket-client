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
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [inView]);
    return (
        <section id="entertainmentSection" className="mb-16" ref={ref}>
            <div className="w-11/12 mx-auto px-4">
                {/* Animated Image */}
                <div className="mb-12 flex justify-center w-full h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={animate ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="w-full h-full"
                    >
                        <img
                            src={cinema}
                            alt="Tanoura Dance"
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </motion.div>
                </div>



                {/* Text + Features */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left - Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className={`text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}>
                            Book Your Seat & <br /> Enjoy The Show
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaFilm className="text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-2`}>
                                        Latest Blockbusters & Classics
                                    </h3>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        From Hollywood hits to indie gems, we've got all the movies you love in one place.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaTicketAlt className="text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-2`}>
                                        Instant Ticket Booking
                                    </h3>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        Secure your seats in seconds with our lightning-fast booking system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:w-1/2 p-8 rounded-xl">
                        <h3 className="text-3xl font-bold text-main mb-6">
                            Why Movie Lovers Choose Us
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaCalendarAlt className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Showtimes For All Schedules</h4>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        Morning matinees, evening shows, or late-night screenings - we've got you covered.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaChair className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Best Seat Selection</h4>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        Choose your perfect spot with our interactive seat maps.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <LuPopcorn className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Combo Deals</h4>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        Special discounts on ticket+popcorn combos and other snacks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link to={'/entertainment'}>
                                <button className="ezy-button-primary w-fit py-3 text-lg font-semibold flex items-center gap-2">
                                    <FaTicketAlt /> Book Movie Tickets Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EntertainmentSection;