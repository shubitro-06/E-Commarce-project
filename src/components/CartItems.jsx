import React, { useState } from 'react'

const CartItems = ({ imgs, price, subtotal,pdctName }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className='flex justify-between font-pop h-25.5   '>
                <div>
                <img src={imgs} alt="" />
                <h1>{pdctName}</h1>
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
