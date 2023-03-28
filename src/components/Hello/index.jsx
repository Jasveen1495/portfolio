import React from 'react'

const Hello = ({ line = false }) => {
   return (
      <div className={`h-[${line ? "15vh" : "10vh"}] flex flex-col justify-center`}>
         <div className='text-3xl'><span className='text-4xl'>👋</span> Hello, I'm Jasveen Kaur</div>
         {
            line ?
               <div className='text-2xl'>
                  <span className='text-4xl opacity-0'>👋 </span>
                  <span>I aim to create better experience for </span>
                  <span className='line-through'>users</span>
                  <span className='font-cybg text-3xl text-priCol'> People</span>
               </div>
               : null
         }
      </div>
   )
}

export default Hello