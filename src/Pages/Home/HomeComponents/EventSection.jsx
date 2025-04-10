import EventCard from "./EventCard";
import { MdDateRange } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import tanoura from "../../../assets/Home_image/tanoura.jpg"
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FaBus, FaCalendarAlt, FaHeadphonesAlt, FaMapMarkerAlt, FaRegSmile, FaStar, FaTag, FaTicketAlt } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const EventSection = () => {
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
        <section id="eventSection" className="mb-16" ref={ref}>
            <div className="w-11/12 mx-auto px-4">
                {/* Animated Image */}
                <div className="mb-12 flex justify-center w-full h-[400px] md:h-[500px] lg:h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={animate ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="w-full h-full"
                    >
                        <img
                            src={tanoura}
                            alt="Tanoura Dance"
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </motion.div>
                </div>



                {/* Text + Features */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left - Text */}
                    <div className="lg:w-1/2">
                        <h2 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}>
                            Get Your Event Tickets <br /> With EzyTicket
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaTicketAlt className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Book Event Tickets Quickly and Easily
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Whether it’s concerts, theater, or festivals, we make it easy to book your event tickets online.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaStar className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Exclusive Offers for Events
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        We offer exclusive discounts and unbeatable prices on the best events in town.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:w-1/2 rounded-xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-main mb-4 md:mb-6">
                            Why Choose EzyTicket for Your Events?
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaCalendarAlt className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Top Events & Shows</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Choose from a wide variety of events, from live concerts to theater performances.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaHeadphonesAlt className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Seamless Booking Experience</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        With just a few clicks, secure your tickets and enjoy a seamless experience.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaTag className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Exclusive Discounts</h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Enjoy amazing deals and discounts on your event bookings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link to={'/events'}>
                                <button className="ezy-button-primary w-fit py-3 text-lg font-semibold">
                                    Book Your Event Ticket Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    );
};

export default EventSection;
