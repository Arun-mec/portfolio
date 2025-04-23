import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { HiBars3 } from "react-icons/hi2";
import Logo from './Logo';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop view  */}
      <section className='w-full smcontainer md:container h-20 fixed 
        flex flex-row justify-between items-center flex-wrap px-8'>
        <Logo />
        <div className="flex md:hidden flex-row justify-center items-center">
          <HiBars3 className="text-2xl" />
        </div>
        <div className="hidden md:flex flex-row gap-10 justify-center items-center">
          <NavLinks />
        </div>
      </section>
      {/* Mobile view */}

    </>
  )
}

export default Navbar