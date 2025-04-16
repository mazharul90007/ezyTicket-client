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
        triggerOnce: true, // This ensures animation only happens once
        threshold: 0.3,
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const imageVariants = {
        hidden: {
            x: isMobile ? 0 : 300,
            scale: isMobile ? 0.9 : 0.5,
            opacity: 0
        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <section id="travelSection" className="mb-16" ref={ref}>
            <div className="w-11/12 mx-auto px-4">
                {/* Animated Coach Image */}
                <motion.div
                    className="mb-12 flex justify-center"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.img
                        src={coach}
                        alt="Luxury travel coach"
                        className="w-full max-w-4xl rounded-xl"
                        variants={imageVariants}
                    />
                </motion.div>

                {/* Text + Features */}
                <motion.div
                    className="flex flex-col lg:flex-row gap-8 md:gap-12"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Left - Text */}
                    <motion.div
                        className="lg:w-1/2"
                        variants={containerVariants}
                    >
                        <motion.h2
                            className={`uppercase text-3xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}
                            variants={itemVariants}
                        >
                            Make your Journey <br /> Hassle Free
                        </motion.h2>

                        <motion.div
                            className="space-y-4 md:space-y-6"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="flex items-start gap-3 md:gap-4"
                                variants={itemVariants}
                            >
                                <FaBus className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Hassle-free Bus Ticket Booking
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Our seamless booking process ensures you get the best buses without any complications.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-3 md:gap-4"
                                variants={itemVariants}
                            >
                                <FaTag className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-1 md:mb-2`}>
                                        Great Deals With Reasonable Rates
                                    </h3>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        We bring you exclusive discounts you won't find elsewhere.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Features */}
                    <motion.div
                        className="lg:w-1/2 p-4 md:p-6 rounded-xl"
                        variants={containerVariants}
                    >
                        <motion.h3
                            className="text-2xl md:text-3xl font-bold text-main mb-4 md:mb-6"
                            variants={itemVariants}
                        >
                            Great Deals And Offers
                        </motion.h3>

                        <motion.div
                            className="space-y-4 md:space-y-6"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="flex items-start gap-3 md:gap-4"
                                variants={itemVariants}
                            >
                                <FaMapMarkerAlt className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>
                                        Top Destinations
                                    </h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Reasonable rates to top Bus Services countrywide.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-3 md:gap-4"
                                variants={itemVariants}
                            >
                                <FaRegSmile className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>
                                        Satisfaction Guaranteed
                                    </h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        24/7 customer support and flexible cancellation policies.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-3 md:gap-4"
                                variants={itemVariants}
                            >
                                <FaTag className="text-xl md:text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>
                                        Exclusive Discounts
                                    </h4>
                                    <p className={`text-sm md:text-base ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
                                        Special member-only deals and last-minute offers.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="mt-6 md:mt-8"
                            variants={itemVariants}
                        >
                            <Link to={"/travel"}>
                                <button className="ezy-button-primary w-full md:w-fit py-2 md:py-3 text-base md:text-lg font-semibold">
                                    Book Your Journey
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TravelSection;