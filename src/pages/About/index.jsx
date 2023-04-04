import React, { useEffect } from 'react'
import Intro from '../../components/Intro'
import Achievement from '../../components/Achievement'
import Contact from '../../components/Contact'

const About = ({ scroll = false, experiences, skills }) => {
   const education = [
      {
         course: "M.Des. UI/UX",
         college: "GUDS, Gujarat University, Ahmedabad",
         start: 'Aug\'22',
         end: 'Present'
      },
      {
         course: "B.Tech. CSE",
         college: "GTBIT, Indraprastha University, New Delhi",
         start: 'Aug\'18',
         end: 'June\'22'
      }
   ]

   useEffect(() => {
      if (scroll) {
         setTimeout(() => {
            document.documentElement.scrollTo({
               top: document.documentElement.scrollHeight,
               behavior: "smooth"
            })
         }, 100);
      }
      else {
         document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
         })
      }
   }, [scroll])

   return (
      <>
         <div className='px-10 md:flex md:flex-col md:items-center'>
            <Intro />
            <div className='md:flex mb-10 w-full md:w-[75%] h-max gap-10'>
               <div className='md:w-1/2 w-full mb-10 md:mb-0 min-h-full flex flex-col'>
                  <div className='w-full h-1/2 mb-10'>
                     <Achievement title="education" data={education} />
                  </div>
                  <div className='w-full h-1/2'>
                     <Achievement title="experience" data={experiences} />
                  </div>
               </div>
               <div className='md:w-1/2 w-full min-h-full'>
                  <Achievement title="skills" data={skills} />
               </div>
            </div>
         </div>
         <Contact />
      </>
   )
}

export default About