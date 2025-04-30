import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
    content,
    style,
    onClick,
}) => {
    const buttonStyle = `${style} flex flex-row items-center justify-center bg-primary 
        text-white p-2 px-6 relative rounded cursor-pointer hover:bg-inverse`
    return (
        <div className={buttonStyle}>
            <motion.a
                initial="initial"
                whileHover="hovered"
                className="relative inline-block overflow-hidden"
            >
                <motion.div
                    variants={{
                        initial: { y: 0, opacity: 1 },
                        hovered: { y: "-100%", opacity: 0 },
                    }}
                    transition={{ duration: 0.25 }}
                >
                    {content}
                </motion.div>

                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={{
                        initial: { y: "100%", opacity: 0 },
                        hovered: { y: 0, opacity: 1 } }}
                    transition={{ duration: 0.25 }}
                >
                    {content}
                </motion.div>
            </motion.a>
        </div>

    )
}

export default Button