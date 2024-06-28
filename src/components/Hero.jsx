import React from 'react'
import logo from "../assets/image/logo.png";
import bgImage from "../assets/image/bg-2.jpg";

const Hero = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center border-b-8 border-gray-700'
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})` }}>
        <nav className='flex flex-wrap justify-between mx-40 py-8'> 
            <img src={logo} alt="logo" className='w-36'/>
            <a href="#" className=' pt-1.5 p px-5 rounded-lg bg-red-600 text-md font-semibold hover:bg-red-700 transition duration-75'>Sign In</a>
        </nav>
        <div className='flex flex-wrap items-center flex-col mt-36'>
            <h1 className='text-5xl font-extrabold mb-8'>Unlimited movies, TV shows, and more</h1>
            <p className='text-2xl mb-5'>Watch anywhere. Cancel anytime.</p>
            <p className='text-xl mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className='flex items-center pl-80'>
            <input type="text" placeholder='Email address' className='w-96 px-5 py-5 border border-slate-100 bg-transparent rounded-md '/>
            <a href="#" className='px-5 py-4 rounded-lg bg-red-600 text-2xl font-bold ml-2 hover:bg-red-700 transition duration-75'> Get Started <i className="fa-solid fa-angle-right ml-4"></i></a>
        </div>
    </div>
  )
}

export default Hero
