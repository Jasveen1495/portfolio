import React from 'react'

const Hello = ({ line = false }) => {
   return (
      <div className={`h-[${line ? "15vh" : "10vh"}] md:mt-10 mt-5 mb-16 md:mb-20 flex flex-col justify-center`}>
         <div className='md:text-4xl text-xl'><span className='md:text-4xl md:leading-[54px]'>👋</span> Hello, I'm Jasveen Kaur</div>
         {
            line ?
               <div className='flex pt-3'>
                  <div className='md:text-4xl text-xl leading-[18px] md:leading-[54px] opacity-0'>👋</div>
                  <div className='md:text-4xl text-xl leading-[18px] md:leading-[54px] pl-2'>
                     <span>I aim to create better experience for </span>
                     <span className='line-through'>users</span>
                     <span className='font-cybg md:text-5xl text-2xl md:leading-[54px] text-priCol'> People</span>
                  </div>
               </div>
               : null
         }
      </div>
   )
}

export default Hello