import React from 'react'

const Achievement = ({ title, data }) => {
   return (
      <div className=''>
         <h3 className='uppercase text-priCol text-2xl font-semibold'>{title}</h3>
         {
            title !== "skills" && data.map((item, index) => {
               return <div className='my-6 last:m-0' key={index}>
                  <h4 className='font-medium text-2xl'>{title === "education" ? item.course : item.position}</h4>
                  <div className='text-base mt-2 font-normal'>
                     <p className='italic mb-1'>{title === "education" ? item.college : item.company}</p>
                     <p className='capitalize'>{item.start} - {item.end}</p>
                  </div>
               </div>
            })
         }
         {
            title === "skills" ?
               <div className='mt-6'>
                  <div className=''>
                     <h4 className='text-2xl font-medium mb-4'>Design</h4>
                     <div className='flex flex-wrap gap-x-2 gap-y-2'>
                        {
                           data.map((item, index) => item.category === "design" && (
                              <div key={index} className='bg-priCol capitalize text-white w-max px-5 py-1 rounded-2xl'>{item.title}</div>
                           ))
                        }
                     </div>
                  </div>
                  <div className='my-5'>
                     <h4 className='text-2xl font-medium mb-4'>Tools</h4>
                     <div className='flex flex-wrap gap-x-2 gap-y-2'>
                        {
                           data.map((item, index) => item.category === "tool" && (
                              <div key={index} className='bg-priCol capitalize text-white w-max px-5 py-1 rounded-2xl'>{item.title}</div>
                           ))
                        }
                     </div>
                  </div>
                  <div className=''>
                     <h4 className='text-2xl font-medium mb-4'>Engineering</h4>
                     <div className='flex flex-wrap gap-x-2 gap-y-2'>
                        {
                           data.map((item, index) => item.category === "eng" && (
                              <div key={index} className='bg-priCol capitalize text-white w-max px-5 py-1 rounded-2xl'>{item.title}</div>
                           ))
                        }
                     </div>
                  </div>
               </div>
               : null
         }
      </div>
   )
}

export default Achievement