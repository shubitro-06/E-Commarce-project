import React from 'react'
import SecHead from './components/SecHead'
import Card from './components/Card'
import keyboard from '../src/assets/keyboard.png'
import CountDown from './components/CountDown'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './components/Button'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const FlashSalePart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
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
  return (
    <>
      <div className="container">
        <div className='mt-38.5'>
          <div className='flex gap-21.75 items-baseline-last'>

            <SecHead
              header="Today's"
              heading="Flash Sales"
            />
            <CountDown></CountDown>
          </div>

          <div className='mt-10'>
            <Slider {...settings}>

              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />
              <Card
                imgs={keyboard}
                Name="AK-900 Wired Keyboard"
                DisPrice="960"
                price="1160"
                review="75"
                percent="40"
              />

            </Slider>
          </div>
        </div >
        <div className='mt-9.25'>

          <Button> View All Products</Button>
        </div>
      </div>
    </>
  )
}

export default FlashSalePart
