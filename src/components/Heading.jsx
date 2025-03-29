import React from 'react'
import useAuth from '../Hooks/useAuth'

const Heading = ({title, subtitle, color}) => {
  const {darkMode} = useAuth()
  return (
    <div className={`${darkMode ?  "text-white" : "text-[#111111]" } text-center container mx-auto`}>
        <h1 className={`text-2xl font-bold md:text-3xl lg:text-5xl ${color}`}>{title}</h1>
        <p className='mt-5 md:w-10/12 mx-auto'>{subtitle}</p>
    </div>
  )
}

export default Heading