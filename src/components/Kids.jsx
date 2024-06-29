import React from 'react';
import kids from "../assets/image/kid.png"

const Kids = () => {
  return (
    <div className='border-b-8 border-gray-700 grid grid-cols-2 gap-10 bg-black py-32'>
    <div className='-mt-5 mx-auto'>
      <img src={kids} alt="tv" className='w-96'/>
    </div>
    <div className='mr-28'>
        <h1 className='text-6xl font-extrabold mb-8'>Create profiles for kids</h1>
        <p className='text-2xl mb-8'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
    </div>
  </div>
  )
}

export default Kids
