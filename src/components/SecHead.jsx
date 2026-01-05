import React from 'react'

const SecHead = ({ header, heading }) => {
  return (
    <>
      <div>
           <div className='flex gap-4 mb-6 items-center'>
               <div className='w-5 h-10 bg-primary rounded-sm'></div>
               <h5 className='font-pop text-primary text-[16px] font-semibold'>{header}</h5>
           </div>
           <h2 className='text-[36px] font-semibold '>{heading}</h2>
      </div>
    </>
  )
}

export default SecHead
