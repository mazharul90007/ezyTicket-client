import travelBannerImage from "../../../assets/Travel_image/travel-service/bg-bus.jpg"
import BusCard from "../TravelComponents/BusCard"
import useBusState from "../TravelHooks/useBusState"
import SelectPlaceTime from "./SelectPlaceTime"
const TravelBusTicketPage = () => {
  const [busInfo] = useBusState()
  const timeArray = [
    "6:30am", "7:30am", "8:30am","9:30am", "10:30am", "11:30am", "12:30pm", "01:30pm","02:30pm","03:30pm","04:30pm","05:30pm","06:30pm","07:30pm","08:30pm","09:30pm","10:30pm","11:30pm","12:30pm",
  ];

  console.log(busInfo)
  return (
    <div className="my-20">
      <div
        className="relative hero min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${travelBannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 "></div>
        <div className="text-center relative z-10">
          <SelectPlaceTime />
        </div>
      </div>

      <div className="px-4 md:px-20 flex flex-col gap-10 my-14">
        {
          timeArray.map((time,idx)=> busInfo.map((bus,idx)=><BusCard key={idx} bus={bus} time={time} /> ))
        }
        {/* {
          busInfo.map((bus,idx)=><BusCard key={idx} bus={bus}/> )
        } */}
      </div>

    </div>
  )
}

export default TravelBusTicketPage