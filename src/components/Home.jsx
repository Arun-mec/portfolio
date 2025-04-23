import React from 'react'
import Button from './Button'


const Home = () => {
    return (
        <section id="home" className='smcontainer md:container h-[80vh] md:h-[100vh] flex gap-20 justify-start items-center'>

            <div
                className='flex flex-col items-start justify-center gap-3 p-4'>
                <span className='text-md font-syne font-bold flex flex-row items-center gap-2'>
                    <hr className='w-10' /> HI, I AM ARUN
                </span>
                <span className='text-4xl md:text-6xl leading-12 md:leading-20 font-syne font-bold'>
                    Bringing Ideas<br />
                    to Life Through<br />
                    Illustration
                </span>
                <span className='text-md font-syne'>A passionate illustrator creating vibrant and meaningful visuals for brands,<br /> books, and digital experiences.</span>

                <section className='flex flex-col my-6'>
                    <Button content="Resume" />
                </section>
            </div>
        </section>
    )
}

export default Home