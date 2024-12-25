'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.3)' }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5,
        }
      );

      // Text animation
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1 }
      );
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col px-10 md:px-56 items-center justify-center text-center space-y-6 min-h-screen "
    >
      <div ref={imageRef} className="w-40 h-40 rounded overflow-hidden shadow-lg">
        <Image src={"/poulami.jpg"} alt="profile" width={160} height={160} />
      </div>
      <div
        ref={titleRef}
        className="text-[50px] md:text-[100px] font-serif tracking-wide leading-none "
      >
        <p className="whitespace-nowrap">Frontend</p>
        Developer
      </div>
      <p
        ref={textRef}
        className="text-lg md:text-xl font-light text-gray-700"
      >
        Premium web design, development, <br /> and SEO services to help your
        business stand out.
      </p>
    </div>
  );
};

export default HeroSection;
