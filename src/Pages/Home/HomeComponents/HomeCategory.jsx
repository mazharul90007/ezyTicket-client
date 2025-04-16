import { motion } from "framer-motion";
import { LuPopcorn } from "react-icons/lu";
import { FaBus } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";

const HomeCategory = ({ scrollToSection }) => {
    const { darkMode } = useAuth();

    // Animation configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring", 
                stiffness: 100,
                damping: 20,
                duration: 0.8 
            }
        }
    };


    // Card data
    const cards = [
        {
            id: 1,
            icon: <FaBus />,
            title: "Bus",
            description: "Your journey starts here! Book bus tickets effortlessly on EzyTicket.",
            sectionId: "travelSection"
        },
        {
            id: 2,
            icon: <GiMicrophone />,
            title: "Events",
            description: "Experience the thrill! Event tickets just a click away on EzyTicket.",
            sectionId: "eventSection"
        },
        {
            id: 3,
            icon: <LuPopcorn />,
            title: "Entertainment",
            description: "Lights, camera, action! Book entertainment tickets in seconds.",
            sectionId: "entertainmentSection"
        }
    ];

    // Dynamic classes
    const textClasses = {
        supporting: darkMode ? 'text-dark-supporting' : 'text-supporting',
        primary: darkMode ? 'text-dark-primary' : 'text-gray-800',
        secondary: darkMode ? 'text-dark-secondary' : 'text-gray-600'
    };

    const cardClasses = `md:col-span-1 shadow p-8 ${darkMode ? 'bg-dark-surface hover:bg-[#3D3D3D]' : 'bg-white'
        } rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300`;

    return (
        <div className="py-16">
            <div className="w-11/12 mx-auto">
                <p className={`uppercase text-center text-xl font-semibold mb-2 md:mb-1 text-main`}>
                    One Platform, Endless Possibilities
                </p>
                <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl text-main font-bold text-center">
                    EzyTicket <span className={darkMode ? 'text-dark-primary' : 'text-gray-700'}>Your One-Stop Solution <br /> for Hassle-Free Ticketing</span>
                </h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 py-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, margin: "0px 0px -100px 0px" }}
                    variants={containerVariants}
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            className={cardClasses}
                            variants={cardVariants}
                            onClick={() => scrollToSection(card.sectionId)}
                        >
                            <div className="mb-4 text-7xl text-dark-accent font-bold">
                                {card.icon}
                            </div>
                            <h3 className={`text-2xl font-semibold ${textClasses.primary}`}>
                                <span className={textClasses.supporting}>{card.title} </span>Ticket
                            </h3>
                            <p className={`text-lg ${textClasses.secondary}`}>
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HomeCategory;