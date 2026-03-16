import React from 'react'

const Button2 = ({children,className}) => {
  return (
    <>
      <button className={`${className} border border-[#00000046] py-4 px-12 rounded-sm cursor-pointer`}>
        {children}
      </button>
    </>
  )
}

export default Button2
