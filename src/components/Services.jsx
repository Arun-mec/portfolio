import React from 'react'
import Card from './features/components/Card'
import { motion } from 'framer-motion'

const Services = () => {
    const services = [
        {
            title: "Web Design",
            image: "/images/web_designing.png",
            content: "Modern, responsive designs that enhance user experience and reflect your brand."
        },
        {
            title: "Web Development",
            image: "/images/web_development.png",
            content: "Clean, scalable websites built with the latest web technologies."
        },
        {
            title: "Software Development",
            image: "/images/software_development.png",
            content: "Custom software tailored to solve real business problems."
        },
        {
            title: "Full Package",
            image: "/images/deployment.png",
            content: "Seamless deployment with ongoing support and updates."
        }]
    return (
        <motion.div
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            className='smcontainer md:container
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
        </motion.div>
    )
}

export default Services