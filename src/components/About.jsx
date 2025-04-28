import React from 'react'

const About = () => {
  const services = [
    {
        title: "Design",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        title: "Development",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        title: "Full package",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }]
  return (
    <>
      <section id="about" className='smcontainer md:container
            flex flex-col items-start justify-start gap-6 font-primary'>
        <span className='text-light text-md md:text-lg'>I can help you with</span>
       
      </section>
    </>
  )
}

export default About