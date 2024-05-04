import React from 'react'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Hero from '../components/Hero/Hero'
import Hero2 from '../components/Hero/Hero2'
import HowItWorks from '../components/HowItWorks/HowItWorks'
const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <About />
      <Services />
      <HowItWorks />
    </>
  )
}

export default Home