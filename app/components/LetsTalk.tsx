'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const InfiniteMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      const width = marquee.offsetWidth;

      // GSAP Animation for infinite scrolling effect
      gsap.to(marquee, {
        x: `-${width}px`,
        duration: 10, // Adjust speed (higher value = slower)
        ease: "linear",
        repeat: -1, // Infinite loop
      });
    }
  }, []);

  return (
    <div className="overflow-hidden max-w-full">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-sm py-2 font-semibold "
      >
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <span key={index} className="mx-4">
              LET&apos;S TALK
            </span>
          ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
