import React from 'react'
import TravelBanner from './TravelComponents/TravelBanner'
import TravelService from './TravelServiceSeciton/TravelService'
import TravelSelectSet from './TravelTicekBook/TravelSelectSet'
import AddTravelService from './AddTravelService/AddTravelService'

const Travel = () => {
  return (
    <section>
      <TravelBanner />
      <div className='px-4 mb-20'>
        <TravelService />
        <AddTravelService/>
      </div>
      <TravelSelectSet/>
    </section>
  )
}

export default Travel