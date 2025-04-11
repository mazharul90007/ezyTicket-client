import { IoBus } from "react-icons/io5";

const BusDetailsModal = ({ bus, modalId }) => {
    if (!bus) return null;
  
    return (
        <dialog id={modalId} className="modal">
        <div className="modal-box max-w-5xl w-full bg-[#F3F4F6] rounded-xl p-0 overflow-hidden shadow-lg">
          {/* Header */}
          <div className="bg-green-100 px-8 py-5">
            <h3 className="text-green-600 text-2xl font-bold flex items-center gap-1"><IoBus /> <span>Bus Service Details</span></h3>
          </div>
  
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-[15px] bg-white">
            <div className="space-y-2">
              <p><span className="font-semibold">Bus Name:</span> Green Line</p>
              <p><span className="font-semibold">Trip Name:</span> Dhaka to Sylhet</p>
              <p><span className="font-semibold">From:</span> Dhaka</p>
              <p><span className="font-semibold">To:</span> Sylhet</p>
              <p><span className="font-semibold">Date:</span> 18 April 2025</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Time:</span> 11:00 AM</p>
              <p><span className="font-semibold">Ticket Price:</span> 1000৳</p>
              <p><span className="font-semibold">Type:</span> AC Business</p>
              <p><span className="font-semibold">Refundable:</span> Yes ✅</p>
              <p><span className="font-semibold">Added By:</span> Jane Doe (jane@email.com)</p>
            </div>
          </div>
  
          {/* Footer */}
          <div className="px-8 py-4 bg-[#F3F4F6] flex justify-end">
            <form method="dialog">
              <button className="btn bg-green-500 hover:bg-green-600 text-white px-6">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    );
  };
  
  export default BusDetailsModal;
  