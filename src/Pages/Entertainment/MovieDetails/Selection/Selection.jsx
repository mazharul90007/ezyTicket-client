import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import TicketBooking from "../TicketBooking";
import useEntertainmentData from "../../../../Hooks/EntertainmentHook/useEntertainmentData";
import { motion } from "framer-motion";
import useAuth from "../../../../Hooks/useAuth";
import { useParams } from "react-router-dom";

export function Selection() {
  const { userInfo, darkMode } = useAuth();
  const { halls, movies } = useEntertainmentData();
  const { id } = useParams();

  console.log(userInfo);

  const [selectedTime, setSelectedTime] = useState(null);
  const [selected, setSelected] = useState(new Date());
  const [days, setDays] = useState([
    { label: "Today", date: new Date() },
    { label: "Tomorrow", date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) }
  ]);
    const [calerndar, setCalendar] = useState(false);
  const [dayName, setDayName] = useState("Today");

  const timeSlots = ["11:00 AM", "01:30 PM", "5:30 PM", "8:00 PM"];
  const movie = movies.find((movie) => movie._id==id || movie.id == id);

  const [formData, setFormData] = useState({
    name: userInfo?.name || "",
    email: userInfo?.email || "",
    phone: userInfo?.phone || "",
    cineplex: "",
    seats: 1,
    priceperticket: 0,
    address: userInfo?.address || "",
    movieName: movie?.original_title
    || "",

    // totalPrice: (formData?.priceperticket * Number(formData?.seats) * 1.05)
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDaySelect = (selectedDay) => {
    console.log("Her id mu", selectedDay);
    setDayName(selectedDay.label || selectedDay);
    setFormData((prev) => ({
      ...prev,
      day: selectedDay.label || selectedDay,
      date: selectedDay.date || selectedDay,
    }));
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setFormData((prevData) => ({
      ...prevData,
      time:time,
    }));
  };

  console.log(movies,id);
  console.log(movie);
  console.log(halls);
  console.log(dayName);
  console.log(days);
  console.log(formData);

  useEffect(() => {
    getNextNDays(7);
    const selectedHall = halls.filter((h) => h.name == formData.cineplex)[0];
    console.log(selectedHall?.price);

    if (selectedHall) {
      setFormData((prevData) => ({
        ...prevData,
        priceperticket: selectedHall.price,
      }));
    }
  }, [formData.cineplex, halls]);

  function getNextNDays(n = 7) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const nextDays = [
      { label: "Today",  date: today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) },
      { label: "Tomorrow",  date: new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}
    ];

    for (let i = 2; i < n; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);

      const dayName = days[nextDate.getDay()];
      // If you want to include formatted date, uncomment:
      const formattedDate = nextDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      nextDays.push({
        label: dayName,
        date: formattedDate
      });
    }
    setDays(nextDays);
    console.log(nextDays);
  }

  
  return (
    <div className="flex relative flex-col items-center  gap-4 p-6 rounded-2xl shadow-md w-full mx-auto">
      {/* Display the days array if needed */}
      <div>
        {days.length > 0 && (
          <div className="mt-4 flex gap-3">
            <div className="flex gap-2 flex-wrap ">
              {days.map((day, index) => (
                <div
                  onClick={() => handleDaySelect(day)}
                  key={index}
                  val
                  className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-all duration-300 ${
                    dayName === (day.label || day)
                      ? "bg-green-700 text-white"
                      : "bg-blue-100 text-green-800 hover:bg-green-700 hover:text-white"
                  }`}
                >
                  {day.label || day}
                </div>
              ))}
            </div>
            <button
              onClick={() => setCalendar(!calerndar)}
              className="px-3 cursor-pointer transition-all duration-600 hover:bg-green-700 bg-main text-white rounded-full text-sm"
            >
              Choose Date
            </button>
          </div>
        )}
      </div>

      <div
        className={`rounded-lg border absolute right-15 z-20 backdrop-blur-3xl  border-gray-200 p-2 ${
          calerndar ? "transition-all duration-500 " : "hidden "
        } `}
      >
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          styles={{
            caption: { color: "#008236", fontWeight: "600" },
            head_cell: { color: "#6b7280" },
            cell: { borderRadius: "8px", padding: "8px" },
            day_selected: {
              backgroundColor: "#3b82f6",
              color: "white",
              fontWeight: "bold",
            },
            day_today: {
              border: "1px solid #3b82f6",
            },
          }}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        {/* <label className="text-lg font-semibold text-gray-700">
          Select Cineplex
        </label> */}
        <select
          name="cineplex"
          value={formData.cineplex}
          onChange={handleChange}
          className="w-full p-3 rounded-xl text-center bg-green-100 text-green-900 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          required
        >
          <option disabled>Select Cineplex</option>
          {halls?.map((hall) => (
            <option key={hall.id || hall.name} value={hall.name}>
              {hall.name}
            </option>
          ))}
        </select>
      </div>

        <div className="mb-6">
                   <h2 className="text-xl font-semiboldmb-4 flex items-center gap-2">
                     ⏰ Pick a Showtime
                   </h2>
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                     {timeSlots.map((time, index) => (
                       <motion.button
                         key={index}
                         whileTap={{ scale: 0.95 }}
                         whileHover={{ scale: 1.02 }}
                         className={`p-4 rounded-2xl border transition-all duration-300 font-medium text-sm shadow-sm ${
                           selectedTime === time
                             ? "bg-purple-600 text-white shadow-md ring-2 ring-purple-400"
                             : "bg-white text-gray-800 hover:bg-gray-100 border-gray-300"
                         }`}
                         onClick={() => handleTimeSelection(time)}
                       >
                         🎬 {time}
                       </motion.button>
                     ))}
                   </div>
                 </div>

      {/* <TicketBooking></TicketBooking> */}
    </div>
  );
}
