import React from "react"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Contact from "../components/Contact"
import Work from "../components/Work"
import Skills from "../components/Skills"
import Profile from "../components/Profile"
import Services from "../components/Services"
import Career from "../components/Career"
import Footer from "../components/Footer"
import "./indexPage.css"
import { motion } from "framer-motion"


const flipVariants = {
  initial: {
      rotateX: -90,
      opacity: 0,
      transformOrigin: "top center",
  },
  animate: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
      rotateX: 90,
      opacity: 0,
      transformOrigin: "bottom center",
      transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Indexpage = () => {
  return (
    <motion.div
      variants={flipVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ perspective: 1000 }} 
      className="flex flex-col gap-2 md:gap-4 items-center min-h-[100vh] relative font-outfit">
      <div className="noise-overlay" />
      <div className="smcontainer md:container w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className="w-full smcontainer md:container flex flex-col md:flex-row gap-4 md:gap-6">
        <Profile />
        <div className="w-full md:w-2/3 flex flex-col items-start gap-4 md:gap-6 overflow-y-auto overflow-x-hidden">
          <Home />
          <Career />
          <Services />
          <Skills />
          <Work />
          <Contact />
        </div>
      </div>
      <Footer />

    </motion.div>
  )
}

export default Indexpage