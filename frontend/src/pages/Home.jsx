import React from 'react'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Hero from '../components/Hero/Hero'
import Hero2 from '../components/Hero/Hero2'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import DoctorsInfo from '../components/DoctorsInfo/DoctorsInfo'
import Faq from '../components/Faq/Faq'
const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <About />
      <Services />
      <HowItWorks />
      <DoctorsInfo />
      <Faq />
    </>
  )
}

export default Home