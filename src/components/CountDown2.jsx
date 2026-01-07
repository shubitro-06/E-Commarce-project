import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time'; 

const CountDown2 = () => {
    const conduct_date = '2026-03-25 16:54:00';
    const [Time,setTime] = useState({})
    
    
    useEffect( ()=>{
        setInterval(() => {
            
            const countDown = countDownDateAndTime(conduct_date);
            setTime(countDown)

        }, 1000);
    }
        ,[])
  
  return (
    <>
       <div className='flex gap-9.5 items-center'>
            <div className='bg-white rounded-full text-center py-3.5 px-3.75 h-17 w-17'>
                <div className='flex  justify-center gap-5 font-bold text-[16px]'>
                    {Time.days}    
                </div>
                <p className='text-[11px] font-medium font-pop'>Days</p>
            </div>
            <div className='bg-white rounded-full text-center py-3.5 px-3.75 h-17 w-17'>
                <div className='flex gap-5 font-bold text-[16px] justify-center'>
                    {Time.hours}
                </div>
                <p className='text-[11px] font-medium font-pop'>Hours </p>
            </div>
            <div className='bg-white rounded-full  py-3.5 px-3.75 h-17 w-17'>
                <div className='flex gap-12 font-bold text-[16px] justify-center'>
                   {Time.minutes}
                </div>
                <p className='text-[11px] font-medium font-pop' >Minutes </p>
            </div>
            <div className='bg-white rounded-full text-center py-3.5 px-3.75 h-17 w-17'>
                <div className='font-bold text-[16px]'>
                   {Time.seconds}
                </div>
                <p className='text-[11px] font-medium font-pop'>Seconds</p>
            </div>
        </div>
    </>
  )
}

export default CountDown2
