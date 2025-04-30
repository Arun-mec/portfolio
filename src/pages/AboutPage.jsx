import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Career from '../components/Career'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'

const flipVariants = {
    initial: {
        rotateX: -90,
        opacity: 0,
        transformOrigin: "top center",
    },
    animate: {
        rotateX: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
        rotateX: 90,
        opacity: 0,
        transformOrigin: "bottom center",
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

const AboutPage = () => {
    return (
        <motion.div 
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ perspective: 1000}} 
            className="flex flex-col gap-2 md:gap-4 items-center min-h-[100vh] relative font-outfit">
            <div className="noise-overlay" />
            <div className="smcontainer md:container w-full flex items-center justify-center">
                <Navbar />
            </div>
            <div className="w-full smcontainer md:container flex flex-col md:flex-row gap-4 md:gap-6">
                <Profile />
                <div className="w-full md:w-2/3 flex flex-col items-start gap-4 md:gap-6 overflow-y-auto overflow-x-hidden">
                    <Career />
                    <Skills />
                    <Contact />
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default AboutPage