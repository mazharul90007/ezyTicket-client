import coach from "../../../assets/Home_image/coach.png";
import { FaPlane, FaTag, FaMapMarkerAlt, FaRegSmile, FaBus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const TravelSection = () => {
    const { darkMode } = useAuth();
    const [isMobile, setIsMobile] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [inView]);

    return (
        <section id="travelSection" className="mb-16" ref={ref}>
            <div className="w-11/12 mx-auto px-4">
                {/* Animated Coach Image */}
                <div className="mb-12 flex justify-center">
                    <motion.img
                        src={coach}
                        alt="Luxury travel coach"
                        className="w-full max-w-4xl rounded-xl"
                        initial={{ 
                            x: isMobile ? 0 : 300, // No horizontal movement on mobile
                            scale: isMobile ? 0.9 : 0.5, // Less scaling on mobile
                            opacity: 0 
                        }}
                        animate={animate ? { 
                            x: 0, 
                            scale: 1, 
                            opacity: 1 
                        } : { 
                            x: isMobile ? 0 : 300,
                            scale: isMobile ? 0.9 : 0.5,
                            opacity: 0 
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>

                {/* Text + Features */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                    {/* Left - Text */}
                    <div className="lg:w-1/2">
                        <h2 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}>
                            Make your Journey <br /> Hassle Free
                        </h2>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start gap-3 md:gap-4">
                                <FaBus className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Hassle-free Bus Ticket Booking
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Our seamless booking process ensures you get the best buses without any complications.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <FaTag className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Great Deals With Reasonable Rates
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        We bring you exclusive discounts you won't find elsewhere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:w-1/2 p-4 md:p-6 rounded-xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-main mb-4 md:mb-6">
                            Great Deals And Offers
                        </h3>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start gap-3 md:gap-4">
                                <FaMapMarkerAlt className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>
                                        Top Destinations
                                    </h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Reasonable rates to top Bus Services countrywide.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <FaRegSmile className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>
                                        Satisfaction Guaranteed
                                    </h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        24/7 customer support and flexible cancellation policies.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <FaTag className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>
                                        Exclusive Discounts
                                    </h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Special member-only deals and last-minute offers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-8">
                            <Link to={"/travel"}>
                                <button className="ezy-button-primary w-full md:w-fit py-2 md:py-3 text-base md:text-lg font-semibold">
                                    Book Your Journey
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelSection;