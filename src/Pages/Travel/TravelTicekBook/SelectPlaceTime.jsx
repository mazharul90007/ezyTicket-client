import { useEffect, useState } from "react";
import useBusStandName from "../TravelHooks/useBusStandName";
import { useLocation, useNavigate } from "react-router-dom";
import useBusState from "../TravelHooks/useBusState";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const SelectPlaceTime = () => {
    const [busInfo] = useBusState()
    const [districts] = useBusStandName()
    const [searchData, setSearchData] = useState()
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [filterBus, setFilterBus] = useState()

    // console.log(busInfo)

    const handleSearchData = (e) => {
        e.preventDefault();
        const form = e.target;
        const fromDistrict = form.fromDistrict.value;
        const toDistrict = form.toDistrict.value;
        const date = form.date.value;
        const placeTimeData = {stand1:fromDistrict, stand2:toDistrict, date:date}
        setSearchData(placeTimeData)
        axiosSecure.get("/api/stand", {
            params: placeTimeData,
        })
        .then(data=>{
            setFilterBus(data.data)
            // if(location.pathname ==="/travel"){
            //     navigate("/travel/bus-ticket-book")
            // } 
        })
        .catch(err=>console.log(err))
       
        
    }
    // useEffect( ()=>{
       
    // },[searchData])
    console.log(filterBus, "search", searchData)
    return (
        <section className="bg-white">
            <form onSubmit={handleSearchData} className="border p-8 rounded border-black/20 flex flex-col lg:flex-row justify-between items-center gap-5 shadow-2xl shadow-main">
                <select name="fromDistrict" defaultValue="From" className="select select-success w-full">
                    <option disabled={true} >From</option>
                    {
                        districts.map((stand, idx) => <option key={idx}>{stand}</option>)
                    }
                </select>
                <select name="toDistrict" defaultValue="To" className="select select-success w-full">
                    <option disabled={true}>To</option>
                    {
                        districts.map((stand, idx) => <option key={idx}>{stand}</option>)
                    }
                </select>
                <div className="w-full">
                    <input name="date" type="date" className="input input-success w-full border p-2 rounded" />
                </div>
                <button type="submit" className="btn bg-main text-xl p-6">Search</button>
            </form>
        </section>
    )
}

export default SelectPlaceTime