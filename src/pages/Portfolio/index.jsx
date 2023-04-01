import React from 'react'
import Hello from '../../components/Hello'
import ProjectCard from '../../components/ProjectCard'

const Portfolio = ({ projects }) => {
   return (
      <div className='md:px-16 px-5 mb-10'>
         <Hello line={true} />
         <div className='px-5'>
            {
               projects.length !== 0 && projects.map((project, index) => project.category === "imp" && <ProjectCard key={index} flexPos={index + 1} data={project} />)
            }
         </div>
         <div className='my-5'>
            <span className={`text-priCol text-4xl font-cybg`}>Other</span>
            <span className={`text-3xl`}> Work</span>
            <span className={`text-7xl leading-6 text-priCol`}>.</span>
         </div>
         <div className='columns-2 gap-10 px-5'>
            {
               projects.length !== 0 && projects.map((project, index) => project.category === "other" && <ProjectCard key={index} orientation={"por"} data={project} />)
            }
         </div>
      </div>
   )
}

export default Portfolio