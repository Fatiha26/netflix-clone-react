import React from 'react';
import { first, second, third, forth } from '../constants';

const Footer = () => {
  return (
    <div className='grid grid-cols-4 gap-10 bg-black py-20
    pl-32'>
        <div className=" text-gray-400">
        <span className='underline'>Questions? Contact Us</span>
            {first.map((link,index)=>(
                <li key={index} className='pt-4'><a href={link.href} className='text-sm underline'>{link.text}</a></li>
            ))}
            <input type="text" placeholder='English' className='mt-8 w-32 py-1 px-3 text-white border border-gray-400'/>
            <p className='no-underline mt-4 text-sm'>Netflix Banglsdesh</p>
        </div>
        <div className="underline text-gray-400">
            {second.map((link,index)=>(
                <li key={index} className='pb-4'><a href={link.href} className='text-sm'>{link.text}</a></li>
            ))}
        </div>
        <div className="underline text-gray-400">
            {third.map((link,index)=>(
                <li key={index} className='pb-4'><a href={link.href} className='text-sm'>{link.text}</a></li>
            ))}
        </div>
        <div className="underline text-gray-400">
            {forth.map((link,index)=>(
                <li key={index} className='pb-4'><a href={link.href} className='text-sm'>{link.text}</a></li>
            ))}
        </div>
    </div>

  )
}

export default Footer
