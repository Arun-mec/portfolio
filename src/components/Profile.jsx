import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { IoMdCall, IoMdMail } from 'react-icons/io'
import Button from './features/components/Button'
import InverseButton from './features/components/InverseButton'

const ContactLinks = () => {
    const connectStyle = 'text-lg md:text-xl cursor-pointer text-light hover:text-white'
    return (
        <div className="w-full flex flex-row items-center justify-evenly">
            <FaGithub className={connectStyle} />
            <FaLinkedin className={connectStyle} />
            <IoMdMail className={connectStyle} />
            <IoMdCall className={connectStyle} />
        </div>
    )
}


const Profile = () => {
    return (
        <div className='w-full md:w-[25vw] md:sticky top-20 flex-shrink-0 cardcontainer md:container 
            max-h-fit flex flex-col items-center justify-center gap-4 md:gap-6 bg-secondary rounded-lg md:rounded-xl'>
            <img src="/images/dev.webp" className='w-full h-[20rem] object-cover rounded-lg md:rounded-xl' alt="" />
            <section className='w-full flex flex-col items-center justify-center gap-0 md:gap-1'>
                <span className='text-xl md:text-4xl font-bold'>Arun A</span>
                <span className='text-sm md:text-lg text-light'>Web Designer & Developer</span>
                <span className='text-sm md:text-lg text-light'>Trivandrum, Kerala</span>
            </section>
            <ContactLinks />
            <InverseButton content="Let's Talk" style="w-3/4"/>
            <Button content="Resume" style="w-3/4"/>
        </div>
    )
}

export default Profile