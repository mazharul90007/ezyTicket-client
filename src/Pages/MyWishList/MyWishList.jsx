import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const MyWishList = () => {
  const { user, darkMode } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch("http://localhost:3000/wishlist", {
          method: "GET",
          credentials: "include", // Include credentials for authentication
        });

        const result = await response.json();

        if (response.ok) {
          setWishlist(result);
        } else {
          Swal.fire(
            "Error",
            result.message || "Failed to fetch wishlist",
            "error"
          );
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        Swal.fire("Error", "Something went wrong!", "error");
      }
    };

    fetchWishlist();
  }, [user]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-5 mt-10`}
    >
      <h1 className="text-3xl font-bold text-center mt-10">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center mt-5 text-lg">No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } border rounded-xl p-5 shadow-md transition duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <img
                src={item.photo}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📍 {item.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📅 {item.dateTime}
                </p>
                <p className="text-lg font-bold mt-2 text-indigo-500">
                  💲{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWishList;
