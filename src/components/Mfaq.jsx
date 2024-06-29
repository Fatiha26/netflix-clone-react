import React, { useState } from 'react'

const Mfaq = ({question, answer}) =>{
   
   const [show, setShow] = useState(false);
   
    return(
        <>
            <div className="">
           <p onClick={()=> setShow(!show)}>{ show? "➖" : "➕"}</p>
            <h3>{question}</h3>
            </div>
            { show && <p className=''>{answer}</p>}
        </>
    )
}

export default Mfaq;