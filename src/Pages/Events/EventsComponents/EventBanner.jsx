import React from 'react';
import { FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';
import { IoTicketSharp } from "react-icons/io5";


const EventBanner = () => {
    return (
        <div className="bg-gradient-to-r from-green-300 to-green-500  py-16 px-8 text-white text-center relative overflow-hidden h-[1200px] md:h-[800px] lg:h-[680px] xl:h-[600px] flex justify-center items-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
 
            {/* Content */}
            <div className="relative z-10 ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Book Your Next Event with Ease!
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Find, book, and manage events effortlessly.
                </p>
                <button className="py-2 px-4 bg-supporting flex items-center rounded">
                    <FaTicketAlt className="mr-2" /> Get Started
                </button>
            </div>

            {/* Icons for Decoration */}
            <IoTicketSharp className="absolute top-10 left-10 text-white opacity-20 w-32 h-32" />
            <IoTicketSharp className="absolute bottom-10 right-10 text-white opacity-20 w-32 h-32" />
        </div>
    );
};

export default EventBanner;