import React from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';

const SoldTickets = () => {
  const soldTickets = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      event: 'Tech Conference 2025',
      quantity: 2,
      price: 500,
      date: '2025-04-10',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      event: 'Startup Meetup Dhaka',
      quantity: 1,
      price: 300,
      date: '2025-04-09',
    },
    {
      id: 3,
      name: 'Ali Khan',
      email: 'ali@example.com',
      event: 'Marathon 5K Run',
      quantity: 3,
      price: 900,
      date: '2025-04-08',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 bg-gradient-to-br from-[#e1fff1] via-[#ffffff] to-[#c7ffe4] min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#004e39]">Tickets Sold</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Overview of all tickets purchased for various events through our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {soldTickets.map((ticket) => (
          <div key={ticket.id} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-[#004e39] mb-2">{ticket.event}</h3>
            <div className="text-gray-700 space-y-2">
              <p className="flex items-center gap-2"><FaUser /> <span>{ticket.name}</span></p>
              <p className="flex items-center gap-2"><FaEnvelope /> <span>{ticket.email}</span></p>
              <p className="flex items-center gap-2"><FaTicketAlt /> <span>{ticket.quantity} Tickets</span></p>
              <p className="flex items-center gap-2"><span className="font-semibold">Total:</span> ${ticket.price}</p>
              <p className="flex items-center gap-2"><FaCalendarAlt /> <span>{ticket.date}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoldTickets;
