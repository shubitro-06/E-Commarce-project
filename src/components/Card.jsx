import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { CartReducer, RemoveReducerWish, subtotalReducer, WishReducer } from '../ProductSlice';
import { Bounce, toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";

const Card = ({ Name, price, DisPrice, review, imgs, percent, rating, id, DetailsItem,className }) => {
 
    

    const data = useSelector((state) => state.AllProducts.cart)
    const wish = useSelector((state) => state.AllProducts.wish)
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const notify = (matchItem) => {

        matchItem == undefined ?
            toast.success('Your cart is added', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            :
            toast.warn('Cart is Already Added', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

    }

    const handleCart = () => {
        // navigate("/Cart")
        // if(!data.find((item) => item.id === id)) {

        //     dispatch(CartReducer(DetailsItem))
        //     notify()
        // }  
        // or,
        const matchItem = data.find((item) => item.id === id)
        // console.log(matchItem)
        !matchItem ?
            dispatch(CartReducer({ ...DetailsItem, quan: 1 })) : null;
        notify(matchItem)
        dispatch(subtotalReducer())
    }

    const notify2 = (matchWish)=>{
        matchWish == undefined ?
        toast.success('Your wishCart is added', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            }) :
            toast.warn('WishCart is Already Added', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

    }

    const handleWish = () => {
        // const matchWish = wish.find((item) => item.id === id)
        // if (!matchWish) {
        //     dispatch(WishReducer(DetailsItem))
        //     toast.success('Added to wishlist', {
        //         position: "top-right",
        //         autoClose: 1500,
        //         hideProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //         transition: Bounce,
        //     })
        // } else {
        //     toast.warn('Already in wishlist', {
        //         position: "top-right",
        //         autoClose: 1500,
        //         hideProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //         transition: Bounce,
        //     })
        // }

        // or ,
         const matchWish = wish.find((item)=> item.id === id)

        !wish.find((item)=> item.id === id) ?
         dispatch(WishReducer(DetailsItem)) : null;
         notify2(matchWish)
    }

    const handleRemoveWish = ()=>{
        // setAddWish()
           dispatch(RemoveReducerWish(id)),
        toast.error('Your WishCart is Removed', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
        
    }
    const [addWish,setAddWish] = useState(true)
    const notify3 = ()=>{
         
        toast.error('Your WishCart is Removed', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }

    const handleDeleteWish =()=>{

            dispatch(RemoveReducerWish(id))
        
            notify3()
    }

    return (
        <>
            <div className='font-pop h-87.5 w-67.5 '>
                <div className='relative group overflow-hidden' >

                    <img src={imgs} alt="" onClick={() => navigate(`/Details/${id}`)} />
                    <div className='flex justify-between '>
                        <div className='absolute top-3 left-3'>
                            <h6 className='bg-primary text-white h-6.5 text-center w-14.75'>-{percent}%</h6>
                            <MdDelete className= {` ${className} invisible absolute top-10 text-3xl cursor-pointer h-6.5 w-14.75  bg-primary` }
                            onClick={handleRemoveWish} />
                        </div>
                        <div className='absolute top-3 right-3 flex flex-col gap-2'>
                           {  addWish ?
                               
                          <IoIosHeartEmpty className='bg-white h-8.5 w-8.5 rounded-full text-center cursor-pointer' onClick={handleWish} />:
                          <IoIosHeartEmpty className='text-primary' onClick={handleDeleteWish}/>
                        } 
                            <MdOutlineRemoveRedEye className='bg-white h-8.5 w-8.5 rounded-full text-2xl text-center' />
                        </div>
                    </div>
                    <button onClick={handleCart} className='bg-black w-full py-2 px-21.75 text-white absolute -bottom-11 group-hover:bottom-0 duration-300 ease-linear cursor-pointer'>
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
