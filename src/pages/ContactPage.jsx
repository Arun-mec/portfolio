import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center min-h-[100vh] relative font-outfit">
      <div className="noise-overlay" />
      <div className="smcontainer md:container w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className="w-full smcontainer md:container flex flex-col md:flex-row gap-4 md:gap-6">
        <Profile />
        <div className="w-full md:w-2/3 flex flex-col items-start gap-4 md:gap-6 overflow-y-auto overflow-x-hidden">
          <ContactForm />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default ContactPage