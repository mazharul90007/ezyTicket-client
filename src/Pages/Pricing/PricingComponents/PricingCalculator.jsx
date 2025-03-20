import React, { useState } from "react";
import { toast } from "react-toastify";

const PricingCalculator = () => {
    const [ticketPrice, setTicketPrice] = useState("");
    const [numberOfTickets, setNumberOfTickets] = useState("");
    const [totalAmount, setTotalAmount] = useState(null);
    const [fee, setFee] = useState(null);
    const [receiveAmount, setReceiveAmount] = useState(null);

    const handleCalculate = () => {
        const price = parseFloat(ticketPrice);
        const tickets = parseInt(numberOfTickets);

        if (isNaN(price)) {
            toast.error("Please enter a valid ticket price.");
            return;
        }

        if (isNaN(tickets)) {
            toast.error("Please enter a valid number of tickets.");
            return;
        }

        const total = price * tickets;
        setTotalAmount(total)
        const fee = total * 0.05; // 5% fee
        setFee(fee);
        const finalAmount = total - fee;

        setReceiveAmount(finalAmount.toFixed(2)); // Round to 2 decimal places
    };

    return (
        <div className="bg-background">
            <div className="py-8 w-11/12 mx-auto">
                <div className="md:w-9/12 mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-main">
                        Calculate your EzyTicket fees
                    </h2>
                    <p className="text-xl text-gray-500 text-center">
                        Plan and host in-person or virtual events effortlessly. With our powerful platform, you can create unforgettable experiences for your attendees while keeping everything simple and streamlined.
                    </p>
                </div>

                {/* Price Calculation */}
                <div className="mt-10 p-6 rounded-lg">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Ticket Price Input */}
                        <div className="md:col-span-1 bg-white p-4 md:p-8 rounded-lg  space-y-4">
                            <div className="flex items-center gap-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Ticket Price (BDT)
                                    </label>
                                    <input
                                        type="number"
                                        value={ticketPrice}
                                        onChange={(e) => setTicketPrice(e.target.value)}
                                        className="w-full md:w-fit p-2 md:p-4 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-supporting"
                                        placeholder="Enter ticket price"
                                    />
                                </div>

                                {/* Number of Tickets Input */}
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Number of Tickets
                                    </label>
                                    <input
                                        type="number"
                                        value={numberOfTickets}
                                        onChange={(e) => setNumberOfTickets(e.target.value)}
                                        className="w-full md:w-fit p-2 md:p-4 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-supporting"
                                        placeholder="Enter number of tickets"
                                    />
                                </div>
                            </div>

                            {/* Calculate Button */}
                            <button
                                onClick={handleCalculate}
                                className="py-2 md:py-3 px-4 md:px-6 bg-supporting flex items-center justify-center md:justify-start rounded-lg shadow-md hover:scale-95 transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0"
                            >
                                Calculate
                            </button>
                        </div>

                        <div className="md:col-span-1 bg-white p-4 md:p-8 rounded-lg">
                            {/* Display Result */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border border-gray-300 rounded shadow p-4 md:p-8 text-center space-y-2">
                                        <p>Total Amount</p>
                                        <h2 className="text-4xl font-bold">৳{totalAmount || "0"}</h2>
                                    </div>

                                    <div className="border border-gray-300 rounded shadow p-4 md:p-8 text-center space-y-2">
                                        <p>Our Charge (5%)</p>
                                        <h2 className="text-4xl font-bold">৳{fee || "0"}</h2>
                                    </div>

                                    <div className="border border-gray-300 rounded shadow p-4 col-span-2 md:p-8 text-center space-y-2">
                                        <p>After deducting a 5% fee, you will receive</p>
                                        <h2 className="text-4xl font-bold text-main">৳{receiveAmount || "0"}</h2>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCalculator;