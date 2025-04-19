// import { motion } from "framer-motion";
import { LuPopcorn } from "react-icons/lu";
import { FaBus } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";
import bus from "../../../assets/Home_image/bus.webp"
import dance from "../../../assets/Home_image/dance.webp"
import movie from "../../../assets/Home_image/movie.webp"
import { motion } from "framer-motion";

const HomeCategory = ({ scrollToSection }) => {
    const { darkMode } = useAuth();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
            }
        }
    };

    return (
        <div className="w-11/12 mx-auto mb-8 md:mb-16 lg:mb-20">
            <section className="text-center">
                <p className={`tracking-widest uppercase mb-2 ${darkMode ? 'text-dark-secondary' : 'text-gray-500'}`}>EzyTicket</p>
                <h2 className={`uppercase text-3xl md:text-5xl font-bold mb-12 tracking-wide leading-[1.1] ${darkMode ? 'text-dark-primary' : 'text-gray-700'}`}>
                    Book Tickets Easily with EzyTicket <br /> Anytime, Anywhere
                </h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                    {/* Travel */}
                    <motion.div
                        className="bg-[#677115] p-6 shadow-md px-12 text-white font-light rounded-md"
                        variants={item}
                    >
                        <div>
                            <h3 className="uppercase text-3xl mb-2">Plan Your Travel</h3>
                            <p className="">Book bus tickets quickly and easily.</p>
                        </div>
                        <figure className="overflow-hidden h-[400px] rounded-t-[150px] my-8">
                            <img
                                src={bus}
                                alt="Travel"
                                className="rounded-b-none w-full h-full object-cover hover:scale-110 transition-all transform duration-300"
                            />
                        </figure>
                        <div className="mt-4">
                            <button className="uppercase cursor-pointer  ">Learn More</button>
                        </div>
                    </motion.div>

                    {/* Events */}
                    <motion.div
                        className="bg-[#D0AE72] p-6 shadow-md px-12 text-white font-light rounded-md"
                        variants={item}
                    >
                        <div>
                            <h3 className="uppercase text-3xl mb-2">Explore Events</h3>
                            <p className="">Browse and book tickets for exciting events.</p>
                        </div>
                        <figure className="overflow-hidden h-[400px] rounded-tl-[150px] rounded-br-[150px] my-8">
                            <img
                                src={dance}
                                alt="Event"
                                className="rounded-b-none w-full h-full object-cover hover:scale-110 transition-all transform duration-300"
                            />
                        </figure>
                        <div className="mt-4">
                            <button className="uppercase cursor-pointer">Learn More</button>
                        </div>
                    </motion.div>

                    {/* Movies */}
                    <motion.div
                        className="bg-[#C68D6E] p-6 shadow-md px-12 text-white font-light rounded-md"
                        variants={item}
                    >
                        <div>
                            <h3 className="uppercase text-3xl mb-2">Enjoy Movies</h3>
                            <p className="">Get your movie tickets in a minute.</p>
                        </div>
                        <figure className="overflow-hidden h-[400px] rounded-[150px] my-8">
                            <img
                                src={movie}
                                alt="Movies"
                                className="rounded-b-none w-full h-full object-cover hover:scale-110 transition-all transform duration-300"
                            />
                        </figure>
                        <div className="mt-4">
                            <button className="uppercase cursor-pointer">Learn More</button>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default HomeCategory;