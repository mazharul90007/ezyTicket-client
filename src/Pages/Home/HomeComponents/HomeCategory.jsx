// import { motion } from "framer-motion";
import { LuPopcorn } from "react-icons/lu";
import { FaBus } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import bus from "../../../assets/Home_image/bus.webp"
import dance from "../../../assets/Home_image/dance.webp"
import movie from "../../../assets/Home_image/movie.webp"
import { motion } from "framer-motion";
import Heading from "../../../components/Heading";
import { Link } from "react-router-dom";

const HomeCategory = () => {

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
        <div className="w-11/12 mx-auto mb-8 md:mb-16 lg:mb-20 pt-72 md:pt-30 lg:pt-30">
            <section className="text-center">
                <Heading
                    subtitle={'EzyTicket'}
                    title={'Book Tickets Easily with EzyTicket'}
                    extend={'Anytime, Anywhere'}
                >
                </Heading>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8"
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
                        <figure className="overflow-hidden h-[300px] md:h-[220px] lg:h-[400px] rounded-t-[150px] my-8">
                            <img
                                src={bus}
                                alt="Travel"
                                className="rounded-b-none w-full h-full object-cover hover:scale-110 transition-all transform duration-300"
                            />
                        </figure>
                        <div className="mt-4">
                            <Link to={'/travel'}>
                                <button className="uppercase cursor-pointer  ">Learn More</button>
                            </Link>
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
                        <figure className="overflow-hidden h-[300px] md:h-[220px] lg:h-[400px] rounded-tl-[120px] lg:rounded-tl-[150px] rounded-br-[120px] lg:rounded-br-[150px] my-8">
                            <img
                                src={dance}
                                alt="Event"
                                className="rounded-b-none w-full h-full object-cover hover:scale-110 transition-all transform duration-300"
                            />
                        </figure>
                        <div className="mt-4">
                            <Link to={'/events'}>
                                <button className="uppercase cursor-pointer">Learn More</button>
                            </Link>
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
                        <figure className="overflow-hidden h-[300px] md:h-[220px] lg:h-[400px] rounded-[80px] lg:rounded-[150px] my-8">
                            <img
                                src={movie}
                                alt="Movies"
                                className="rounded-b-none w-full h-full object-cover hover:scale-110 transition-all transform duration-300"
                            />
                        </figure>
                        <div className="mt-4">
                            <Link to={'/entertainment'}>
                                <button className="uppercase cursor-pointer">Learn More</button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default HomeCategory;