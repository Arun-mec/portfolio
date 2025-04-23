import React from 'react'

const Services = () => {
    const cardStyle = "bg-white/5 border-1 border-white/10 hover:border-white flex flex-col items-start justify-start gap-4 cursor-pointer p-2"
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
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {
                services.map((service, key) => {
                    return (

                        <div className={cardStyle}>
                            <span className='text-light text-2xl md:text-6xl'>0{key+1}</span>
                            <span className='text-2xl md:text-4xl'>{service.title}</span>
                            <span>{service.content}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Services