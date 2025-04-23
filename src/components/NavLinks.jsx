import React from 'react'

const NavLinks = () => {
    const navbarItemStyle = 'text-md md:text-lg font-primary hover:underline hover:text-light cursor-pointer'
    return (
        <>
            <a className={navbarItemStyle} href='#home'>Home</a>
            <a className={navbarItemStyle} href='#about'>About</a>
            <a className={navbarItemStyle} href='#work'>Works</a>
            <a className={navbarItemStyle} href='#contact'>Contact</a>
        </>
    )
}

export default NavLinks