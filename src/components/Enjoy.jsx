import React from 'react'
import tv from "../assets/image/tv.png"
const Enjoy = () => {
  return (
    <div className='border-b-8 border-gray-700 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-1 lg:gap-20 md:gap-1 bg-black py-16'>
      <div className='mt-8 ml-8 lg:mt-24 lg:ml-32 md:mt-8 md:ml-8'>
          <h1 className='text-4xl lg:text-5xl md:text-4xl font-extrabold mb-8'>Enjoy on your TV</h1>
          <p className='text-md mb-2 lg:mb-8 md:mb-2 lg:text-2xl md:text-md'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <div className='mt-4 lg:mt-12 md:mt-0'>
        <img src={tv} alt="tv" className='w-96'/>
      </div>
    </div>
  )
}

export default Enjoy
