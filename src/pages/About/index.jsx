import React, { useEffect, useState } from 'react'
import Intro from '../../components/Intro'
import Achievement from '../../components/Achievement'
import Contact from '../../components/Contact'

const About = ({ scroll = false }) => {
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
   // eslint-disable-next-line
   const [experiences, setExperiences] = useState([
      {
         _id: "0",
         position: "UI/UX Designer",
         company: "Revolux Solutions Pvt. Ltd.",
         start: "March'21",
         end: "July'21",
         visibility: true
      },
      {
         _id: "1",
         position: "Graphic Design Intern",
         company: "Peacock Solar",
         start: "March'21",
         end: "April'21",
         visibility: true
      },
   ])
   // eslint-disable-next-line
   const [skills, setSkills] = useState([
      {
         _id: "0",
         category: "design",
         title: "design thinking"
      },
      {
         _id: "1",
         category: "design",
         title: "UI/UX"
      },
      {
         _id: "2",
         category: "design",
         title: "user research"
      },
      {
         _id: "3",
         category: "design",
         title: "info Architecture"
      },
      {
         _id: "4",
         category: "design",
         title: "wireframing"
      },
      {
         _id: "5",
         category: "design",
         title: "prototyping"
      },
      {
         _id: "6",
         category: "design",
         title: "persona hypothesis"
      },
      {
         _id: "7",
         category: "design",
         title: "storyboarding"
      },
      {
         _id: "8",
         category: "design",
         title: "customer journey mapping"
      },
      {
         _id: "9",
         category: "design",
         title: "mock ups"
      },
      {
         _id: "10",
         category: "design",
         title: "branding"
      },
      {
         _id: "11",
         category: "design",
         title: "visual design"
      },
      {
         _id: "12",
         category: "tool",
         title: "adobe illustrator"
      },
      {
         _id: "13",
         category: "tool",
         title: "figma"
      },
      {
         _id: "14",
         category: "eng",
         title: "HTML"
      },
      {
         _id: "15",
         category: "eng",
         title: "CSS"
      },
      {
         _id: "16",
         category: "eng",
         title: "GitHub"
      },
   ])

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
               <div className='md:w-1/2 w-full mb-10 md:mb-0 min-h-full flex flex-col gap-10'>
                  <div className='w-full h-1/2'>
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