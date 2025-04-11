import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="pt-36 text-black bg-gradient-to-br from-[#70fd94f5] via-[#f1fff0] to-[#b0fac2d7] px-6 pb-20">
      {/* Page Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello — we’re here to help.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <FaMapMarkerAlt className="text-4xl mx-auto text-green-700 mb-3" />
          <h3 className="text-xl font-semibold text-green-800">Our Address</h3>
          <p className="text-gray-700 mt-2">Wireless, Dhaka, Bangladesh</p>
          <p>ZIP Code: 12345</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <FaPhone className="text-4xl mx-auto text-green-700 mb-3" />
          <h3 className="text-xl font-semibold text-green-800">Phone</h3>
          <p className="mt-2 text-sm">Main Office: +123 456 7890</p>
          <p className="text-sm">24/7 Service: +987 654 3210</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <FaEnvelope className="text-4xl mx-auto text-green-700 mb-3" />
          <h3 className="text-xl font-semibold text-green-800">Email</h3>
          <p className="mt-2 text-sm">Business: ezy@gmail.com</p>
          <p className="text-sm">Support: ticket@gmail.com</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <FaClock className="text-4xl mx-auto text-green-700 mb-3" />
          <h3 className="text-xl font-semibold text-green-800">Business Hours</h3>
          <p className="text-sm mt-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
      </div>

      {/* Message Us Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/60 backdrop-blur-lg p-10 rounded-xl shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Message Us</h2>
          <p className="text-gray-700 text-lg">
            Have questions, feedback, or inquiries? Send us a message and our team will respond promptly!
          </p>
          <ul className="list-disc list-inside mt-6 text-gray-600">
            <li>Support for ticket booking & cancellation</li>
            <li>Partnership or business queries</li>
            <li>Report issues or bugs</li>
            <li>General inquiries</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="mb-6">
            <label className="block text-green-900 font-medium text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-green-900 font-medium text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-green-900 font-medium text-lg">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
