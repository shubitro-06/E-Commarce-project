import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bnr from '../src/assets/Banner.jpg'

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='h-3 w-3 rounded-full bg-gray-500'>
      </div>
    )
    };
    return (
        <>
            <div>

                <div className="container">
                    <div className='flex gap-x-12.25'>

                        <div className='pt-14 pr-5.5 flex border-r border-[#0000005d] w-[20%] '>
                            <div className=''>
                                <ul className='w-54.25 flex flex-col gap-y-4 '>
                                    <li className='flex items-center justify-between'>
                                        Woman’s Fashion
                                        <FaAngleRight />
                                    </li>
                                    <li className='flex items-center justify-between'>
                                        Men’s Fashion
                                        <FaAngleRight />
                                    </li>
                                    <li>Electronics </li>
                                    <li> Home & Lifestyle</li>
                                    <li> Medicine </li>
                                    <li> Sports & Outdoor</li>
                                    <li> Baby’s & Toys </li>
                                    <li> Groceries &</li>
                                    <li>Health & Beauty</li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-[80%] mt-10'>
                            <Slider {...settings}>
                                <div><img src={Bnr} alt="" /></div>
                                <div><img src={Bnr} alt="" /></div>
                                <div><img src={Bnr} alt="" /></div>
                                <div><img src={Bnr} alt="" /></div>
                                <div><img src={Bnr} alt="" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
