import React from 'react'
import tv from "../assets/image/tv.png"
import gif from "../assets"

const Enjoy = () => {
  return (
    <div className='border-b-8 border-gray-700 grid grid-cols-2 gap-20 bg-black py-16'>
      <div className='mt-32 ml-32'>
          <h1 className='text-5xl font-extrabold mb-8'>Enjoy on your TV</h1>
          <p className='text-2xl mb-8'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <div className='mt-20'>
        <img src={tv} alt="tv" className='w-96'/>
      </div>
    </div>
  )
}

export default Enjoy
