import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Button from './Button';

const Card2 = ({ imgs, Name, Price, review }) => {
  return (
    <div>
      <div className='font-pop h-87.5 w-67.5 '>
        <div className='relative  group overflow-hidden'>

          <img src={imgs} alt="" />

          <div className='absolute top-3 right-3 flex flex-col gap-2'>
            <IoIosHeartEmpty className='bg-white h-8.5 w-8.5 rounded-full text-center' />
            <MdOutlineRemoveRedEye className='bg-white h-8.5 w-8.5 rounded-full text-2xl text-center' />
          </div>
          <button className='bg-black w-full py-2 px-21.75 text-white absolute -bottom-11 group-hover:bottom-0 duration-300 ease-linear cursor-pointer'>
            Add to Cart
          </button>
        </div>
        <h2 className='text-[16px] font-medium font-pop pt-4 pb-2'>{Name}</h2>
        <div className='flex gap-2'>
          <h5 className='text-primary'>${Price} </h5>
          <div className='flex gap-2 items-center'>
            <div className='flex text-[#FFAD33]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h4 className='text-[#00000046]'>({review})</h4>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card2
