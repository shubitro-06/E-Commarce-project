import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { downReducer, RemoveReducer, upReducer } from '../ProductSlice';
import { Bounce, toast } from 'react-toastify';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const CartItems = ({ imgs, price, subtotal,pdctName,id,Iquantity }) => {
    const [quantity, setQuantity] = useState(1);
    // console.log(id)
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(RemoveReducer(id))
    }

    const notify = ()=> toast.error('Your cart is Removed', {
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

const handleUpPro =()=>{
        dispatch(upReducer(id))
    
}
const handleDwnPro =()=>{
    if (Iquantity >1)
        dispatch(downReducer(id))
}
    return (
        <>
            <div className='flex justify-between font-pop h-25.5 items-center my-6 '>
                <div className='flex gap-5 items-center'>
                <div className='relative'>
                    <span className='h-1 w-1 bg-red-600 text-white p-3 rounded-full flex justify-center items-center absolute top-0 left-0 cursor-pointer' 
                    onClick={()=>handleRemove(notify())}>x</span>
                    <img src={imgs} alt="" className='h-20 w-17.5' />
                </div>
                <h1 className='w-24 '>{pdctName}</h1>
                </div>
                <p>${price}</p>
                {/* <input
                    type="number"
                    min={1}
                    max={20}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    // aria-label="Quantity"
                    
                /> */}
                <div className=' border border-[#00000046] h-11 w-18 rounded-sm flex justify-between items-center p-2 '>
                    {Iquantity}
                    <div className=' cursor-pointer '>

                       <IoIosArrowUp onClick={handleUpPro}/>
                       <IoIosArrowDown onClick={handleDwnPro} />
                    </div>
                </div>
                <p>${subtotal}</p>
            </div>
        </>
    )
}

export default CartItems
