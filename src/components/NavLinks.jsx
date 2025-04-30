import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    const navbarItemStyle = 'text-sm md:text-md font-primary hover:bg-primary cursor-pointer p-1 rounded' 
    return (
        <>
            <Link to='/' className={navbarItemStyle} >HOME</Link>
            <Link to='/about' className={navbarItemStyle}>ABOUT</Link>
            <Link to='/work'  className={navbarItemStyle}>WORKS</Link>
            <Link to='/contact' className={navbarItemStyle} href='#contact'>CONTACT</Link>
        </>
    )
}

export default NavLinks