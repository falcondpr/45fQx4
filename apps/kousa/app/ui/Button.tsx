import React from 'react'

const Button: React.FC<{
  children?: React.ReactNode
  variant?: string
  onClick?: () => void
}> = ({ children, variant, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        variant === 'light'
          ? 'bg-white text-primary focus:border-light-gray'
          : 'bg-primary text-white focus:bg-white focus:border-light-gray focus:border-2 focus:text-primary'
      } border-2 border-transparent m-0 block w-full py-3 rounded-md font-medium`}
    >
      {children}
    </button>
  )
}

export default Button
