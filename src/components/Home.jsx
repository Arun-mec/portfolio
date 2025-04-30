import React from "react"
import Button from "./features/components/Button"
import InverseButton from "./features/components/InverseButton"
import AutoScrollCarousel from "./AutoScrollCarousel"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const CountCard = ({
    count, content
}) => {
    return (
        <div className="flex flex-col items-start justify-center gap-1 md:gap-2">
            <span className="text-2xl md:text-6xl font-bold">+{count}</span>
            <span className="text-sm md:text-md text-light">{content}</span>
        </div>
    )
}

const Home = () => {
    const navigate = useNavigate();
    const handleBtnClick = () => {
        navigate('/contact')
    }
    const handleInvBtnClick = () => {
        navigate('/work')
    }
    const cardData = [
        {
            count: 2,
            content: "YEARS OF EXPERIENCE"
        },
        {
            count: 10,
            content: "PROJECTS COMPLETED"
        },
    ]
    const listItemStyle = "text-light text-md md:text-lg"
    return (
        <motion.div
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            id="home" className="w-full md:sticky flex-shrink-0 smcontainer md:container
                        flex flex-col items-start justify-start gap-4 md:gap-8">
            <span className="text-3xl md:text-6xl font-semibold">Transforming Your <br />Ideas into <span className="text-primary">Reality</span></span>
            <span className="text-light text-md md:text-lg">Passionate about creating intuitive and engaging user experiences. <br /> Specialize in transforming ideas into beautifully crafted products.</span>
            <section className="w-1/2 md:w-1/3 flex flex-row gap-1 md:gap-2">
                {
                    cardData.map((data) => {
                        return (
                            <CountCard content={data.content} count={data.count} />
                        )
                    })
                }
            </section>
            <section className="flex flex-col md:flex-row gap-2 md:gap-4">
                <Button onclick={handleBtnClick} content="Let's Talk" />
                <InverseButton onclick={handleInvBtnClick} content="My Works" />
            </section>
            <section className="flex flex-col items-start justify-start gap-1 md:gap-2 font-primary">
                <span className="text-light text-md md:text-lg">Fueled by Curiosity. Driven by Impact</span>
                <AutoScrollCarousel />
            </section>
        </motion.div>
    )
}

export default Home