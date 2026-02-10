import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { RemoveReducer } from '../ProductSlice';

const CartItems = ({ imgs, price, subtotal,pdctName,id }) => {
    const [quantity, setQuantity] = useState(1);
    // console.log(id)
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(RemoveReducer(id))
    }

    return (
        <>
            <div className='flex justify-between font-pop h-25.5 items-center my-6 '>
                <div className='flex gap-5 items-center'>
                <div className='relative'>
                    <span className='h-1 w-1 bg-red-600 text-white p-3 rounded-full flex justify-center items-center absolute top-0 left-0 cursor-pointer' onClick={handleRemove}>x</span>
                    <img src={imgs} alt="" className='h-20 w-17.5' />
                </div>
                <h1 className='w-24 '>{pdctName}</h1>
                </div>
                <p>${price}</p>
                <input
                    type="number"
                    min={1}
                    max={20}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    // aria-label="Quantity"
                    className=' border border-[#00000046] h-11 w-18 rounded-sm text-center '
                />
                <p>${subtotal}</p>
            </div>
        </>
    )
}

export default CartItems
