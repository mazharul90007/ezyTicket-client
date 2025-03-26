import React from 'react'
import TravelBanner from './TravelComponents/TravelBanner'
import TravelService from './TravelServiceSeciton/TravelService'
import TravelSelectSet from './TravelTicekBook/TravelSelectSet'
import AddTravelService from './AddTravelService/AddTravelService'
import FlashDeals from './FlashDeals/FlashDeals'

const Travel = () => {
  return (
    <section className='overflow-x-hidden'>
      <TravelBanner />

      <section className='container mx-auto px-4 pt-10 mb-20'>
        <FlashDeals/>
      </section>

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