import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './Main.css'

import Hero from './Hero/Hero'
import Brands from './Brands/Brands'
import Showcase from './Showcase/Showcase'
import Services from './Services/Services'
import Faq from './Faq/Faq'
import Contact from './Contact/Contact'
import Team from './Team/Team'
import WhyUs from './WhyUs/WhyUs'

const Main = () => {
  const heroRef = useIntersectionObserver()
  const brandsRef = useIntersectionObserver()
  const servicesRef = useIntersectionObserver()
  const faqRef = useIntersectionObserver()
  const contactRef = useIntersectionObserver()
  const teamRef = useIntersectionObserver()
  const whyUsRef = useIntersectionObserver()

  return (
    <main className="main">
      <section ref={heroRef} className="fade-in">
        <Hero />
      </section>

      <section ref={brandsRef} className="fade-in">
        <Brands />
      </section>
      
      <section ref={servicesRef} className="fade-in">
        <Services />
      </section>

      <section ref={whyUsRef} className="fade-in">
        <WhyUs />
      </section>
      
      <section ref={faqRef} className="fade-in">
        <Faq />
      </section>

      <section ref={teamRef} className="fade-in">
        <Team />
      </section>
      
      <section ref={contactRef} className="fade-in">
        <Contact />
      </section>
    </main>
  )
}

export default Main
