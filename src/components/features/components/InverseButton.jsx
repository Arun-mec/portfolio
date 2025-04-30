import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion } from 'framer-motion'

const InverseButton = ({
    content,
    style,
    onclick
}) => {
    const buttonStyle = `${style} flex flex-row gap-1 md:gap-2 items-center justify-center border-1 border-primary 
    text-white p-2 px-6 relative rounded cursor-pointer`
    return (
        <motion.div 
            initial="initial"
            whileHover="hovered"
            className={buttonStyle}
            onClick={onclick}>
            <span className='text-sm md:text-md'>{content}</span>
            <motion.span
                variants={{
                    initial :{ x: 0 },
                    hovered :{ x: 10, color: "#834aee"}
                }}>
            <IoIosArrowRoundForward className='text-xl md:text-2xl' />
            </motion.span>
        </motion.div>
    )
}

export default InverseButton