import travelBannerImage from "../../../assets/Travel_image/travel-service/bg-bus.jpg"
import useTravelContext from "../../../Hooks/TrevalHook/useTravelContext"
import useAuth from "../../../Hooks/useAuth";
import BusCard from "../TravelComponents/BusCard"
import BusFilter from "./BusFilter";
import SelectPlaceTime from "./SelectPlaceTime"
const TravelBusTicketPage = () => {

  const { allBusData, filterBus, setFilterBus } = useTravelContext()
  const {darkMode} = useAuth()

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

      {/* select bus */}
      <section className="grid grid-cols-12 my-14 container mx-auto">

       <BusFilter/>

          {/* bus card */}

        <div className="col-span-9 px-4 flex flex-col gap-10 ">
          {
            !filterBus ?  allBusData.map((bus,idx)=><BusCard key={idx} bus={bus}/> ) :
            filterBus.map((bus,idx)=><BusCard key={idx} bus={bus}/> )
        }
        </div>
      </section>


    </div>
  );
};

export default TravelBusTicketPage;
