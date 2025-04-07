import React, { useState } from "react";


const AddCineplex = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        totalSeats: '',
        facilities: {
          ac: false,
          DDD: false,
          food: false,
          vip: false,
        },
        email: '',
        password: '',
        image:''
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (name in formData.facilities) {
          setFormData({
            ...formData,
            facilities: {
              ...formData.facilities,
              [name]: checked,
            },
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting cinema hall:', formData);
    
        // Here you'd send the data to your backend API
        // axios.post('/api/cinema/register', formData)
      };
  return (
    <div className="max-h-screen">
      {/* <div className="bg-gradient-to-b from-purple-700 via-purple-800 to-purple-500">
        <h1 className="text-5xl font-thin text-center bg-sky-900  text-white py-5">
          Add Your Cinema Hall
        </h1>
      </div> */}

      <div className="relative">
        <img src="/addcine2.jpg" alt="" />
        <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>
        


        <div className="max-w-3xl absolute top-70 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-6  text-center mx-auto   shadow-2xl rounded-xl mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center text-purple-700">Register Your Cinema Hall</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Cinema Hall Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="number"
          name="totalSeats"
          placeholder="Total Number of Seats"
          value={formData.totalSeats}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="ac" onChange={handleChange} />
            AC
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="DDD" onChange={handleChange} />
            3D Screen
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="food" onChange={handleChange} />
            Food Court
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="vip" onChange={handleChange} />
            VIP Seating
          </label>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <div className="flex">
        <input
          type="url"
          name="url"
          placeholder="Image Link Here"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />
        <h1 className="my-auto ml-3">Add</h1>

        </div>
       
    
        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-lg font-medium"
        >
          Register Cinema Hall
        </button>
      </form>
    </div>
      </div>
    </div>
  );
};

export default AddCineplex;
