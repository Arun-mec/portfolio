import React from 'react'
import Card from './features/components/Card'

const Services = () => {
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
                flex flex-col items-start justify-start gap-2 md:gap-4'>
                <span className='text-2xl md:text-4xl font-semibold'>Creative Solutions, Expertly <span className='text-primary'>Delivered</span></span>            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {
                    services.map((service) => {
                        return (
                            <Card image={service.image} title={service.title} content={service.content} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services