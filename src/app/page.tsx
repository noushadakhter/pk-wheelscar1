import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featuring from './components/Featuring'
import Card from './components/Card'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Hero />
      <Featuring />
      <Card />
      <Footer />
      
      
    </div>
  )
}

export default page
