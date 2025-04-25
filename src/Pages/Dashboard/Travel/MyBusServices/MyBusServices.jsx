import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import BusDetailsModal from "./BusDetailsModal/BusDetailsModal";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyBusServices = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const { user } = useAuth();
const axiosSecure = useAxiosSecure();

// ✅ Define the fetcher function first
const fetchUserBuses = async (email) => {
  const res = await axiosSecure.get(`/api/buses?email=${email}`);
  return res.data;
};

// ✅ Now use the fetcher in the query
const useUserBuses = (email) => {
  return useQuery({
    queryKey: ['user-buses', email],
    queryFn: () => fetchUserBuses(email),
    enabled: !!email,
  });
};

const { data: buses, isLoading } = useUserBuses(user?.email);
console.log("buses", buses);
  


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

  
if (isLoading) return <p>Loading...</p>;
console.log(buses)
  return (
    <div className="max-w-6xl mx-auto mt-2  p-6 bg-green-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">My Added Bus Services</h2>

      {buses.length === 0 ? (
        
        <p className="text-center text-gray-500">No bus services added yet. {isLoading? 'Loading...':''}</p>
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
              {buses.map((bus) => (
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
