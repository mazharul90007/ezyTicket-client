import { useState } from "react";
import useBusStandName from "./useBusStandName";
import { useLocation, useNavigate } from "react-router-dom";



const SelectPlaceTime = () => {
    const [districts] = useBusStandName()
    const [searchData, setSearchData] = useState()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSearchData = (e) => {
        e.preventDefault();
        const form = e.target;
        const fromDistrict = form.fromDistrict.value;
        const toDistrict = form.toDistrict.value;
        const date = form.date.value;
        setSearchData({fromDistrict:fromDistrict, toDistrict:toDistrict, date:date})
        if(location.pathname ==="/travel"){
            navigate("/")
        } 
        
    }

    return (
        <section>
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