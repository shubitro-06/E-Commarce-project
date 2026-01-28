import React from 'react'
import { useLocation } from 'react-router'

const BreadCrump = ({className}) => {
    let location = useLocation()
    
    const locate = location.pathname.split("/")
    // console.log(locate)
  return (
    <div className={`flex ${className} gap-3 text-[#00000073]`}>
       <h2>Home</h2>
       <h2>/</h2>
       <h2>{locate[1]}</h2>
       {/* <h2>/</h2>
       <h2>{locate[2]}</h2> */}
    </div>
  )
}

export default BreadCrump
