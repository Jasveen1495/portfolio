import React from 'react'

const Achievement = ({ title, data }) => {
   return (
      <div className=''>
         <h3 className='uppercase text-priCol text-2xl font-semibold'>{title}</h3>
         {
            title !== "skills" && data.map((item, index) => {
               return <div className='my-3 last:m-0' key={index}>
                  <h4 className='font-medium text-2xl'>{title === "education" ? item.course : item.position}</h4>
                  <div className='text-base mt-2 font-normal'>
                     <p className='italic mb-1'>{title === "education" ? item.college : item.company}</p>
                     <p className='capitalize'><span>{item.start}</span> - <span className={`${item.end.toLowerCase() === "present" ? 'text-priCol' : 'text-black'}`}>{item.end}</span></p>
                  </div>
               </div>
            })
         }
         {
            title === "skills" ?
               <div className='mt-3'>
                  <div className=''>
                     <h4 className='text-2xl font-medium mb-3'>Design</h4>
                     <div className='flex flex-wrap gap-x-2 gap-y-2'>
                        {
                           data.design?.length !== 0 && data.design?.map((item, index) => (
                              <div key={index} className='bg-priCol capitalize text-white w-max px-5 py-1 rounded-2xl'>{item.title}</div>
                           ))
                        }
                     </div>
                  </div>
                  <div className='my-5'>
                     <h4 className='text-2xl font-medium mb-3'>Tools</h4>
                     <div className='flex flex-wrap gap-x-2 gap-y-2'>
                        {
                           data.tool?.length !== 0 && data.tool?.map((item, index) => (
                              <div key={index} className='bg-priCol capitalize text-white w-max px-5 py-1 rounded-2xl'>{item.title}</div>
                           ))
                        }
                     </div>
                  </div>
                  <div className=''>
                     <h4 className='text-2xl font-medium mb-3'>Engineering</h4>
                     <div className='flex flex-wrap gap-x-2 gap-y-2'>
                        {
                           data.eng?.length !== 0 && data.eng?.map((item, index) => (
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