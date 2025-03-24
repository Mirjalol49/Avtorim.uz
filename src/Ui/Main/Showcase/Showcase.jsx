import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import img1 from "../../../assets/Images/1one.webp";
import img2 from "../../../assets/Images/2one.jpeg";
import img3 from "../../../assets/Images/3one.avif";
import img4 from "../../../assets/Images/4one.jpg";

import "./Showcase.css";

const images = [img1, img2, img3, img4];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className="projects-title">Work Environment</h2>
        <div className="w-full max-w-2xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-80 object-cover cursor-pointer"
                  onClick={() => swiperRef.current?.slideTo(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex space-x-2 mt-4 justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover cursor-pointer rounded-lg transition-all border-2 ${
                  activeIndex === index ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => swiperRef.current?.slideTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}