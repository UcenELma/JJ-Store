import React from 'react'

const Button = ({text, bgColor, textColor, handler = () => {}}) => {
  return (
    <button 
    className={`${bgColor} ${textColor} 
    cursor-pointer hover:scale-105 hover:bg-orange-600 duration-300
    py-2 px-8 rounded-full relative z-10 font-bold`}
    >{text}
    </button>
  )
}

export default Button
