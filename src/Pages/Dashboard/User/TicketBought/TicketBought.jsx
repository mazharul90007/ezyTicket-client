import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from './../../../../Hooks/useAuth';


const TicketBought = () => {
  const { user } = useAuth(); // assuming you get the logged in user's email here
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`/order?email=${user.email}`)
        .then((res) => {
          if (Array.isArray(res.data)) {
            setTickets(res.data);
          } else {
            setTickets([]);
            console.warn("Expected array but got:", res.data);
          }
        })
        .catch((err) => console.error("Failed to fetch orders:", err))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  if (loading) return <div>Loading tickets...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Purchased Tickets</h2>
      {tickets.length === 0 ? (
        <p>No paid tickets found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Movie</th>
                <th className="px-4 py-2">Seats</th>
                <th className="px-4 py-2">Cineplex</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket._id} className="text-center border-t">
                  <td className="px-4 py-2">{ticket.order.movieName}</td>
                  <td className="px-4 py-2">{ticket.order.selectedSeats.join(', ')}</td>
                  <td className="px-4 py-2">{ticket.order.cineplex}</td>
                  <td className="px-4 py-2">{new Date(ticket.order.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{ticket.order.time}</td>
                  <td className="px-4 py-2">৳{ticket.order.price}</td>
                  <td className="px-4 py-2">{ticket.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TicketBought;
