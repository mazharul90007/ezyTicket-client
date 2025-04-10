import useAuth from "../../../Hooks/useAuth";
import { LuPopcorn } from "react-icons/lu";
import { FaBus } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { Link } from "react-router-dom";

const HomeCategory = () => {
    const { darkMode } = useAuth()
    return (
        <div className="py-16">
            <div className="w-11/12 mx-auto">
                <p className={`text-center text-xl md:text-2xl font-semibold mb-2 md:mb-1 ${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>
                    One Platform, Endless Possibilities – The Best Ticketing System Online.
                </p>
                <h2 className="text-2xl md:text-4xl text-main font-bold text-center">EzyTicket <span className={` ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>Your One-Stop Solution for Hassle-Free Ticketing</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 py-8">
                    {/* Bus */}
                    <a href="busSection">
                        <div className={`md:col-span-1 shadow p-8 ${darkMode ? 'bg-dark-surface hover:bg-[#3D3D3D]' : 'bg-white'} rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300`}>
                            <div className="mb-4 text-7xl text-dark-accent font-bold">
                                <FaBus />
                            </div>

                            <h3 className={`text-2xl font-semibold ${darkMode && 'text-dark-primary'}`}><span className={`${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>Bus </span>Ticket</h3>

                            <p className={`text-lg ${darkMode && 'text-dark-secondary'}`}>Your journey starts here! Book bus tickets effortlessly on EzyTicket. </p>
                        </div>
                    </a>

                    {/* Event */}
                    <div className={`md:col-span-1 shadow p-8 ${darkMode ? 'bg-dark-surface hover:bg-[#3D3D3D]' : 'bg-white'} rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300`}>
                        <div className="mb-4 text-7xl text-dark-accent font-bold">
                            <GiMicrophone />
                        </div>

                        <h3 className={`text-2xl font-semibold ${darkMode && 'text-dark-primary'}`}><span className={`${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>Events </span>Ticket</h3>

                        <p className={`text-lg ${darkMode && 'text-dark-secondary'}`}>Experience the thrill! Event tickets just a click away on EzyTicket. </p>
                    </div>

                    {/* Entertainment */}
                    <div className={`md:col-span-1 shadow p-8 ${darkMode ? 'bg-dark-surface hover:bg-[#3D3D3D]' : 'bg-white'} rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300`}>
                        <div className="mb-4 text-7xl text-dark-accent font-bold">
                            <LuPopcorn />
                        </div>

                        <h3 className={`text-2xl font-semibold ${darkMode && 'text-dark-primary'}`}><span className={`${darkMode ? 'text-dark-supporting' : 'text-supporting'}`}>Entertainmet </span>Ticket</h3>

                        <p className={`text-lg ${darkMode && 'text-dark-secondary'}`}>Lights, camera, action! Book entertainment tickets in seconds. </p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default HomeCategory;