import React, { useState } from 'react'

const Mfaq = ({question, answer}) =>{
   
   const [show, setShow] = useState(false);
   
    return(
        <>
            <div className="flex items-center justify-between bg-slate-800 mb-2 px-8">
            <p className='text-2xl text-justify'>{question}</p>
            <p onClick={() => setShow(!show)} className='py-8 px-8'>
               {show ? <i className="fa-solid fa-x fa-xl" /> : <i className="fa-solid fa-plus  fa-xl"></i>}
            </p>
            </div>
            { show && <p className='text-md py-2 px-4 text-justify bg-slate-800 mb-2'>{answer}</p>}
        </>
    )
}

export default Mfaq;