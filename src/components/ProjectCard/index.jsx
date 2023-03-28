import React from 'react'

const ProjectCard = ({ orientation = "land", flexPos, data }) => {
   return (
      <div className={`w-full h-[30vh] flex ${flexPos % 2 !== 0 ? "justify-end" : "justify-start"} mt-10 mb-16`}>
         <div className={`flex ${flexPos % 2 === 0 ? "flex-row" : "flex-row-reverse"} w-[90%] h-full`}>
            <div className={`w-3/5 flex flex-col ${flexPos % 2 === 0 ? "items-end pr-14" : "items-start pl-14"}`}>
               <h5 className={`uppercase my-2 text-grey text-base`}>{data.keyword}</h5>
               <h1 className={`capitalize ${flexPos % 2 === 0 ? "text-right" : "text-left"} font-medium text-2xl`}>{data.heading}</h1>
               <h1 className={`${flexPos % 2 === 0 ? "text-right" : "text-left"} my-7 text-sm`}>{data.desc}</h1>
               <a href={data.link} target='_blank' rel='noreferrer' className='bg-priCol text-sm rounded-[20px] text-white py-2 px-5'>View Case Study</a>
            </div>
            <div className={`w-2/5 h-full rounded shadow-default overflow-hidden`}>
               <img src={data.image.url} alt="" />
            </div>
         </div>
      </div>
   )
}

export default ProjectCard