import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
   const { pathname } = useLocation();
   const links = [
      {
         title: "/",
         tag: <Link to="/">Portfolio</Link>
      },
      {
         title: "/about",
         tag: <Link to="/about">About</Link>
      },
      {
         title: "Resume",
         tag: <a href="/pdf/resume_Jasveen-Kaur.pdf" target='_blank' rel='noreferrer'>Resume</a>
      },
      {
         title: "/contact",
         tag: <Link to="/contact">Contact</Link>
      },
   ]

   return (
      <div className={`${window.innerHeight < 850 ? "md:h-[13vh]" : "md:h-[10vh]"} h-[10vh] justify-center md:justify-start md:px-16 flex items-center w-full`}>
         <ul className='flex'>
            {
               links.map((link, index) => {
                  return <li key={index} className={`md:mr-8 last:mr-0 mr-5 uppercase ${link.title === pathname ? 'text-priCol font-semibold' : 'text-black'}`}>{link.tag}</li>
               })
            }
         </ul>
      </div>
   )
}

export default Header