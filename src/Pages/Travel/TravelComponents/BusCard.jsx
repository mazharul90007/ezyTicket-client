import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
const BusCard = ({ bus, time}) => {
    const {busName, } = bus
    return (
        <div className="flex flex-col justify-between border rounded-2xl">
            <div className="flex flex-col lg:flex-row justify-between gap-10 p-4 md:p-10 pb-0">
                {/*ToDo company logo */}
                <div className="flex flex-col md:flex-row gap-5">
                    <img className="w-full md:w-20 h-[150px] md:h-20 object-cover" src="https://t4.ftcdn.net/jpg/02/69/47/51/360_F_269475198_k41qahrZ1j4RK1sarncMiFHpcmE2qllQ.jpg" alt="Bus Image" />
                    {/*  */}
                    <div className="md:max-w-[200px]">
                        <h1 className="text-xl font-black">{busName}</h1>
                        <h1 className="text-xs">Route:Dhaka-Sirajganj</h1>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-grow justify-between ">
                    {/* date */}
                    <div>
                        <h1 className="text-xl  font-black">{time}</h1>
                        <p>25 mar 2025 <br />Dhaka</p>
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
                        <h1 className="text-2xl">350 tk</h1>
                    </div>
                    {/* action button and set */}
                    <div className="flex flex-col gap-2  items-center">
                        <button className="btn bg-main px-6 text-white">Buy Ticket</button>
                        <p className="text-xs"><span className="font-black">52</span> Sets (Available)</p>
                    </div>
                </div>
            </div>
            {/* information */}
            <div className="flex flex-col md:flex-row md:items-center text-center gap-4 px-4 md:px-10 py-5 bg-main/40 rounded-b-2xl">
                <p className="btn">Non-Refundable</p>
                <Link to="/travel/Bus-Ticket-Cancellation-policy" className="btn">Cancellation Policy</Link>
            </div>
        </div>
    )
}

export default BusCard