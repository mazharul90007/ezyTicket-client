import React from 'react'
import TravelBanner from './TravelComponents/TravelBanner'
import TravelService from './TravelServiceSeciton/TravelService'

const Travel = () => {
  return (
    <section>
      <TravelBanner />
      <div className='px-4 mb-20'>
        <TravelService />
      </div>
    </section>
  )
}

export default Travel