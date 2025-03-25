import React, { useState } from "react";
import SelectPlaceTime from "./SelectPlaceTime";
import Heading from "../../../components/Heading";
import { useLocation } from "react-router-dom";

const TravelSelectSet = () => {

    const [selectedSeats, setSelectedSeats] = useState([]);
    const location = useLocation()
    const seatPrice = 500;
  
    const handleSeatSelect = (seat) => {
      setSelectedSeats((prevSeats) => {
        if (prevSeats.includes(seat)) {
          return prevSeats.filter((s) => s !== seat);
        }
        return [...prevSeats, seat];
      });
    };
     console.log(location.pathname)


    return (
        <section className="container mx-auto my-20 px-5 ">
            <div className={`${location.pathname === "/travel/bus-set" ? "hidden":"my-10"} `}>
                <Heading 
                title="Your Ultimate Travel Companion"
                subtitle="Discover and book your next adventure effortlessly with ExploreEase! From flights to hotels and exciting experiences, we make travel planning simple, fast, and convenient. Start exploring today!"
                ></Heading>
            </div>
            <div className={`${location.pathname === "/travel/bus-set" ? "hidden":"my-10"} mb-10`}>
                <SelectPlaceTime/>
            </div>
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                {/* Seat Selection Grid */}
                <div className="bg-white p-6 rounded-lg shadow-2xl col-span-2 shadow-main">
                    <h2 className="text-lg font-semibold mb-4">Select Your Seat</h2>
                    {/* Legend */}
                    <div className="flex items-center justify-between space-x-4 mb-6">
                        <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 bg-gray-200 rounded"></span>
                            <span>Available</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 bg-main rounded"></span>
                            <span>Selected</span>
                        </div>
                    </div>

                    {/* Seat Grid */}
                    <div className="grid grid-cols-6 gap-4">
                        {[..."ABCDEFGHIJ"].map((row, idx) => (
                            <React.Fragment key={idx}>
                                <p key={idx} className="flex text-center items-center justify-center">{row}</p>
                                {[1, 2, null, 3, 4].map((num, index) => (
                                    num ? (
                                        <button
                                            key={`${row}${num}`}
                                            onClick={() => handleSeatSelect(`${row}${num}`)}
                                            className={`btn rounded ${selectedSeats.includes(`${row}${num}`)
                                                    ? "bg-main"
                                                    : "bg-gray-200 hover:bg-main"
                                                }`}
                                        >
                                            {row}{num}
                                        </button>
                                    ) : (
                                        <p key={`${row}-empty-${index}`}></p>
                                    )
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Seat Details and Form */}
                <div className="bg-white p-6 rounded-lg  col-span-1 shadow-2xl  shadow-main">
                    <h2 className="text-lg font-semibold mb-4">Selected Your Seat</h2>
                    <div className="mb-6 bg-gray-100 p-8">
                        <div className="flex justify-between py-2 font-semibold">
                            <div>
                                <span>Seat</span>
                                <span className="p-1 bg-main text-white rounded-md ml-2">
                                    {selectedSeats.length}
                                </span>
                            </div>
                            <span>Price</span>
                        </div>
                        <div className="mb-6 border-t-2 border-dashed">
                            {selectedSeats.map((seat) => (
                                <div key={seat} className="flex justify-between py-2">
                                    <span>{seat}</span>
                                    <span>BDT {seatPrice}</span>
                                </div>
                            ))}
                        </div>
                        {/* Total Price */}
                        <div className="flex justify-between border-t-2 pt-4 mt-4">
                            <span>Total Price</span>
                            <p>
                                <span>BDT </span>
                                <span>{selectedSeats.length * seatPrice}</span>
                            </p>
                        </div>
                    </div>
                    {/* Form */}
                    <form className="mt-6">
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Passenger Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Email ID</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                                placeholder="Enter your email"
                            />
                        </div>
                    </form>
                    {/* Booking Button */}
                    <button className="w-full bg-main text-white py-2 rounded-lg font-semibold">
                        Next
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TravelSelectSet