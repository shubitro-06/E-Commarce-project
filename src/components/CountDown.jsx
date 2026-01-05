import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const CountDown = () => {
    const conduct_date = '2026-01-10 16:54:00';
    const [Time, setTime] = useState({})

    useEffect(() => {
        setInterval(() => {

            const countDown = countDownDateAndTime(conduct_date);
            setTime(countDown)
        }, 1000)
    }, [])

    return (
        <div className='flex gap-9.5 items-center'>
            <div>
                <p className='text-[16px] font-medium font-pop'>Days <br /></p>
                <div className='flex  justify-center gap-5 font-bold text-[36px]'>
                    0{Time.days}
                    <h6 className='text-primary'>:</h6>
                </div>
            </div>
            <div>
                <p className='text-[16px] font-medium font-pop'>Hours <br /></p>
                
                <div className='flex gap-5 font-bold text-[36px] justify-center'>
                    {Time.hours}<h6 className='text-primary '>:</h6>
                </div>
            </div>
            <div className='flex-col justify-center'>
                <p className='text-[16px] font-medium font-pop' >Minutes <br /></p>
                
                <div className='flex  gap-12 font-bold text-[36px]'>
                   {Time.minutes}<h6 className='text-primary '>:</h6>
                </div>
            </div>
            <div className='flex-col items-center'>
                <p className='text-[16px] font-medium font-pop'>Seconds<br /></p>
                <div className='font-bold text-[36px]'>
                   {Time.seconds}
                </div>
            </div>
        </div>
    )
}

export default CountDown
