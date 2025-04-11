import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import BusDetailsModal from "./BusDetailsModal/BusDetailsModal";

const MyBusServices = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [busServices, setBusServices] = useState([
    {
      _id: "1",
      busName: "Shohagh Paribahan",
      busTimes: "12:00pm",
      date: "01/03/2025",
      from: "Mohakhali Bus Terminal, Dhaka",
      to: "Kamalapur Bus Stand, Dhaka",
      refund: true,
      ticketPrice: 350,
      tripName: "eidTrip",
      type: "AC",
      userEmail: "sofik@gmail.com",
      userName: "Sofik",
    },
    {
      _id: "2",
      busName: "Hanif Enterprise",
      busTimes: "3:30pm",
      date: "03/03/2025",
      from: "Gabtoli Bus Terminal, Dhaka",
      to: "Chittagong Bus Stand, Chittagong",
      refund: false,
      ticketPrice: 850,
      tripName: "businessTrip",
      type: "Non-AC",
      userEmail: "sofik@gmail.com",
      userName: "Sofik",
    },
  ]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };
  const handleUpdate = () => {
    Swal.fire({
      title: "Coming Soon...!",
      text: "This Feature is coming soon.",
      icon: "info"
    });
  };

  const handleOpenModal = (bus) => {
    setSelectedBus(bus);
    document.getElementById("busDetailsModal").showModal();
  };

  

  return (
    <div className="max-w-6xl mx-auto mt-2  p-6 bg-green-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">My Added Bus Services</h2>

      {busServices.length === 0 ? (
        <p className="text-center text-gray-500">No bus services added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-green-200">
              <tr>
                <th>Bus Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th>Type</th>
                <th>Price</th>
                <th>Refundable</th>
                <th>Trip</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {busServices.map((bus) => (
                <tr key={bus._id} className="hover:bg-green-100 transition">
                  <td>{bus.busName}</td>
                  <td>{bus.busTimes}</td>
                  <td>{bus.date}</td>
                  <td>{bus.from}</td>
                  <td>{bus.to}</td>
                  <td>{bus.type}</td>
                  <td>{bus.ticketPrice}৳</td>
                  <td>{bus.refund ? "Yes" : "No"}</td>
                  <td>{bus.tripName}</td>
                  <td className="flex gap-1">
                  <button
                      onClick={() => handleOpenModal(bus)}
                      className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <TbListDetails />
                    </button>
                    <button
                      onClick={() => handleUpdate(bus._id)}
                      className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(bus._id)}
                      className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedBus && (
    <BusDetailsModal bus={selectedBus} modalId="busDetailsModal" />
  )}
    </div>
    
  );
};

export default MyBusServices;
