import React, { useState } from 'react'
import Mfaq from './Mfaq';
import { quesAns } from '../constants';
const Faq = () => {
    const [data, setData] = useState(quesAns);
  return (
    <div className='border-b-8 border-gray-700 gap-20 bg-black py-16 flex items-center flex-col'>
       <h1 className='text-5xl font-extrabold'>Frequently Asked Questions</h1>
       <div className='w-1/2'>
        <section>
            {data.map((curElem)=>{
                const {id} = curElem;
                return <Mfaq key={id} {...curElem} />
            })}
        </section>
       </div>
       <div className='flex items-center flex-col'>
       <p className='text-xl mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex items-center'>
            <input type="text" placeholder='Email address' className='w-96 px-5 py-5 border border-slate-100 bg-transparent rounded-md '/>
            <a href="#" className='px-5 py-4 rounded-lg bg-red-600 text-2xl font-bold ml-2 hover:bg-red-700 transition duration-75'> Get Started <i className="fa-solid fa-angle-right ml-4"></i></a>
        </div>
       </div>
  </div>
  )
}

export default Faq
