import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useEventReview from "../../../../Hooks/useEventReview";


const ManageEventReview = () => {
  const [eventReviews, refetch, isLoading] = useEventReview();
  const [axiosSecure] = useAxiosSecure(); 
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (isLoading) {
    return <div className="text-center py-10">Loading reviews...</div>;
  }

  const handleVerifyClick = (event) => {
    setSelectedEvent(event);
    document.getElementById("verify_modal").showModal();
  };

  const handleVerifySubmit = () => {
    axiosSecure
      .patch(`/verifyEvent/${selectedEvent._id}`, { status: "verified" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success!", "Review verified successfully!", "success");
          refetch();
          setSelectedEvent(null);
          document.getElementById("verify_modal").close();
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This review will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/event-reviews/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "The review has been removed.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Event Reviews</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th>Reviewer</th>
              <th>Email</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventReviews.map((event, index) => (
              <tr key={event._id}>
                <td>{index + 1}</td>
                <td>{event.eventName}</td>
                <td>{event.customerName}</td>
                <td>{event.customerEmail}</td>
                <td>{event.status || "pending"}</td>
                <td className="p-2 flex justify-end gap-2">
                  {event?.status === "rejected" ? (
                    <p className="py-1 px-3 bg-red-100 text-red-600 border border-red-300 w-fit rounded">
                      Rejected
                    </p>
                  ) : event?.status === "verified" ? (
                    <p className="py-1 px-3 bg-green-100 text-green-600 border border-green-300 w-fit rounded">
                      Verified
                    </p>
                  ) : (
                    <button
                      className="btn btn-sm btn-outline btn-primary"
                      onClick={() => handleVerifyClick(event)}
                    >
                      Verify
                    </button>
                  )}
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => handleDelete(event._id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Verify Modal */}
      <dialog id="verify_modal" className="modal">
        <div className="modal-box max-w-md">
          <h3 className="text-xl font-bold mb-4">Review Details</h3>

          {selectedEvent && (
            <>
              {selectedEvent.customerPhoto && (
                <div className="flex justify-center mb-4">
                  <img
                    src={selectedEvent.customerPhoto}
                    alt="Reviewer"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}
              <p>
                <strong>Reviewer:</strong> {selectedEvent.customerName}
              </p>
              <p>
                <strong>Email:</strong> {selectedEvent.customerEmail}
              </p>
              <p>
                <strong>Comment:</strong> {selectedEvent.comment}
              </p>
              <p>
                <strong>Time:</strong> {selectedEvent.time}
              </p>
              <p>
                <strong>Event:</strong> {selectedEvent.eventName}
              </p>
            </>
          )}

          <div className="modal-action mt-6">
            <form method="dialog" className="flex gap-3">
              <button className="btn" onClick={() => setSelectedEvent(null)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleVerifySubmit}>
                Confirm Verify
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ManageEventReview;
