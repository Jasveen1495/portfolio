import React from 'react'

const ProjectCard = ({ orientation = "land", flexPos, data }) => {
   return (
      <div className={`w-full flex ${orientation === "por" ? "justify-center" : window.innerHeight < 850 ? "md:h-[40vh]" : "md:h-[30vh]"} ${orientation === "por" ? "" : flexPos % 2 !== 0 ? "md:justify-end" : "md:justify-start"} mt-10 mb-16 last:mb-8 `}>

         <div className={`flex flex-col-reverse ${orientation === "por" ? "justify-center md:w-[85%] lg:w-[70%] items-center" : flexPos % 2 === 0 ? "md:flex-row md:w-[90%]" : "md:flex-row-reverse md:w-[90%]"} w-full h-full`}>

            <div className={`w-full md:h-full flex flex-col mt-8 px-2 md:p-0 ${orientation === "por" ? "w-[85%]" : flexPos % 2 === 0 ? "md:items-end md:w-3/5 md:pr-14" : "md:items-start md:w-3/5 md:pl-14"}`}>
               <h5 className={`uppercase text-grey text-sm md:text-base`}>{data.keyword}</h5>
               <h1 className={`capitalize mt-2 md:mt-0 leading-6 ${orientation === "por" ? "" : flexPos % 2 === 0 ? "md:text-right" : "md:text-left"} font-semibold md:font-medium text-lg md:text-2xl`}>{data.heading}</h1>
               <h1 className={`${orientation === "por" ? "hidden" : flexPos % 2 === 0 ? "md:text-right mt-4" : "md:text-left mt-4"} text-grey text-sm`}>{data.desc}</h1>
               <a href={data.link} target='_blank' rel='noreferrer' className='bg-priCol text-sm rounded-[20px] mt-4 w-max text-white py-2 px-5'>View Case Study</a>
            </div>

            <div className={`${orientation === "por" ? "w-[90%]" : "md:w-2/5 hover:scale-110 duration-500"} w-full md:h-full rounded`}>
               <img src={data.image.url} alt={data.image.name} className='shadow-default w-full md:h-full object-cover' />
            </div>

         </div>
      </div>
   )
}

export default ProjectCard