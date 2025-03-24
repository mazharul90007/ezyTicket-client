import travelBannerImage from "../../../assets/Travel_image/travel-service/bg-bus.jpg";
import BusCard from "../TravelComponents/BusCard";
import useBusState from "../TravelHooks/useBusState";
import SelectPlaceTime from "./SelectPlaceTime";
const TravelBusTicketPage = () => {
  const [busInfo] = useBusState();
  console.log(busInfo);
  return (
    <div className="my-20">
      <div
        className="relative hero min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${travelBannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="text-center relative z-10">
          <SelectPlaceTime />
        </div>
      </div>

      <div>
        {busInfo.map((bus, idx) => (
          <BusCard key={idx} bus={bus} />
        ))}
      </div>
    </div>
  );
};

export default TravelBusTicketPage;
