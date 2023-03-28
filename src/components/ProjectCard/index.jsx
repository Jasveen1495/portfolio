import React from 'react'

const ProjectCard = ({ orientation = "land", flexPos, data }) => {
   return (
      <div className={`w-full flex ${orientation === "por" ? "" : window.innerHeight < 850 ? "md:h-[40vh]" : "md:h-[30vh]"} ${orientation === "por" ? "" : flexPos % 2 !== 0 ? "md:justify-end" : "md:justify-start"} mt-10 md:mb-16 last:mb-8 `}>
         <div className={`flex flex-col-reverse ${orientation === "por" ? "justify-center items-center" : flexPos % 2 === 0 ? "md:flex-row md:w-[90%]" : "md:flex-row-reverse md:w-[90%]"} w-full h-full`}>
            <div className={`w-full md:h-full flex flex-col p-5 md:p-0 ${orientation === "por" ? "w-[85%] mt-2" : flexPos % 2 === 0 ? "md:items-end md:w-3/5 md:pr-14" : "md:items-start md:w-3/5 md:pl-14"}`}>
               <h5 className={`uppercase mb-1 md:my-2 text-grey text-sm md:text-base`}>{data.keyword}</h5>
               <h1 className={`capitalize mb-3 md:mb-7 ${orientation === "por" ? "md:mb-0" : flexPos % 2 === 0 ? "md:text-right" : "md:text-left"} font-medium text-base md:text-2xl`}>{data.heading}</h1>
               <h1 className={`${orientation === "por" ? "hidden" : flexPos % 2 === 0 ? "md:text-right" : "md:text-left"} text-sm`}>{data.desc}</h1>
               <a href={data.link} target='_blank' rel='noreferrer' className='bg-priCol mt-3 md:mt-7 text-sm rounded-[20px] w-max text-white py-2 px-5'>View Case Study</a>
            </div>
            <div className={`${orientation === "por" ? "w-[90%]" : "md:w-2/5"} w-full md:h-full rounded`}>
               <img src={data.image.url} alt={data.image.name} className='shadow-default w-full md:h-full object-cover' />
            </div>
         </div>
      </div>
   )
}

export default ProjectCard