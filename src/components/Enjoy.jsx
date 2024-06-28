import React from 'react'
import tv from "../assets/image/tv.png"

const Enjoy = () => {
  return (
    <div className='border-b-8 border-gray-700'>
      <div >
          <h1>Enjoy on your TV</h1>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <div>
        <img src={tv} alt="tv" />
      </div>
    </div>
  )
}

export default Enjoy
