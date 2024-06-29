import React from 'react';
import mobile from "../assets/image/mobile.jpg"

const Download = () => {
  return (
    <>
    <div className='border-b-8 border-gray-700 grid grid-cols-2 gap-10 bg-black py-32'>
      <div className='-mt-5 mx-auto'>
        <img src={mobile} alt="tv" className='w-96'/>
      </div>
      <div className='mr-28'>
          <h1 className='text-6xl font-extrabold mb-8'>Download your shows to watch offline</h1>
          <p className='text-2xl mb-8'>Save your favorites easily and always have<br/>something to watch.</p>
      </div>
    </div>
    </>
  )
}

export default Download
