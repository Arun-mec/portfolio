import React from 'react'
import Button from './Button'


const Home = () => {
    const connectStyle = 'text-lg md:text-xl font-primary cursor-pointer hover:underline'
    return (
        <section id="home" className='smcontainer md:container h-[100vh]
                    flex flex-col items-start justify-center gap-2 md:gap-4'>
            <span className='text-md md:text-lg font-primary text-light flex flex-row items-center gap-2 md:gap-4'>
                <hr className='w-10' /> HI, I AM ARUN
            </span>
            <span className='text-4xl md:text-8xl leading-16 md:leading-24 font-primary font-extralight'>
                A Web Designer <br />
                And Developer
            </span>
            <span className='text-xl md:text-2xl font-primary font-light'>
            Full-stack developer with 2 years of experience building efficient web applications. <br/>
            Mechanical Engineer from NIT Calicut, now driven by a passion for tech and problem-solving. <br />
            Currently contributing to the ROMDR COCA project at Nissan Digital India.
            </span>
            <section className='flex flex-col my-6'>
                <Button content="Resume" />
            </section>
        </section>
    )
}

export default Home



{/* <div className='flex flex-col items-end justify-center gap-2'>
                <section className='flex flex-col items-start justify-center gap-2 md:gap-4'>
                    <span className='text-xl md:text-2xl font-primary text-light'>
                        LETS's CONNECT
                    </span>
                    <hr className='w-full text-primary'/>
                    <section className='flex flex-col items-start justify-center gap-1 md:gap-2'>
                        <span className={connectStyle}>
                            LinkedIn
                        </span>
                        <span className={connectStyle}>
                            Email
                        </span>
                    </section>
                </section>
            </div> */}