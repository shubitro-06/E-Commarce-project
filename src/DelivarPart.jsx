import React from 'react'
import Deliver from '../src/assets/icon-delivery.png'
import Customer from '../src/assets/Icon-CustomerService.png'
import Secure from '../src/assets/Icon-secure.png'

const DelivarPart = () => {
  return (
    <>
      <div className="container">
         <div className='flex gap-22 justify-center mt-34.5'>
            <div className='w-[249px] h-[161px] relative'>
                <div className='bg-black h-15 w-15 rounded-full mx-auto animate-pop block'>
                  <img src={Deliver} alt="" className='absolute top-[12px] left-[106px] ' />
                </div>
                <h6 className='pt-6 pb-2 text-xl font-semibold font-pop'>FREE AND FAST DELIVERY</h6>
                <p className='text-sm font-pop text-[#00000079] text-center'>Free delivery for all orders over $140</p>
            </div>
            <div className='w-[249px] h-[161px] relative'>
                <div className='bg-black h-15 w-15 rounded-full mx-auto  animate-pop'>
                  <img src={Customer} alt="" className='absolute top-[9px] left-[106px] ' />
                </div>
                <h6 className='pt-6 pb-2 text-xl font-semibold font-pop'>24/7 CUSTOMER SERVICE</h6>
                <p className='text-sm font-pop text-[#00000079] text-center'>Friendly 24/7 customer support</p>
            </div>
            <div className='w-[256px] h-[161px] relative'>
                <div className='bg-black h-15 w-15 rounded-full mx-auto animate-pop'>
                  <img src={Secure} alt="" className='absolute top-[12px] left-[108px] ' />
                </div>
                
                <h6 className='pt-6 pb-2 text-xl font-semibold font-pop'> MONEY BACK GUARANTEE</h6>
                <p className='text-sm font-pop text-[#00000079] text-center'>We reurn money within 30 days</p>
            </div>
         </div>
      </div>
    </>
  )
}

export default DelivarPart
