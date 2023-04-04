import React from 'react'
import { FiPhoneCall, FiLinkedin } from 'react-icons/fi'
// import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
   return (
      <div className='w-full px-10 md:px-0 flex py-7 justify-center bg-backGrey'>
         <div className='w-full flex flex-col md:w-[70%]'>
            <a href='mailto:kjasveen23@gmail.com' target='_blank' rel='noreferrer' className='font-medium underline text-xl md:text-3xl'>kjasveen23@gmail.com</a>
            <p className='md:w-[60%] my-7'>I am open to internships or freelance. Contact me if u want to enhance UX of your digital products.</p>
            <div className='flex'>
               <a target='_blank' rel='noreferrer' href='tel:919990297714' className='bg-priCol p-2 rounded-full'>
                  <FiPhoneCall className='p-0.5 stroke-white' size={28} />
               </a>
               <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jasveen-kaur-2308/' className='bg-priCol p-2 rounded-full ml-5'>
                  <FiLinkedin size={28} className='stroke-transparent fill-white p-0.5' />
               </a>
            </div>
         </div>
      </div>
   )
}

export default Contact