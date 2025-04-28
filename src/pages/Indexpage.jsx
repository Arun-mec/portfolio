import React from "react"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Home from "../components/Home"
import Contact from "../components/Contact"
import Work from "../components/Work"
import Skills from "../components/Skills"
import "./indexPage.css"
import Profile from "../components/Profile"

const Indexpage = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center min-h-[100vh] relative py-10 font-outfit">
      <div className="noise-overlay" />
      <Navbar />
      <div className="w-full smcontainer md:container flex flex-col md:flex-row gap-6">
        <Profile />
        <div className="w-full md:w-2/3 overflow-y-auto">
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      </div>


    </div>
  )
}

export default Indexpage