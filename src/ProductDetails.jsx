import React, { useEffect, useState } from 'react'
import BreadCrump from './components/BreadCrump'
import { useParams } from "react-router";
import axios from 'axios';
import { Rate } from 'antd';

const ProductDetails = () => {
    // const [product, setProduct] = useState([])
    // let { id } = useParams();

    // async function getAllData() {
    //     await axios.get(`https://dummyjson.com/products/${id}`)
    //         .then((res) => {
    //             setProduct(res.data)

    //         })
    // }

    // useEffect(() => {
    //     getAllData()
    // }, [id])

    return (
        <>
            <div className="container">
                <BreadCrump />

                {/* {
                    product.map((item) => {
                        return (

                        )
                        })
                        } */}
                <div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <img src="" alt="" />
                    <div>
                        <h1 className='font-semibold text-2xl'></h1>
                        <div className='flex gap-x-2 py-4'>

                            <Rate allowHalf defaultValue="" />
                            <h4 className='text-[#00000046]'></h4>
                            <p className='text-[#00000046]'>/</p>
                            <p className='text-[#00FF66]'>In Stock</p>
                        </div>
                        <p className='text-2xl'>$</p>
                        <p className='font-pop py-6 border-b border-[#00000046] w-100'>description</p>

                        <div className='flex items-center gap-3'>
                            <p className='text-xl'> Colors :</p>
                            <div className='flex gap-2 cursor-pointer'>
                                <div className='h-5 w-5 bg-[#A0BCE0] rounded-full hover:border-3 hover:ease-linear hover:w-4.25 hover:h-4.25'></div>
                                <div className='h-5 w-5 bg-[#E07575] rounded-full hover:border-3 hover:ease-linear hover:w-4.25 hover:h-4.25'></div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-xl'> Size :</p>
                            <div className='flex gap-2 cursor-pointer'>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white  '> 
                                 <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white  '> 
                                 <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white  '> 
                                 <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white  '> 
                                 <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                                <div className='h-8 w-8 border rounded-sm pt-0.75 text-center mx-auto border-[#00000046] hover:bg-primary hover:ease-linear hover:text-white  '> 
                                 <p className='text-sm font-medium font-pop'>XS</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
