import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function Selection() {
  const [selected, setSelected] = useState(new Date());
  const [days, setDays] = useState([]);
  const [calerndar, setCalendar] = useState(false);

  useEffect(() => {
    getNextNDays(7);
  }, []);

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
    const nextDays = [];

    for (let i = 0; i < n; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);

      const dayName = days[nextDate.getDay()];
      // If you want to include formatted date, uncomment:
      // const formattedDate = nextDate.toLocaleDateString("en-US", {
      //   year: "numeric",
      //   month: "long",
      //   day: "numeric"
      // });

      nextDays.push(`${dayName}`);
    }
    setDays(nextDays);
    console.log(nextDays);
  }

  return (
    <div className="flex relative flex-col items-center gap-4 p-6 rounded-2xl shadow-md w-full mx-auto">
      {/* Display the days array if needed */}
      <div>
        {days.length > 0 && (
          <div className="mt-4 flex gap-3">

            <div className="flex gap-2 flex-wrap ">
              {days.map((day, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-green-800 hover:bg-green-700 transition-all duration-600 cursor-pointer hover:text-white rounded-full text-sm"
                >
                  {day}
                </span>
              ))}
            </div>
            <button
            onClick={() => setCalendar(!calerndar)}
            className="px-3 cursor-pointer transition-all duration-600 hover:bg-green-700 bg-main text-white rounded-full text-sm">
            Choose Date
            </button>
            
          </div>
        )}
      </div>

    

      <div className={`rounded-lg border absolute right-15 z-20 backdrop-blur-3xl  border-gray-200 p-2 ${calerndar?"transition-all duration-500 ":"hidden "} `}>
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

    </div>
  );
}
