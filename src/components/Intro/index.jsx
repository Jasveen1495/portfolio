import React from 'react'
import myPic from "../../images/myPic.png"

const Intro = () => {
   return (
      <div className='w-full py-5 min-h-[50vh] flex flex-col items-center'>
         <div className='h-[150px] hover:scale-150 duration-300 rounded-full overflow-hidden'>
            <img src={myPic} alt="Jasveen Kaur" className='h-full w-auto' />
         </div>
         <h3 className='capitalize font-medium text-2xl my-5'>hi, i’m jasveen kaur</h3>
         <p className='text-center font-medium text-5xl leading-[60px] relative'>
            Building digital products,<br />
            interfaces and <span className='underline decoration-wavy decoration-[3px] decoration-priCol'>experiences.</span>
         </p>
         <p className='capitalize text-lg my-8 text-center w-full md:w-[80%]'>Pursuing M.Des after B.Tech CSE because understanding the impact of technology on human brains is beyond the limits of engineering. Believes in curated designing to provide a great user experience, hence building user commitment.</p>
      </div>
   )
}

export default Intro