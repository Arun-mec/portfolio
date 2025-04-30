import React, { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    /* Desktop view  */ 
      /* <section className='w-full smcontainer md:container h-20 fixed 
        flex flex-row justify-between items-center flex-wrap px-8'>
        <Logo />
        <div className="flex md:hidden flex-row justify-center items-center">
          <HiBars3 className="text-2xl" />
        </div>
        <div className="hidden md:flex flex-row gap-10 justify-center items-center">
          <NavLinks />
        </div>
      </section> */

  <section className='w-full md:max-w-fit sticky top-0 z-[30] h-12 px-10
    flex flex-row justify-center items-center gap-6 md:gap-10 bg-secondary rounded'>
    <NavLinks />
  </section>
  )
}

export default Navbar