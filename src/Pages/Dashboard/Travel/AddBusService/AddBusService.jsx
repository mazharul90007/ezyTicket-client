import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddBusService = () => {
    const {user, userInfo} = useContext(AuthContext)
    const [formData, setFormData] = useState({
        busName: "",
        busTimes: "",
        date: "",
        from: "",
        to: "",
        refund: false,
        ticketPrice: "",
        tripName: "",
        type: "",
        userEmail: user?.email,
        userName: userInfo?.name,
      });
      
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Bus Service:", formData);
        Swal.fire({
            title: "You Bus Service Added Successfully!",
            icon: "success",
            draggable: true
          });
          setFormData({
            busName: "",
            busTimes: "",
            date: "",
            from: "",
            to: "",
            refund: false,
            ticketPrice: "",
            tripName: "",
            type: "",
            userEmail: user?.email,
            userName: userInfo?.name,
          })
      };
    
      return (
        <div className="max-w-5xl mx-auto mt-2 p-8 bg-green-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">Add Bus Service</h2>
    
          <form onSubmit={handleSubmit} className="space-y-6">
           
            <div className="border-l-4 border-green-400 pl-4 mb-4">
              <h3 className="text-xl font-semibold"> Bus Details</h3>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="busName"
                placeholder="Bus Name (e.g., Shohagh Paribahan)"
                value={formData.busName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
    
              <input
                type="text"
                name="tripName"
                placeholder="Trip Name (e.g., eidTrip)"
                value={formData.tripName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
    
              <input
                type="text"
                name="type"
                placeholder="Bus Type (e.g., AC)"
                value={formData.type}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
    
              <input
                type="number"
                name="ticketPrice"
                placeholder="Ticket Price"
                value={formData.ticketPrice}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
    
              <input
                type="text"
                name="from"
                placeholder="From (e.g., Mohakhali Bus Terminal)"
                value={formData.from}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
    
              <input
                type="text"
                name="to"
                placeholder="To (e.g., Kamalapur Bus Stand)"
                value={formData.to}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
    
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
    
              <input
                type="time"
                name="busTimes"
                value={formData.busTimes}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
    
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="refund"
                checked={formData.refund}
                onChange={handleChange}
                className="checkbox checkbox-sm"
              />
              <label className="text-sm font-medium">Refundable</label>
            </div>
    
           
            <div className="border-l-4 border-green-400 pl-4 mt-6">
              <h3 className="text-xl font-semibold"> Added By</h3>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="userEmail"
                placeholder="User Email"
                value={formData.userEmail}
                onChange={handleChange}
                className="input input-bordered w-full bg-gray-100"
                required
                readOnly
              />
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                value={formData.userName}
                onChange={handleChange}
                className="input input-bordered w-full bg-gray-100"
                required
                readOnly
              />
            </div>
    
            
            <div className="text-right">
              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white"
              >
                Add Bus Service
              </button>
            </div>
          </form>
        </div>
      );
    };

export default AddBusService;