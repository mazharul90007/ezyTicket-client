import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useTravelContext from "../../../Hooks/TrevalHook/useTravelContext";



const SelectPlaceTime = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    

    // Data from Travel Provider
    const {searchData, setSearchData,districts, filterBus, setFilterBus} = useTravelContext()
    console.log("Search Data",searchData)

    console.log(filterBus)

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
            if(location.pathname ==="/travel"){
                navigate("/travel/bus-ticket-book")
            } 
        })
        .catch(err=>console.log(err))
       
        
    }
    // useEffect( ()=>{
       
    // },[searchData])
    console.log(filterBus, "search", searchData)
    return (
        <section className="bg-white rounded">
            <form onSubmit={handleSearchData} className="border p-8 rounded border-black/20 flex flex-col lg:flex-row justify-between items-center gap-5 shadow-2xl ">
                <select name="fromDistrict" defaultValue={!searchData ? "From": searchData?.stand1} className="select select-success w-full" required>
                    <option disabled={true} >From</option>
                    {
                        districts.map((stand, idx) => <option key={idx}>{stand}</option>)
                    }
                </select>
                <select name="toDistrict" defaultValue={!searchData ? "To": searchData?.stand1} className="select select-success w-full" required>
                    <option disabled={true}>To</option>
                    {
                        districts.map((stand, idx) => <option key={idx}>{stand}</option>)
                    }
                </select>
                <div className="w-full">
                    <input name="date" 
                    defaultValue={!searchData ? "": searchData?.date}
                    required 
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="input input-success w-full border p-2 rounded" />
                </div>
                <button type="submit" className="btn bg-main text-xl p-6">Search</button>
            </form>
        </section>
    )
}

export default SelectPlaceTime