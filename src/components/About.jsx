import React from 'react'
import Services from './Services'

const About = () => {
  return (
    <>
      <section id="about" className='smcontainer md:container my-[10vh]
            flex flex-col items-start justify-start gap-6 font-primary'>
        <span className="text-2xl md:text-4xl text-light">I can help you with..
        </span>
        <Services />
      </section>
    </>
  )
}

export default About