import React, { useState } from 'react'

const Mfaq = ({question, answer}) =>{
   
   const [show, setShow] = useState(false);
   
    return(
        <>
            <div className="flex items-center justify-between bg-slate-500 mb-4 px-8 pt-4">
            <p className='text-3xl mb-8'>{question}</p>
            <p onClick={() => setShow(!show)}>
               {show ? <i className="fa-solid-2x fa-minus" /> : <i className="fa-solid fa-plus"></i>}
            </p>
            </div>
            { show && <p className=''>{answer}</p>}
        </>
    )
}

export default Mfaq;