import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'


import Hero from './Hero/Hero'
import Brands from './Brands/Brands'
import Video from './Video/Video'
import Services from './Services/Services'
import FAQ from './FAQ/FAQ'
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
      <div className="content-wrapper">
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

        <section className="fade-in">
          <Video />
        </section>
        
        <section ref={faqRef} className="fade-in">
          <FAQ />
        </section>

        <section ref={teamRef} className="fade-in">
          <Team />
        </section>
        
        <section ref={contactRef} className="fade-in">
          <Contact />
        </section>
      </div>
    </main>
  )
}

export default Main
