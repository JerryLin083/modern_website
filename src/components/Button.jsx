import React from 'react'

const Button = ({ styles }) => {
  return (
    <button 
    type="button" 
    className={`${styles} py-4 px-6 bg-blue-gradient rounded-[10px] font-poppins text-[18px] font-semibold outline-none hover:scale-125`}
    >
      Get Started
    </button>
  )
}

export default Button