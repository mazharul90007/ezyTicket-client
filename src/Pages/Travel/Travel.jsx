import React from 'react'
import TravelBanner from './TravelComponents/TravelBanner'
import TravelService from './TravelServiceSeciton/TravelService'
import AddTravelService from './AddTravelService/AddTravelService'
import FlashDeals from './FlashDeals/FlashDeals'
import useAuth from '../../Hooks/useAuth'
import TravelFAQ from './TravelFAQ/TravelFAQ'
const Travel = () => {
  const {darkMode} = useAuth()
  return (
    <section 
    className={`${darkMode ? "bg-[#111111] " : "bg-white "} overflow-x-hidden`}
    >
      <TravelBanner />

      <section className='container mx-auto px-4 pt-10 mb-20'>
        <FlashDeals/>
      </section>
     
      <div className='px-4 mb-20'>
        <TravelService />
      </div>
      
      <AddTravelService />

      {/* set form */}
      <div id="scroll-section ">
        {/* <TravelUltimateCompanion/> */}
      </div>
      <section className='px-4 my-20'>
        <TravelFAQ/>
      </section>

    </section>
  )
}

export default Travel;