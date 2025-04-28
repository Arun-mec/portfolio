import React from 'react'
import Button from './features/components/Button'
import InverseButton from './features/components/InverseButton'

const CountCard = ({
    count, content, style
}) => {
    return (
        <div className="flex flex-col items-start justify-center gap-1 md:gap-2">
            <span className='text-2xl md:text-6xl font-bold'>+{count}</span>
            <span className='text-sm md:text-md text-light'>{content}</span>
        </div>
    )
}

const Home = () => {
    const cardData = [
        {
            count : 2,
            content : "YEARS OF EXPERIENCE"
        },
        {
            count : 10,
            content : "PROJECTS COMPLETED"
        },
    ]
    return (
        <div id="home" className='scroll-mt-24 w-full md:full md:sticky flex-shrink-0 smcontainer md:container 
            max-h-fit flex flex-col items-start justify-center gap-4 md:gap-6'>
            <span className='text-4xl md:text-6xl font-semibold'>Transforming Your <br />Ideas into <span className='text-primary'>Reality</span></span>
            <span className='text-light text-md md:text-lg'>Passionate about creating intuitive and engaging user experiences. <br /> Specialize in transforming ideas into beautifully crafted products.</span>
            <section className='w-1/2 md:w-1/3 flex flex-row gap-1 md:gap-2'>
                {
                    cardData.map((data)=> {
                        return (
                            <CountCard content={data.content} count={data.count} />
                        )
                    })
                }
            </section>
            <section className='flex flex-col md:flex-row gap-2 md:gap-4'>
                <Button content="Let's Talk" />
                <InverseButton content="My Works"/>
            </section>
        </div>
    )
}

export default Home