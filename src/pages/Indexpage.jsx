import React from "react"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Contact from "../components/Contact"
import Work from "../components/Work"
import Skills from "../components/Skills"
import Profile from "../components/Profile"
import "./indexPage.css"
import Services from "../components/Services"
import Career from "../components/Career"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const Indexpage = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center min-h-[100vh] relative font-outfit">
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

    </div>
  )
}

export default Indexpage