import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
      <button className={`bg-primary text-white py-4 px-12 text-center rounded-sm mx-auto block${className}`}>
         {children}
      </button>
    </>
  )
}

export default Button
