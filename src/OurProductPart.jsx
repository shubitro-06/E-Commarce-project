import React from 'react'
import SecHead from './components/SecHead'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cmra from '../src/assets/Cmra.png'
import Card2 from './components/Card2';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from './components/Button';


const OurProductPart = () => {
     const settings = {
    className: "",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
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

                <SecHead
                    header="Our Products"
                    heading="Explore Our Products"
                />
                <div className='mt-15'>
                    <Slider {...settings}>
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                        <Card2
                      Name="CANON EOS DSLR Camera"
                      imgs={Cmra}
                      Price="360"
                      review="95"
                    />
                    
                    </Slider>
                </div>
                <div className='mt-15'>
                    
                <Button>
                    View All Product
                </Button>
                </div>
            </div>
        </>
    )
}

export default OurProductPart
