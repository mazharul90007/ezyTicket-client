import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddBusService = () => {
  const { user, userInfo } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
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

  const districts = [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Jamalpur",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Mymensingh",
    "Narayanganj",
    "Narsingdi",
    "Netrokona",
    "Rajbari",
    "Shariatpur",
    "Sherpur",
    "Tangail",
    "Bogra",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Nawabganj",
    "Pabna",
    "Rajshahi",
    "Sirajgonj",
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
    "Barguna",
    "Barisal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Comilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
    "Habiganj",
    "Maulvibazar",
    "Sunamganj",
    "Sylhet",
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
  ];

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

    axiosSecure.post("/busServices", { bus: formData }).then((res) => {
      console.log(res);

      Swal.fire({
        title: "You Bus Service Added Successfully!",
        icon: "success",
        draggable: true,
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
      });
    });
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

          <select
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Departure District</option>
            {districts.map((district, idx) => (
              <option key={idx} value={district}>
                {district}
              </option>
            ))}
          </select>

          <select
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Destination District</option>
            {districts.map((district, idx) => (
              <option key={idx} value={district}>
                {district}
              </option>
            ))}
          </select>

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
