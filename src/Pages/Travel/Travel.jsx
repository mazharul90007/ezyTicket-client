import React from 'react'
import TravelBanner from './TravelComponents/TravelBanner'
import TravelService from './TravelServiceSeciton/TravelService'
import TravelSelectSet from './TravelTicekBook/TravelSelectSet'
import AddTravelService from './AddTravelService/AddTravelService'

const Travel = () => {
  return (
    <section className='overflow-x-hidden'>
      <TravelBanner />
      <div className='px-4 mb-20'>
        <TravelService />
      </div>
      
      <AddTravelService />

      {/* set form */}
      <div id="scroll-section">
        <TravelSelectSet />
      </div>
    </section>
  )
}

export default Travel