import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          {/* Large Text */}
          <h1 className="text-3xl  font-semibold tracking-tight md:text-6xl text-center ">
           TRUSTED{/* eslint-disable-next-line */}
            <img
              className="my-auto -mt-3 inline w-24 md:-mt-6 md:w-48"
              width={192}
              height={108}
              src="https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png"
              alt=""
            />
            AUTO {/* eslint-disable-next-line */}
            <img
              className="my-auto -mt-3 inline w-24 md:-mt-6 md:w-48"
              width={192}
              height={108}
              src="https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png"
              alt=""
            />
            REPAIRS EXPERTS {/* eslint-disable-next-line */}
          </h1>
          <button class="button-1" role="button">
  <span class="button-1-shadow"></span>
  <span class="button-1-edge"></span>
  <span class="button-1-front text">
  Get Free Consultation
  </span>
</button>
          </div>
        </div>
      
    </section>
  );
};

export default Hero;