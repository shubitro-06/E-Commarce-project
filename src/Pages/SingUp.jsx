import React from 'react'
import Button from '../components/Button'
import Button2 from '../components/Button2'
import singup from '../assets/singup.png'
import { NavLink } from 'react-router'

const SingUp = ({className}) => {
    return (
        <>
            <div className="container">
                <div className='mt-20 flex justify-between items-center '>
                    <img src={singup} alt="" />
                    <div className='w-92.75 '>
                        <div className=' mb-12 '>
                            <h1 className='text-4xl font-medium pb-6'>Create an account</h1>
                            <p>Enter your details below</p>
                        </div>
                        <div className='flex-row relative w-92'>
                           <input  type="text" placeholder='Name' className='w-full outline-none  border-b border-[#0000003f] h-9.5 py-2.5 mb-10 pr-17.5 pl-2 '/>
                           <input  type="text" placeholder='Email or Phone Number' className='w-full outline-none  border-b border-[#0000003f] h-9.5 mb-10  py-2.5 pr-17.5 pl-2 '/>
                           <input  type="text" placeholder='Password' className='w-full outline-none  border-b border-[#0000003f] h-9.5 py-2.5 pr-17.5 pl-2 '/>
                           
                        </div>
                        <div className='flex-col mt-10 w-full mb-8'>
                            <Button className="w-92.5 mb-4">Create Account</Button>
                            <Button2 className="w-92.5">Sign up with Google</Button2>
                        </div>
                        <div className=' font-pop flex gap-4 justify-center'>
                            <p>Already have account?</p>
                            <NavLink to="/log" end>
                                <p className='font-medium '>Log in</p>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingUp
