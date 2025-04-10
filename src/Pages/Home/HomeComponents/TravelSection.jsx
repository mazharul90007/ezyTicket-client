import coach from "../../../assets/Home_image/coach3.png";
import { FaPlane, FaTag, FaMapMarkerAlt, FaRegSmile, FaBus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const TravelSection = () => {
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
        <section id="travelSection" className="mb-16" ref={ref}>
            <div className="w-11/12 mx-auto px-4">
                {/* Animated Coach Image */}
                <div className="mb-12 flex justify-center">
                    <motion.img
                        src={coach}
                        alt="Luxury travel coach"
                        className="w-full max-w-4xl rounded-xl"
                        initial={{ x: 300, scale: 0.5, opacity: 0 }}
                        animate={animate ? { x: 0, scale: 1, opacity: 1 } : { x: 300, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />

                </div>

                {/* Text + Features */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left - Text */}
                    <div className="lg:w-1/2">
                        <h2 className={`text-5xl font-bold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-6`}>
                            Make your Journey <br /> Hassle Free
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaBus className="text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-2`}>
                                        Experience The Most Hassle-free Bus Ticket Booking
                                    </h3>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        Our seamless booking process ensures you get the best buses without any complications.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaTag className="text-2xl text-main mt-1" />
                                <div>
                                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-700'} mb-2`}>
                                        Get Great Deals With Reasonable Rates
                                    </h3>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        We bring you exclusive discounts you won't find elsewhere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:w-1/2 rounded-xl">
                        <h3 className="text-3xl font-bold text-main mb-6">
                            Great Deals And Great Offers
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Top Destinations</h4>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        With reasonable rates to top Bus Services and destinations Countrywide.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaRegSmile className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Satisfaction Guaranteed</h4>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        24/7 customer support and flexible cancellation policies.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaTag className="text-2xl text-main mt-1" />
                                <div>
                                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Exclusive Discounts</h4>
                                    <p className={darkMode ? 'text-dark-secondary' : 'text-gray-600'}>
                                        Special member-only deals and last-minute offers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <Link to={"/travel"}>
                                <button className="ezy-button-primary mt-8 w-fit py-3 text-lg font-semibold">
                                    Book Your Journey Now
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
