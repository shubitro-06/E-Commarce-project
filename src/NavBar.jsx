import React from 'react'
import Logo from '../src/assets/Logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
// import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = () => {
    return (
        <>
            <nav className='mt-10 mb-4'>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <img src={Logo} alt="" />
                        <ul className='flex gap-12 navul cursor-pointer'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Sign Up</li>
                        </ul>

                        <div className='flex items-center gap-6'>
                            <div className='relative'>
                                <input type="text" placeholder='What are you looking for?' className='w-60.75 outline-none bg-[#F5F5F5] h-9.5 py-2.5 pr-17.5 pl-5 ' />
                                <HiMagnifyingGlass className='absolute top-3 right-3 w-6'/>
                            </div>
                            <div className='flex gap-4'>
                                {/* <CiHeart className='w-6'/> */}
                                <FaRegHeart className='w-6'/>
                                <MdOutlineShoppingCart className='w-6' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
