import React from 'react'
import TravelBanner from './TravelComponents/TravelBanner'
import TravelService from './TravelServiceSeciton/TravelService'
import AddTravelService from './AddTravelService/AddTravelService'
import FlashDeals from './FlashDeals/FlashDeals'
import useAuth from '../../Hooks/useAuth'
import TravelFAQ from './TravelFAQ/TravelFAQ'
import WhyChooseUsTravel from './TravelComponents/WhyChooseUsTravel'
import TravelTestimonials from './TravelComponents/TravelTestimonials'
const Travel = () => {
  const {darkMode} = useAuth()
  return (
    <section 
    className={`${darkMode ? "bg-[#111111] " : ""} overflow-x-hidden`}
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
        <WhyChooseUsTravel/>
      </section>

      <TravelTestimonials/>

    </section>
  )
}

export default Travel;