import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { LuMoveUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef();
  const iconBgRef = useRef();
  const iconRef = useRef();

  const handleMouseEnter = () => { setHovered(true) }
  const handleMouseLeave = () => { setHovered(false) }

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.color = hovered ? 'white' : '#834aee';
    }

    if (iconRef.current) {
      iconRef.current.style.color = hovered ? '#834aee' : 'white';
    }

    if (iconBgRef.current) {
      iconBgRef.current.style.background = hovered ? 'white' : '#834aee';
    }

  }, [hovered])

  return (
    <Link to='/contact'>
      <motion.div
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75 }} 
            className='group w-full smcontainer md:container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <section className='w-full flex flex-col p-2 md:p-4 gap-2 md:gap-4 justify-start items-start 
          bg-secondary hover:bg-primary rounded cursor-pointer'>
          <section className='w-full flex flex-row justify-between items-center'>
            <span className='text-4xl md:text-6xl font-semibold'>Let's <br /><span ref={textRef}>Collaborate</span></span>
            <span
              ref={iconBgRef}
              className='text-4xl md:text-6xl rounded-full p-2 md:p-4 overflow-hidden inline-block'
            >
              <LuMoveUpRight
                ref={iconRef}
                className="text-2xl md:text-4xl transform transition-transform duration-300 translate-x-0 translate-y-0 group-hover:animate-wiggle"
              />
            </span>
          </section>
          <span className='text-xs md:text-sm text-light'>Have a project in mind or an idea you'd like to bring to life?
            I’m always open to exciting collaborations and creative challenges.
            Let’s work together to build something impactful and meaningful.</span>
        </section>
      </motion.div>
    </Link>

  )
}

export default Contact