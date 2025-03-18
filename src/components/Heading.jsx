import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className='text-center '>
        <h1 className='text-2xl font-bold md:text-3xl lg:text-5xl'>{title}</h1>
        <p className='mt-5 md:w-10/12 mx-auto'>{subtitle}</p>
    </div>
  )
}

export default Heading