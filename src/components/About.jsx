import React from 'react'

const About = () => {
  return (
    <section id="about" className='smcontainer md:container h-[100vh] flex gap-20 justify-start items-start'>

      <div
        className='flex flex-col items-start justify-center gap-4'>
        <span className='text-4xl md:text-6xl leading-12 md:leading-20 font-syne font-bold'>
         About Me
        </span>
        <div className='flex flex-row justify-center items-center gap-4'>
          <img src="/images/dev.jpeg" 
            className="w-20 h-20 rounded-2xl object-cover"
            alt="Profile image" />
          <section className="flex flex-col items-start">
            <span className="text-xl md:text-2xl">Arun A</span>
            <span className="">Full Stack Developer/MERN Stack Developer</span>
          </section>
        </div>
        <div className='text-md font-syne leading-6 md:leading-8'>
          I'm a full-stack developer with two years of experience building efficient and user-friendly web applications. <br />
          With a background in Mechanical Engineering from NIT Calicut, I transitioned into software development driven by a strong passion for technology. <br />
          At Nissan Digital India LLP, I contributed to the ROMDR COCA project, delivering high-quality features and gaining a solid technical foundation. <br />
          I enjoy problem-solving, continuously learning, and am excited to contribute to dynamic teams building impactful products.
        </div>
      </div>
    </section>
  )
}

export default About