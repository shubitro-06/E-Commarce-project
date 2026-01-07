import React from 'react'
import SecHead from './components/SecHead'
import CatCamera from '../src/assets/CatCamera.png'
import CatSmartWatch from '../src/assets/CatSmartWatch.png'
import CatPhone from '../src/assets/CatPhone.svg'
import CatGamepad from '../src/assets/CatGamepad.png'
import CatComputer from '../src/assets/CatComputer.png'
import CatHeadphone from '../src/assets/CatHeadphone.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const CategoryPart = () => {

    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute -top-20 right-15 text-xl"
      onClick={onClick}
    >
        <FaArrowRightLong /> 
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute -top-20 right-25 text-xl "
      onClick={onClick}
    > 
    <FaArrowLeftLong />
    </div>
  );
}
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <div className="container">
                <div className='mt-35'>

                    <SecHead
                        header="Categories"
                        heading="Browse By Category"
                    />

                </div>
                <div className='mt-15'>
                    <Slider {...settings}>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white '>
                                <img src={CatPhone} alt="" className='fill-red-600' />
                                <p className='pt-4'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatComputer} alt="" />
                                <p className='pt-4'>Computer</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatSmartWatch} alt="" />
                                <p className='pt-4'>SmartWatch</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border mx-auto hover:bg-primary hover:fill-white hover:text-white '>
                                <img src={CatHeadphone} alt=""  />
                                <p className='pt-4'>Headphone</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatGamepad} alt="" />
                                <p className='pt-4'>Gamepad</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 hover:bg-primary hover:text-white border-[#00000057] border'>
                                <img src={CatCamera} alt="" className=''/>
                                <p className='pt-4'>Camera</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatPhone} alt="" />
                                <p className='pt-4'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatPhone} alt="" />
                                <p className='pt-4'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatPhone} alt="" />
                                <p className='pt-4'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatPhone} alt="" />
                                <p className='pt-4'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatPhone} alt="" />
                                <p className='pt-4'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-42.5 h-36.25 px-14.25 pt-6.25 pb-16 border-[#00000057] border hover:bg-primary hover:fill-white hover:text-white'>
                                <img src={CatPhone} alt="" />
                                <p className='pt-4'>Phones</p>
                            </div>
                        </div>
                       
                    </Slider>


                </div>
            </div>
        </>
    )
}

export default CategoryPart
