import React from 'react'

const NavLinks = () => {
    const navbarItemStyle = 'text-sm md:text-md font-primary hover:bg-primary cursor-pointer p-1 rounded' 
    return (
        <>
            <a className={navbarItemStyle} href='#home'>HOME</a>
            <a className={navbarItemStyle} href='#about'>ABOUT</a>
            <a className={navbarItemStyle} href='#work'>WORKS</a>
            <a className={navbarItemStyle} href='#contact'>CONTACT</a>
        </>
    )
}

export default NavLinks