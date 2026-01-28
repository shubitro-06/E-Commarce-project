import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import BreadCrump from '../components/BreadCrump';
import Paginate from '../components/Paginate';
import Skeleton from '../components/skeleton';
// import { Skeleton } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { AllProducts, FilterReducer } from '../ProductSlice';

const ProductPage = () => {

    const [product, setProduct] = useState([])
    const [load,setLoad] = useState(false)
    const [category,setCategory] = useState([])
    const [selvalue,setSelvalue] = useState("6")

    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         .then((data) => setProduct(data.products));
    //         setLoad(true)
    // }, [])

    const dispatch = useDispatch()

   async function getAllData() {
       await axios.get("https://dummyjson.com/products")
        .then((res)=>{
            setProduct(res.data.products)
            setLoad(true)
            dispatch(AllProducts(res.data.products))
        })
    }

    useEffect(()=>{
        getAllData() 
    },[])

    useEffect(()=>{
        const uniqueCategory = [...new Set(product.map((item)=>item.category))]
        setCategory(uniqueCategory)
        // console.log(uniqueCategory)
    },[product])

    const handleFilter =(item)=>{
        const filterItem = product.filter((categoryItem)=> categoryItem.category == item)
        dispatch(FilterReducer(filterItem))
    }
    const handleChange = (e)=>{
        setSelvalue(e.target.value)
    }

    return (
        <>
            <div className="container">
                    <BreadCrump className="mt-20 " />
                <div className='flex justify-between'>

                    <div className='w-[20%]'>
                        <div className='mt-12.5'>
                            <h1 className='text-xl font-bold font-pop pb-3.75'>Shop by Category</h1>
                            <ul className='font-pop Proul cursor-pointer'>
                                <li onClick={()=>dispatch(AllProducts(product))}>All Products</li>
                                {
                                    category.map((item)=>{
                                        return(

                                            <li onClick={()=>handleFilter(item)}>{item}</li>
                                        )
                                    })
                                }
                               
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-xl font-bold font-pop pb-3.75'>Shop by Color</h1>
                            <ul className='cursor-pointer'>
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
                        <div className='flex justify-end gap-3 mt-12.5'>
                            <p> Show : </p>
                            <select name="" onChange={handleChange} id="" className='border-[#00000071] border py-0.5 px-9 rounded-[5px] '>
                                {/* <option value="">3</option> */}
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap mt-15 justify-between gap-y-10 relative'>
                            {/* {
                                product.map((item) => {
                                    console.log(product)
                                    return (
                                        <Card
                                            imgs={item.thumbnail}
                                            Name={item.title}
                                            DisPrice={Math.round(item.price - (item.price * item.discountPercentage)/100)}
                                            price={Math.round(item.price)}
                                            review={item.reviews.length}
                                            percent={Math.round(item.discountPercentage)}
                                            rating={item.rating}
                                        />
                                    )
                                })
                            } */}
                            {/* products={product} */}

                            { 
                               load ?
                                <Paginate   itemsPerPage ={selvalue}  />
                                :
                                <>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage
