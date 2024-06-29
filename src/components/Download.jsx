import React from 'react';
import mobile from "../assets/image/mobile.jpg"

const Download = () => {
  return (
    <>
    <div className='border-b-8 border-gray-700 bg-black py-32
      grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-1 lg:gap-10 md:gap-1'>
      <div className='-mt-5 mx-auto'>
        <img src={mobile} alt="tv" className='w-96'/>
      </div>
      <div className='mr-28 lg:mr-28'>
          <h1 className='text-4xl lg:text-5xl md:text-4xl font-extrabold mb-8'>Download your shows to watch offline</h1>
          <p className='text-md mb-2 lg:mb-8 md:mb-2 lg:text-2xl md:text-md'>Save your favorites easily and always have<br/>something to watch.</p>
      </div>
    </div>
    </>
  )
}

export default Download
