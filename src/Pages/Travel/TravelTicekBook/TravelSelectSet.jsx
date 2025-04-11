import React, { useState } from "react";
import { useLocation} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const TravelSelectSet = () => {
    const {user} = useAuth()
    const [selectedSeats, setSelectedSeats] = useState([]);
    const location = useLocation()
    const seatPrice = location?.state?.ticketPrice;

    const handleSeatSelect = (seat) => {
        setSelectedSeats((prevSeats) => {
            if (prevSeats.includes(seat)) {
                return prevSeats.filter((s) => s !== seat);
            }
            return [...prevSeats, seat];
        });
    };

    // console.log(selectedSeats)


    const handleTravelInfo = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const totalPrices = selectedSeats.length * seatPrice;
        const passengerData = {name,email,number,selectedSeats,address, totalPrices, seatPrice}
        // console.log(passengerData)

        Swal.fire({
            title: "Ticket Book Successfully",
            icon: "success",
            draggable: true
          });

        console.log("hello", passengerData)
    }


    return (
        <section className="container mx-auto my-20 px-5 ">
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
                                        disabled={
                                            selectedSeats.length >= 4 && !selectedSeats.includes(`${row}${num}`)
                                          }
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
                    <form onSubmit={handleTravelInfo} className="mt-6">
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Passenger Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Phone Number</label>
                            <input
                                type="tel"
                                name="number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Email ID</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        {/* Booking Button */}
                        <input type="submit" value={"Checkout"} disabled={selectedSeats.length <1} className="w-full bg-main btn  py-2 rounded-lg font-semibold" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TravelSelectSet