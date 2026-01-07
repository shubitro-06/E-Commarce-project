import React from 'react'
import CountDown2 from './CountDown2'


const MusicPart = () => {
  return (
    <>
      <div className="container">
        <div className='bg-[url(src/assets/Music.png)] h-125 w-330 bg-cover bg-center bg-no-repeat mt-35 mb-25'>
        <div className='pl-14 pt-17.25'>
 
            <p className='text-[#00FF66] text-[16px] font-semibold font-pop'>Categories</p>
            <h1 className='text-white font-semibold text-5xl py-8'>Enhance Your <br />Music Experience</h1>
            <CountDown2></CountDown2>
            <div className='pt-10'>

            <button className='bg-[#00FF66] py-4 px-12 rounded-sm '>
                Buy now!
            </button>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default MusicPart
