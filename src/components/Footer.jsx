import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-1 md:gap-2 h-24 md:h-36'>
        <span className='text-primary'><FaRegCopyright /></span>
        <span className='text-sm md:text-md'> All rights reserved
        </span>
    </div>
  )
}

export default Footer