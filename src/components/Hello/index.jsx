import React from 'react'

const Hello = ({ line = false }) => {
   return (
      <div className={`h-[${line ? "15vh" : "10vh"}] mt-10 mb-20 flex flex-col justify-center`}>
         <div className='text-4xl'><span className='text-4xl leading-[54px]'>👋</span> Hello, I'm Jasveen Kaur</div>
         {
            line ?
               <div className='text-4xl leading-[54px]'>
                  <span className='text-4xl leading-[54px] opacity-0'>👋 </span>
                  <span>I aim to create better experience for </span>
                  <span className='line-through'>users</span>
                  <span className='font-cybg text-5xl leading-[54px] text-priCol'> People</span>
               </div>
               : null
         }
      </div>
   )
}

export default Hello