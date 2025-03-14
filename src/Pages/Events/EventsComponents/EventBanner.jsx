import React from 'react';
import { FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';

const EventBanner = () => {
    return (
        <div className="bg-gradient-to-r from-green-200 to-green-600 py-16 px-8 text-white text-center relative overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
 
            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Book Your Next Event with Ease!
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Find, book, and manage events effortlessly.
                </p>
                <button className="btn btn-primary btn-lg">
                    <FaTicketAlt className="mr-2" /> Get Started
                </button>
            </div>

            {/* Icons for Decoration */}
            <FaCalendarAlt className="absolute top-4 left-4 text-white opacity-20 w-16 h-16" />
            <FaCalendarAlt className="absolute bottom-4 right-4 text-white opacity-20 w-16 h-16" />
        </div>
    );
};

export default EventBanner;