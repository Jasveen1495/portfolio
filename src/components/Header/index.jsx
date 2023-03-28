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
         tag: <a href="/pdf/Kushdeep Singh - Resume.pdf" target='_blank' rel='noreferrer'>Resume</a>
      },
      {
         title: "/contact",
         tag: <Link to="/contact">Contact</Link>
      },
   ]

   return (
      <div className={`${window.innerHeight < 850 ? "h-[13vh]" : "h-[10vh]"} px-16 flex items-center w-full`}>
         <ul className='flex'>
            {
               links.map((link, index) => {
                  return <li key={index} className={`mr-8 uppercase ${link.title === pathname ? 'text-priCol font-semibold' : 'text-black'}`}>{link.tag}</li>
               })
            }
         </ul>
      </div>
   )
}

export default Header