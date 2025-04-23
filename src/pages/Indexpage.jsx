import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Work from '../components/Work'
import Skills from '../components/Skills'

const Indexpage = () => {
  return (
    <section className='flex flex-col items-center'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
    </section>
  )
}

export default Indexpage