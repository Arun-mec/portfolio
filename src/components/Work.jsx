import React from 'react'
import Card from './features/components/Card'
import ImageCard from './features/components/ImageCard'

const Work = () => {
  const projects = [
    {
        title : "E Commerce Website",
        content : "E Commerce website using MERN Stack",
        image : "/images/ecommerce1.jpeg"
    },
    {
        title : "Netflix Clone Website",
        content : "A clone website of netflix using React, Firebase",
        image : "/images/netflix.jpeg"
    },
    {
        title : "E Commerce Website",
        content : "E Commerce website using Node.js",
        image : "/images/ecommerce2.png"
    },
    {
      title : "Portfolio Website",
      content : "Portfolio website using React Stack",
      image : "/images/portfolio.png"
  },
  
]
  return (
    <section id="about" className='smcontainer md:container
                flex flex-col items-start justify-start gap-2 md:gap-4'>
      <span className='text-2xl md:text-4xl font-semibold'>Recent Projects and <span className='text-primary'>Achievements</span></span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        {
          projects.map((project) => {
            return (
              <ImageCard title={project.title} content={project.content} image={project.image} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Work