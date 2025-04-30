import React from 'react'
import Button from './features/components/Button'
import { motion } from 'framer-motion'

const ContactForm = () => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }} 
            className='smcontainer md:container
                flex flex-col items-start justify-start gap-2 md:gap-4'>
            <span className='text-4xl md:text-6xl font-semibold'>Let’s Create <br />Something <span className='text-primary'>Amazing</span></span>
            <form action="" className='w-full flex flex-col bg-secondary p-2 md:p-4 gap-2 md:gap-4 rounded-xl md:rounded-2xl text-sm md:text-md'>
                <section className='flex flex-col gap-2 md:gap-2'>
                    <label htmlFor="name" className='text-light'>Name</label>
                    <input type="text" placeholder='Your name' 
                        className='bg-bginverse p-1 md:p-2 rounded outline-none border-[0.1rem] border-bginverse focus:border-primary' />
                </section>
                <section className='flex flex-col gap-2 md:gap-2'>
                    <label htmlFor="email" className='text-light'>Email</label>
                    <input type="text" placeholder='Your @email.com' 
                        className='bg-bginverse p-1 md:p-2 rounded outline-none border-[0.1rem] border-bginverse focus:border-primary'/>
                </section>
                <section className='flex flex-col gap-2 md:gap-2'>
                    <label htmlFor="email" className='text-light'>Message</label>
                    <textarea placeholder='Your message' 
                        className='w-full bg-bginverse p-1 md:p-2 rounded outline-none border-[0.1rem] border-bginverse focus:border-primary'/>
                </section>
                <Button content="Send" />
            </form>
        </motion.div>  
    )
}

export default ContactForm