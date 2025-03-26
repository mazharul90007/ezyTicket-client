import travelBannerImage from "../../../assets/Travel_image/travel-service/bg-bus.jpg"
import useTravelContext from "../../../Hooks/TrevalHook/useTravelContext"
import BusCard from "../TravelComponents/BusCard"
import SelectPlaceTime from "./SelectPlaceTime"
const TravelBusTicketPage = () => {

  const { allBusData, filterBus } = useTravelContext()
  console.log(allBusData)
  const timeArray = [
    "6:30am", "7:30am", "8:30am", "9:30am", "10:30am", "11:30am", "12:30pm", "01:30pm", "02:30pm", "03:30pm", "04:30pm", "05:30pm", "06:30pm", "07:30pm", "08:30pm", "09:30pm", "10:30pm", "11:30pm", "12:30pm",
  ];

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

        <div className="hidden lg:flex flex-col gap-2 col-span-3">
          {/* bus type */}
          <div className="flex gap-5 ">
            <h2 className="text-xl font-semibold">Filter</h2>
            <button className="btn btn-sm bg-white border-main text-main ">RESET</button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-supporting mb-2">Bus type</h3>
            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked={false} className="checkbox" />
              <p>AC</p>             
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked={false} className="checkbox" />
              <p>Non AC</p>            
            </div>
          </div>
          {/* operator */}
          <div className="flex flex-col gap-2 mt-2">
            <h3 className="text-supporting mb-2">Operator</h3>
            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked={false} className="checkbox" />
              <p>Shohagh Paribahan</p>             
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked={false} className="checkbox" />
              <p>Green Line Paribahan</p>            
            </div>
          </div>
        </div>

          {/* bus card */}

        <div className="col-span-9 px-4 flex flex-col gap-10 ">
          {/* {
            timeArray.map((time, idx) => allBusData.map((bus, idx) => <BusCard key={idx} bus={bus} time={time} />))
          } */}
          
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
