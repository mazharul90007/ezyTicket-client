import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTravelContext from "../../../Hooks/TrevalHook/useTravelContext";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
const BusCard = ({ bus, time}) => {
  
    const {searchData} =useTravelContext()
    const {darkMode} = useAuth()
    // console.log(bus)

    return (
        <div 
        className={`flex flex-col justify-between border rounded-2xl  ${darkMode ?  "bg-[#1d1d1d] text-white border-none" : "bg-white text-[#111111]"}`}>
            <div className="flex flex-col lg:flex-row justify-between gap-10 p-4 md:p-10 pb-0">
                {/*ToDo company logo */}
                <div className="flex flex-col md:flex-row gap-5">
                    <img className="w-full md:w-20 h-[150px] md:h-20 object-cover" src="https://t4.ftcdn.net/jpg/02/69/47/51/360_F_269475198_k41qahrZ1j4RK1sarncMiFHpcmE2qllQ.jpg" alt="Bus Image" />
                    {/*  */}
                    <div className="md:max-w-[200px]">
                        <h1 className="text-xl font-black">{bus?.busName}</h1>
                        <h1 className="text-xs">{bus?.from}</h1>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-grow gap-4 justify-between ">
                    {/* date */}
                    <div>
                        <h1 className="text-xl  font-black">{bus?.busTimes}</h1>
                        <p>{searchData?.date ? searchData.date : new Date().toISOString().split("T")[0]}<br /><span className="text-xs">{bus?.to}</span></p>
                    </div>
                    {/* hour */}
                    <div className="flex flex-col items-center">
                        <p>4 Hours</p>
                        <div className="flex items-center">
                            <div className="bg-supporting text-white p-2 rounded-full">
                                <FaBus size={20} />
                            </div>
                            <div className="h-1 w-32 bg-supporting"></div>
                            <div className="w-4 h-4 bg-supporting rounded-full"></div>
                        </div>
                    </div>
                    {/* price */}
                    <div className="text-center flex justify-center items-center">
                        <h1 className="text-2xl flex">{bus?.ticketPrice} <FaBangladeshiTakaSign className="text-xs"/></h1>
                    </div>
                    {/* action button and set */}
                    <div className="flex flex-col gap-2  items-center">
                        <Link to={`/travel/bus-set/${bus?._id}`} state={bus} className="btn bg-main px-2 w-full text-white">Buy Ticket</Link>
                        <p className="text-xs"><span className="font-black">52</span> Sets (Available)</p>
                    </div>
                </div>
            </div>
            {/* information */}
            <div className="flex flex-col md:flex-row md:items-center text-center gap-4 px-4 md:px-10 py-5 bg-main/40 rounded-b-2xl">
                <p className="btn border-none ezy-button-secondary">Non-Refundable</p>
                <Link to="/travel/Bus-Ticket-Cancellation-policy" className=" border-none btn ezy-button-secondary">Cancellation Policy</Link>
            </div>
        </div>
    )
}

export default BusCard