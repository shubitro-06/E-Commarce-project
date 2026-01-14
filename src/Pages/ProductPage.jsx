import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import BreadCrump from '../components/BreadCrump';


const ProductPage = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProduct(data.products));

    }, [])


    return (
        <>
            <div className="container">
                    <BreadCrump className="mt-20 " />
                <div className='flex justify-between'>

                    <div className='w-[20%]'>
                        <div className='mt-12.5'>
                            <h1 className='text-xl font-bold font-pop pb-3.75'>Shop by Category</h1>
                            <ul className='font-pop Proul'>
                                <li>Woman’s Fashion</li>
                                <li>Men’s Fashion</li>
                                <li>Electronics</li>
                                <li>Home & Lifestyle</li>
                                <li>Medicine</li>
                                <li>Sports & Outdoor</li>
                                <li>Baby’s & Toys</li>
                                <li>Groceries & Pets</li>
                                <li>Health & Beauty</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-xl font-bold font-pop pb-3.75'>Shop by Color</h1>
                            <ul>
                                <li className='flex gap-2 items-center pb-4.5'>
                                    <div className='bg-black h-2.75 w-2.75 rounded-full '></div>
                                    <p className='text-[#767676]'>Color 1</p>
                                </li>
                                <li className='flex gap-2 items-center pb-4.5'>
                                    <div className='bg-red-600 h-2.75 w-2.75 rounded-full '></div>
                                    <p className='text-[#767676]'>Color 2</p>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <div className='bg-green-500 h-2.75 w-2.75 rounded-full '></div>
                                    <p className='text-[#767676]'>Color 3</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-[80%]'>
                        <div className='flex justify-end gap-3 mt-[50px]'>
                            <p> Show : </p>
                            <select name="" id="" className='border-[#00000071] border py-0.5 px-9 rounded-[5px] '>
                                <option value="">3</option>
                                <option value="">6</option>
                                <option value="">9</option>
                                <option value="">12</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap mt-15 justify-between gap-y-10'>
                            {
                                product.map((item) => {
                                    console.log(product)
                                    return (
                                        <Card
                                            imgs={item.thumbnail}
                                            Name={item.title}
                                            DisPrice={Math.round(item.price - (item.price * item.discountPercentage)/100)}
                                            price={item.price}
                                            review={item.reviews.length}
                                            percent={item.discountPercentage}
                                            rating={item.rating}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage
