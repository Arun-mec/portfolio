import React from 'react'
import { FaPlus } from "react-icons/fa6";

const SkillCard = () => {
    const cardStyle = "aspect-square text-xl md:text-2xl bg-white/5 border-1 border-white/50 hover:border-white flex items-center justify-center cursor-pointer"
    const categories = ["Languages", "Frameworks", "Database", "Also Familier With"]
    return (
        <div className="w-full col-span-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 hover">

        </div>
    )
}

const Skills = () => {

    return (
        <div id="about" className='smcontainer md:container grid grid-cols-1 md:grid-cols-2 gap-10 font-primary'>
            <section className='flex flex-col items-start justify-start gap-10'>
                <span className="text-2xl md:text-4xl text-light">My way of getting things done..</span>
                <span className='text-lg md:text-xl'>Fast and transparent, the path to owning a website that will represent your brand in the best of light is only 4 weeks away. Standing by the Waterfall methodology, I assure a step by step completion of the whole process.</span>
            </section>
            <div className='w-full flex flex-col items-start justify-start gap-10 my-10'>
                <div className="w-full flex flex-col gap-6">
                    <section className='w-full flex items-center justify-between text-xl md:text-2xl'>
                        <span>01</span>
                        <span>Frameworks/Libraries</span>
                        <span><FaPlus /></span>
                    </section>
                    <section className='w-full flex items-center justify-evenly text-md md:text-lg'>
                        Fast and transparent, the path to owning a website that will represent your brand in the best of light is only 4 weeks away.
                    </section>
                    <hr />
                </div>

                <div className="w-full flex flex-col gap-6">
                    <section className='w-full flex items-center justify-between text-xl md:text-2xl'>
                        <span>01</span>
                        <span>Frameworks/Libraries</span>
                        <span><FaPlus /></span>
                    </section>
                    <section className='w-full flex items-center justify-evenly text-md md:text-lg'>
                        Fast and transparent, the path to owning a website that will represent your brand in the best of light is only 4 weeks away.
                    </section>
                    <hr />
                </div>

                <div className="w-full flex flex-col gap-6">
                    <section className='w-full flex items-center justify-between text-xl md:text-2xl'>
                        <span>01</span>
                        <span>Frameworks/Libraries</span>
                        <span><FaPlus /></span>
                    </section>
                    <section className='w-full flex items-center justify-evenly text-md md:text-lg'>
                        Fast and transparent, the path to owning a website that will represent your brand in the best of light is only 4 weeks away.
                    </section>
                    <hr />
                </div>

                <div className="w-full flex flex-col gap-6">
                    <section className='w-full flex items-center justify-between text-xl md:text-2xl'>
                        <span>01</span>
                        <span>Frameworks/Libraries</span>
                        <span><FaPlus /></span>
                    </section>
                    <section className='w-full flex items-center justify-evenly text-md md:text-lg'>
                        Fast and transparent, the path to owning a website that will represent your brand in the best of light is only 4 weeks away.
                    </section>
                    <hr />
                </div>

            </div>
        </div>
    )
}

export default Skills