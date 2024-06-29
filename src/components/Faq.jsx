import React, { useState } from 'react'
import Mfaq from './Mfaq';
import { quesAns } from '../constants';
const Faq = () => {
    const [data, setData] = useState(quesAns);
  return (
    <div className='border-b-8 border-gray-700 gap-20 bg-black py-16 flex items-center flex-col'>
       <h1 className='text-5xl font-extrabold mb-8'>Frequently Asked Questions</h1>

       <div className='w-1/2'>
        <section>
            {data.map((curElem)=>{
                const {id} = curElem;
                return <Mfaq key={id} {...curElem} />
            })}
        </section>

       </div>
  </div>
  )
}

export default Faq
