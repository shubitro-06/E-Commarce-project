import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
      <button className={ `cursor-pointer bg-primary text-white py-4 px-12 rounded-sm ${className}`}>
         {children}
      </button>
    </>
  )
}

export default Button
