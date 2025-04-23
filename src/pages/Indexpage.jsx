import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Work from '../components/Work'

const Indexpage = () => {
  return (
    <section className='flex flex-col items-center'>
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
    </section>
  )
}

export default Indexpage