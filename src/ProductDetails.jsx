import React, { useEffect, useState } from 'react'
import BreadCrump from './components/BreadCrump'
import { useParams } from "react-router";
import axios from 'axios';
import { Rate } from 'antd';
import Button from './components/Button';
import Redeli from './assets/Redeli.png';
import { IoIosHeartEmpty } from "react-icons/io";
import SecHead from './components/SecHead';
import Card from './components/Card';
import keyboard from './assets/keyboard.png';
import DetSkeleton from './components/DetSkeleton';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [productImgs, setProductImgs] = useState([])
    const [counter, setCounter] = useState(0)
    const [load,setLoad] = useState(true)
    let { id } = useParams();

    async function getAllData() {
        await axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data)
                console.log(res.data)
                setProductImgs(res.data.images)
                setLoad(false)
            })
    }

    useEffect(() => {
        getAllData()
    }, [id])

    return (
        <>
            <div className="container">
                <BreadCrump className="my-20" />

                {/* {
                    product.map((item) => {
                        return (

                        )
                        })
                        } */}
              {
                !load ?
                <div className='flex justify-between'>
                    <div>
                        {
                            productImgs.map((item) => {
                                return (
                                    <img src={item} alt="" className='w-[170px] h-[154px]' />
                                )
                            })
                        }
                    </div>
                    <img src={product.thumbnail} alt="" className='w-[500px] h-[600px] ' />
                    <div>
                        <h1 className='font-semibold text-2xl'>{product.title} </h1>
                        <div className='flex gap-x-2 py-4'>

                            {/* here is a change with sirs code on passing rating defaultvalue={product.rating || 0} */}
                            <Rate allowHalf value={product?.rating ?? 0} />
                            <h4 className='text-[#00000046]'>({product.reviews ? product.reviews.length : null} reviews)</h4>
                            <p className='text-[#00000046]'>/</p>
                            <p className='text-[#00FF66]'>In Stock</p>
                        </div>
                        <p className='text-2xl'>${product.price}</p>
                        <p className='font-pop py-6 border-b border-[#00000046] w-100'>{product.description}</p>

                        <div className='flex items-center gap-3  py-6' >
                            <p className='text-xl'> Colors :</p>
                            <div className='flex gap-2 cursor-pointer'>
                                <div className='h-5 w-5 bg-[#A0BCE0] rounded-full hover:border-3 hover:ease-linear hover:w-4.25 hover:h-4.25'></div>
                                <div className='h-5 w-5 bg-[#E07575] rounded-full hover:border-3 hover:ease-linear hover:w-4.25 hover:h-4.25'></div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-xl'> Size :</p>
                            <div className='flex gap-2 cursor-pointer'>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white hover:border-0  '>
                                    <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white hover:border-0  '>
                                    <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white hover:border-0  '>
                                    <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white hover:border-0  '>
                                    <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white  hover:border-0 '>
                                    <p className='text-sm font-medium font-pop'>XS</p>
                                </div>

                            </div>
                        </div>

                        <div className='flex gap-4 py-6 '>
                            <div className='flex items-center' >
                                <div className='text-2xl font-bold border border-[#00000046] h-11 w-10 text-center cursor-pointer flex justify-center items-center'
                                    onClick={() => {  if (counter > 0) setCounter(counter - 1) }}>
                                    <FaMinus />
                                </div>
                                <div className='border border-[#00000046] h-11 w-20 text-center flex justify-center items-center'>
                                    <p>{counter}</p>
                                </div>
                                <div className='text-2xl font-semibold border border-[#00000046] h-11 w-10 t cursor-pointer flex justify-center items-center' onClick={() => { setCounter(counter + 1) }}>
                                    <FaPlus  />
                                </div>
                            </div>
                            <Button className="w-41.25 h-11 pb-5 px-0 mx-0 cursor-pointer">
                                <p >Buy Now</p>
                            </Button>

                            <div className='text-2xl font-semibold border border-[#00000046] h-11 w-10 text-center flex justify-center items-center cursor-pointer'>
                                <IoIosHeartEmpty className='' />
                            </div>
                        </div>
                        <div>
                            <img src={Redeli} alt="" />
                        </div>
                    </div>
                </div> 
                :
                <DetSkeleton/>
              }          

                <div className='mt-35'>
                    <SecHead
                        header="Related Item"
                    />
                    <div className='flex justify-between'>
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
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
