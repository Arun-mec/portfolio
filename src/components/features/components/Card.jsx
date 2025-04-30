import React from 'react'

const Card = ({
    image,
    title,
    content

}) => {
  return (
    <div className='w-full flex flex-row p-1 md:p-2 gap-2 md:gap-2 justify-start items-center 
    bg-secondary hover:bg-primary rounded cursor-pointer'>
        <img src={image} className='w-[25%] aspect-square object-cover rounded' alt="" srcset="" />
        <section className='flex flex-col'>
            <span className='text-lg md:text-xl'>{title}</span>
            <span className='text-sm md:text-md text-light'>{content}</span>
        </section>
    </div>
  )
}

export default Card