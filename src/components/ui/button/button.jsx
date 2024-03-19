import clsx from 'clsx'
import React from 'react'

export const Button = ({ children, variant, onClick, className, type }) => {
  return (
    <button onClick={onClick} className={clsx({
      "py-2 px-4 hover:text-dark transition-all duration-300 bg-dark border-2 hover:bg-transparent border-dark text-white text-[16px] rounded-lg": variant === "primary",
      "py-2 px-4 bg-transparent border-2 text-dark border-dark rounded-lg": variant === "secondary",
    }, className)} type={type}>
      {children}
    </button>
  )
}
