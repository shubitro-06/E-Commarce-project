import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Rate } from 'antd';
import { useNavigate } from "react-router";

const Card = ({ Name, price, DisPrice, review, imgs, percent,rating,id }) => {

    let navigate = useNavigate();
   
    return (
        <>
            <div className='font-pop h-87.5 w-67.5 '>
                <div className='relative group overflow-hidden' >

                    <img src={imgs} alt="" onClick={()=> navigate(`/Details/${id}`)} />
                    <div className='flex justify-between '>
                        <div className='absolute top-3 left-3'>
                            <h6 className='bg-primary text-white h-6.5 text-center w-14.75'>-{percent}%</h6>
                        </div>
                        <div className='absolute top-3 right-3 flex flex-col gap-2'>
                            <IoIosHeartEmpty className='bg-white h-8.5 w-8.5 rounded-full text-center' />
                            <MdOutlineRemoveRedEye className='bg-white h-8.5 w-8.5 rounded-full text-2xl text-center' />
                        </div>
                    </div>
                    <button className='bg-black w-full py-2 px-21.75 text-white absolute -bottom-11 group-hover:bottom-0 duration-300 ease-linear'>
                        Add to Cart
                    </button>
                </div>
                <h2 className='text-[16px] font-medium font-pop'>{Name}</h2>
                <div className='flex gap-3 text-[16px] font-medium font-pop py-2'>
                    <h5 className='text-primary'>${DisPrice} </h5>
                    <h5 className='text-[#00000049] line-through'>${price} </h5>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='flex text-[#FFAD33]'>
                        <Rate allowHalf defaultValue={rating} />
                    </div>
                    <h4 className='text-[#00000046]'>({review})</h4>
                </div>
            </div>
        </>
    )
}

export default Card
