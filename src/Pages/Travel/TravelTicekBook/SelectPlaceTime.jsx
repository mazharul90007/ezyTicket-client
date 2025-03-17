


const SelectPlaceTime = () => {

    //  TODO: Data come from Database
    const busStands = [
        "Gabtoli Bus Terminal, Dhaka",
        "Sayedabad Bus Terminal, Dhaka",
        "Mohakhali Bus Terminal, Dhaka",
        "Kamalapur Bus Stand, Dhaka",
        "Chattogram BRTC Bus Terminal",
        "Kadamtali Bus Terminal, Chattogram",
        "Rajshahi Bus Terminal",
        "Sylhet Kadamtali Bus Stand",
        "Khulna Sonadanga Bus Terminal",
        "Barisal Nathullabad Bus Terminal",
        "Mymensingh Kewatkhali Bus Terminal",
        "Bogura Satmatha Bus Stand",
        "Rangpur Modern Bus Terminal",
        "Cumilla Shasongacha Bus Terminal",
        "Cox’s Bazar Bus Terminal",
        "Sirajganj Bus Terminal"
      ];
      const busTime = [
        "5:30am",
        "6:30am",
        "7:30am",
        "8:30am",
        "9:30am",
        "10:30am",
        "11:30am",
        "11:30am",
        "12:30am",
        "01:30pm",
        "01:30pm",
        "02:30pm",
        "03:30pm",
        "04:30pm",
        "05:30pm",
        "06:30pm",
        "07:30pm",
        "08:30pm",
        "09:30pm",
        "10:30pm",
        "11:30pm",
        "12:30pm",
      ]
      
      const busNames = [
        "Green Line Paribahan",
        "Shohagh Paribahan",
        "Hanif Enterprise",
        "Ena Transport",
        "Desh Travels",
        "Shyamoli Paribahan",
        "Saintmartin Paribahan",
        "BRTC",
        "Anabil Super",
      ];     

    return (
        <section className="border p-5 rounded border-black/20 flex flex-col lg:flex-row justify-between items-center gap-5 shadow-2xl shadow-main">
            <select defaultValue="Select a Bus" className="select select-success">
                <option disabled={true} >Select a Bus</option>
                {
                    busNames.map((bus,idx)=><option key={idx}>{bus}</option>)
                }
            </select>
            <select defaultValue="From" className="select select-success">
                <option disabled={true} >From</option>
                {
                    busStands.map((stand,idx)=><option key={idx}>{stand}</option>)
                }
            </select>
            <select defaultValue="To" className="select select-success">
                <option disabled={true}>To</option>
                {
                    busStands.map((stand,idx)=><option key={idx}>{stand}</option>)
                }
            </select>
            <select defaultValue="Pick a Time" className="select select-success">
                <option disabled={true}>Pick a Time</option>
                {
                    busTime.map((time,idx)=><option key={idx}>{time}</option>)
                }
            </select>

        </section>
    )
}

export default SelectPlaceTime