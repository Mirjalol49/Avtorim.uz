'use client';
import React, { useRef } from 'react';
import { AnimatedBeam, Circle } from '../../../Components/Beam';
import { Icons } from '../../../Components/Icons';

export default function BeamS() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const topLeftRef = useRef(null);
  const middleLeftRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const middleRightRef = useRef(null);
  const bottomRightRef = useRef(null);

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-[#151119]">
      <div className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-[650px] aspect-square mx-auto" ref={containerRef}>
        
        {/* Center Circle */}
        <Circle ref={centerRef} className="absolute left-1/2 top-1/2 h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 p-5 -translate-x-1/2 -translate-y-1/2">
          <Icons.logo />
        </Circle>

        {/* Left Side Circles */}
        <Circle ref={topLeftRef} className="absolute top-6 left-4 h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 p-3">
          <Icons.typescript />
        </Circle>
        <Circle ref={middleLeftRef} className="absolute left-2 top-1/2 h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 p-3 -translate-y-1/2">
          <Icons.framer />
        </Circle>
        <Circle ref={bottomLeftRef} className="absolute bottom-6 left-4 h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 p-3">
          <Icons.nextjs />
        </Circle>

        {/* Right Side Circles */}
        <Circle ref={topRightRef} className="absolute top-6 right-4 h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 p-3">
          <Icons.tailwindcss />
        </Circle>
        <Circle ref={middleRightRef} className="absolute right-2 top-1/2 h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 p-3 -translate-y-1/2">
          <Icons.gsap />
        </Circle>
        <Circle ref={bottomRightRef} className="absolute bottom-6 right-4 h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 p-3">
          <Icons.reactjs />
        </Circle>

        {/* Arrows */}
        <AnimatedBeam containerRef={containerRef} fromRef={topLeftRef} toRef={centerRef} curvature={-50} dotted />
        <AnimatedBeam containerRef={containerRef} fromRef={middleLeftRef} toRef={centerRef} dotted />
        <AnimatedBeam containerRef={containerRef} fromRef={bottomLeftRef} toRef={centerRef} curvature={50} dotted />
        <AnimatedBeam containerRef={containerRef} fromRef={topRightRef} toRef={centerRef} curvature={-50} reverse dotted />
        <AnimatedBeam containerRef={containerRef} fromRef={middleRightRef} toRef={centerRef} reverse dotted />
        <AnimatedBeam containerRef={containerRef} fromRef={bottomRightRef} toRef={centerRef} curvature={50} reverse dotted />
      </div>
    </div>
  );
}