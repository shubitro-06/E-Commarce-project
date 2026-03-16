import React, { useState } from 'react'
import Logo from '../src/assets/Logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
// import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from 'react-redux'

const NavBar = () => {

    const data = useSelector((state) => state.AllProducts.cart)
    const AllProducts = useSelector((state) => state.AllProducts.value)
   
    const deta = useSelector((state) => state.AllProducts.wish)

    const [value,setValue] = useState("")
    const [product,setProduct] = useState([])
    const handleChnage = (e)=>{
        const searchText = e.target.value
        setValue(searchText)

        if(searchText.trim() === "") {
            setProduct([])
        }else{
            setProduct(AllProducts.filter((item)=> item.title.toLowerCase().includes(searchText.toLowerCase())))
        }
    }

    let navigate = useNavigate();
 
    return (
        <>
            <nav className='mt-10 pb-4 border-b border-[#00000050]'>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <img src={Logo} alt="" />
                        <ul className='flex gap-12 navul cursor-pointer'>
                            <NavLink to="/" end>
                                <li>Home</li>
                            </NavLink>
                            <li>Contact</li>
                            <li>About</li>
                            <NavLink to="/sing" end>
                                <li>Sign Up</li>
                            </NavLink>
                        </ul>

                        <div className='flex items-center gap-6'>
                            <div className='relative'>
                                <input  type="text" placeholder='What are you looking for?' className='w-60.75 outline-none bg-[#F5F5F5] h-9.5 py-2.5 pr-17.5 pl-5 ' onChange={handleChnage}/>
                                <HiMagnifyingGlass className='absolute top-3 right-3 w-6' />
                                <div className='absolute w-full bg-white text-black font-pop z-10'>
                                    
                                    <ul>
                                        {
                                            product.map((item)=>{
                                                return (
                                                //    <img src={} alt="" className='h-5 w-5' />
                                                <li onClick={() => navigate(`/Details/${item.id}`)} key={item.id} className='py-3 px-1 border-y flex gap-2 items-center cursor-pointer'><img className='h-10 w-10' src={item.thumbnail} alt="" />{item.title}</li>

                                                )
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                {/* <CiHeart className='w-6'/> */}
                                <NavLink to="/wishlist" end>
                                <div className='relative'>
                                    <FaRegHeart className='w-6' />
                                    <div className='h-3.5 w-3.5 rounded-full bg-primary text-xs absolute -top-1.75 left-2.75 flex justify-center items-center text-white'>{deta.length}</div>
                                </div>
                                </NavLink>
                                <NavLink to="/Cart" end>
                                <div className='relative'>

                                    <MdOutlineShoppingCart className='w-6 ' />
                                    <div className='h-3.5 w-3.5 rounded-full bg-primary text-xs absolute -top-1.75 left-2.75 flex justify-center items-center text-white'>{data.length}</div>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
