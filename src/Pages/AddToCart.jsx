import React from 'react'
import BreadCrump from '../components/BreadCrump'
import CartItems from '../components/CartItems'
import monitor from '../assets/Monitor.png'
import Button2 from '../components/Button2'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

const AddToCart = () => {

  const data = useSelector((state) => state.AllProducts.cart)
  console.log(data)
  return (
    <>
      <div className="container">
        <BreadCrump
          className="mt-20"
        />

        <div className='h-18 text-center mt-20 '>
          <ul className='font-pop flex justify-between relative'>
            <li>Product</li>
            <li className='absolute top-0 left-126.75'>Price</li>
            <li className='absolute top-0 left-219.25'>Quantity</li>
            <li>Subtotal</li>
          </ul>
        </div>
        {
          data.map((item)=>{
            return(

              <CartItems
                imgs={item.thumbnail}
                pdctName={item.title}
                price={item.price}
                subtotal={item.price}
              />
            )
          })
        }

        <div className='flex justify-between mt-6'>
          <Button2>Return To Shop</Button2>
          <Button2>Update Cart</Button2>
        </div>
        <div className='mt-20 flex justify-between'>
          <div className=''>
            <input type="text" placeholder='Coupon Code' className='h-[56px] w-[300px] py-4 pl-6 pr-[164px] border rounded-sm outline-0 mr-4' />
            <Button>Apply Coupon</Button>
          </div>
          <div className='w-[470px] h-[324px] border font-pop rounded-sm py-6 px-8'>
            <h1 className='text-xl font-medium'>Cart Total</h1>
            <div className='flex justify-between border-b border-[#00000046] py-4 '>
              <p>Subtotal:</p>
              <p>$</p>
            </div>
            <div className='flex justify-between border-b border-[#00000046] py-4 '>
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className='flex justify-between  py-4 '>
              <p>Total:</p>
              <p>$</p>
            </div>
            <div className='mt-4 text-center'>
              <Button >Procces to checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToCart
