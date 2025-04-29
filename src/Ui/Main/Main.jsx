import React, { lazy, Suspense, memo } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

// Import only the Hero component eagerly since it's above the fold
import Hero from './Hero/Hero'

// Lazy load other components that are below the fold
const Brands = lazy(() => import('./Brands/Brands'))
const Video = lazy(() => import('./Video/Video'))
const Services = lazy(() => import('./Services/Services'))
const FAQ = lazy(() => import('./FAQ/FAQ'))
const Contact = lazy(() => import('./Contact/Contact'))
const Team = lazy(() => import('./Team/Team'))
const WhyUs = lazy(() => import('./WhyUs/WhyUs'))
const Founders = lazy(() => import('./Founders/Founders'))
const BeforeAfter = lazy(() => import('./BeforeAfter/BeforeAfter'))
const BrandStory = lazy(() => import('./BrandStory/BrandStory'))

// Loading fallback component
const SectionLoading = memo(() => (
  <div className="section-loading" style={{
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div className="loading-spinner"></div>
  </div>
))

const Main = () => {
  // Create intersection observer refs
  const heroRef = useIntersectionObserver()
  const brandsRef = useIntersectionObserver()
  const servicesRef = useIntersectionObserver()
  const faqRef = useIntersectionObserver()
  const contactRef = useIntersectionObserver()
  const teamRef = useIntersectionObserver()
  const whyUsRef = useIntersectionObserver()
  const foundersRef = useIntersectionObserver()
  const beforeAfterRef = useIntersectionObserver()
  const brandStoryRef = useIntersectionObserver()

  return (
    <main className="main">
      <div className="content-wrapper">
        <section ref={heroRef} className="fade-in">
          <Hero />
        </section>

        <Suspense fallback={<SectionLoading />}>
          <section ref={brandsRef} className="fade-in">
            <Brands />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <section ref={servicesRef} className="fade-in">
            <Services />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section ref={whyUsRef} className="fade-in">
            <WhyUs />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <section ref={brandStoryRef} className="fade-in">
            <BrandStory />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <section ref={beforeAfterRef} className="fade-in">
            <BeforeAfter />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section ref={foundersRef} className="fade-in">
            <Founders />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section className="fade-in">
            <Video />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <section ref={faqRef} className="fade-in">
            <FAQ />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <section ref={teamRef} className="fade-in">
            <Team />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <section ref={contactRef} className="fade-in">
            <Contact />
          </section>
        </Suspense>
      </div>
    </main>
  )
}

export default memo(Main)
