import React from 'react'

const NavLinks = () => {
    const navbarItemStyle = 'text-md md:text-lg font-syne font-semibold mx-5 hover:underline cursor-pointer'
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