import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useTravelContext from "../../../Hooks/TrevalHook/useTravelContext";
import useAuth from "../../../Hooks/useAuth";



const SelectPlaceTime = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const {darkMode} = useAuth()

    // Data from Travel Provider
    const { searchData, setSearchData, districts, filterBus, setFilterBus } = useTravelContext()
    // console.log("Search Data",searchData)

    // console.log(filterBus)

    const handleSearchData = (e) => {
        e.preventDefault();
        const form = e.target;
        const fromDistrict = form.fromDistrict.value;
        const toDistrict = form.toDistrict.value;
        const date = form.date.value;
        const placeTimeData = { stand1: fromDistrict, stand2: toDistrict, date: date }
        setSearchData(placeTimeData)
        axiosSecure.get("/api/stand", {
            params: placeTimeData,
        })
            .then(data => {
                setFilterBus(data.data)
                if (location.pathname === "/travel") {
                    navigate("/travel/bus-ticket-book")
                }
            })
            .catch(err => console.log(err))


    }
    // useEffect( ()=>{

    // },[searchData])
    // console.log(filterBus, "search", searchData)
    return (
        <section>
            <div className={` rounded ${darkMode ?  "bg-[#1d1d1d]" : "text-[#111111] bg-white" }`}>
                <h3 className="pt-8 px-8 font-bold text-xl text-main">Online Ticket Booking</h3>
                <form onSubmit={handleSearchData} className="  p-8 pt-4 rounded border-black/20 flex flex-col lg:flex-row justify-between items-center gap-5 ">
                {/* 1st location */}
                    <div className="w-full">
                        {/* <p className="font-bold mb-2">From</p> */}
                        <select 
                        name="fromDistrict" 
                        defaultValue={!searchData ? "From" : searchData?.stand1} 
                        className={`select select-success w-full ${darkMode ?  "bg-[#424242] text-white" : "bg-white text-[#111111]" }`} required>
                            <option disabled={true} >From</option>
                            {
                                districts.map((stand, idx) => <option key={idx}>{stand}</option>)
                            }
                        </select>
                    </div>
                    {/* 2nd location */}
                    <div className="w-full">
                        {/* <p className="font-bold mb-2">To</p> */}
                        <select name="toDistrict" defaultValue={!searchData ? "To" : searchData?.stand1} className={`select select-success w-full ${darkMode ?  "bg-[#424242] text-white" : "bg-white text-[#111111]" }`} required>
                            <option disabled={true}>To</option>
                            {
                                districts.map((stand, idx) => <option key={idx}>{stand}</option>)
                            }
                        </select>
                    </div>
                    {/* Date */}
                    <div className="w-full">
                        {/* <p className="font-bold mb-2">When</p> */}
                        <input name="date"
                            defaultValue={!searchData ? "" : searchData?.date}
                            required
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            className={`input input-success w-full border p-2  ${darkMode ?  "bg-[#424242] text-white" : "bg-white text-[#111111]"} rounded `} />
                    </div>
                            {/* button */}
                    <div className=" ">
                        <button type="submit" className="btn bg-main text-xl p-6 text-white ">Search</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default SelectPlaceTime