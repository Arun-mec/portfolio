import React from 'react'
import Card from './features/components/Card'

const About = () => {
  const services = [
    {
      title: "Design",
      image: "/images/dev.jpeg",
      content: "Lalley of type and scrambled it to make a type specimen book"
    },
    {
      title: "Development",
      image: "/images/dev.jpeg",
      content: "Lorem Ipsum has been the industry's standard "
    },
    {
      title: "Full package",
      image: "/images/dev.jpeg",
      content: "Lorem Ipsum standard dummy text ever since the 1500s"
    }]
  return (
    <section id="about" className='smcontainer md:container
            flex flex-col items-start justify-start gap-6 font-primary'>
      <span className='text-light text-md md:text-lg'>From Idea to Launch</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
        
      </div>
    </section>
  )
}

export default About