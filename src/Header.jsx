import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router";

const Header = () => {
    return (
        <>
            <div className='bg-black py-3'>
                <div className="container">
                    <div>
                        <header>
                            <div className='flex justify-between'>
                                <div className='flex gap-2 w-[70%] justify-end'>
                                    <p className='text-[#FAFAFA]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                                    <NavLink to="/Shop" end>
                                    <a href="#" className='text-[#FAFAFA] font-bold'>ShopNow</a>
                                    </NavLink>
                                </div>

                                <div className='flex gap-1.25 items-center w-[30%] justify-end text-[#FAFAFA]'>
                                    <h2>English</h2>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
