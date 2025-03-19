import React, { useState } from 'react';
import { FaBus, FaPlane, FaCalendarAlt, FaSchool, FaMapMarkedAlt } from 'react-icons/fa';
import travelBannerImage from "../../../assets/Travel_image/travel-service/bg-bus.jpg"
const BusReservationPage = () => {
  

  const [serviceType, setServiceType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ serviceType, name, email, phone, date, message });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative hero min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${travelBannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 "></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">Book Your Bus Easily</h1>
          <p className="mt-2">Fast, Secure & Hassle-Free Bus Reservations</p>
        </div>
      </div>

      {/* Reservation Form Section */}
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Bus Reservation Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Service Type</label>
            <div className="mt-1 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setServiceType('Airport Transfer')}
                className={`p-4 border rounded-lg flex items-center justify-center ${serviceType === 'Airport Transfer' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                <FaPlane className="mr-2" /> Airport Transfer
              </button>
              <button
                type="button"
                onClick={() => setServiceType('City & Intercity Bus')}
                className={`p-4 border rounded-lg flex items-center justify-center ${serviceType === 'City & Intercity Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                <FaBus className="mr-2" /> City & Intercity Bus
              </button>
              <button
                type="button"
                onClick={() => setServiceType('Event Transportation')}
                className={`p-4 border rounded-lg flex items-center justify-center ${serviceType === 'Event Transportation' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                <FaCalendarAlt className="mr-2" /> Event Transportation
              </button>
              <button
                type="button"
                onClick={() => setServiceType('School & College Bus')}
                className={`p-4 border rounded-lg flex items-center justify-center ${serviceType === 'School & College Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                <FaSchool className="mr-2" /> School & College Bus
              </button>
              <button
                type="button"
                onClick={() => setServiceType('Tour & Travel Bus')}
                className={`p-4 border rounded-lg flex items-center justify-center ${serviceType === 'Tour & Travel Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                <FaMapMarkedAlt className="mr-2" /> Tour & Travel Bus
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Service</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusReservationPage;
