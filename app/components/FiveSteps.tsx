'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FiveSteps = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.step-card').forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: 'Research & Inspiration',
      description: 'Understand project requirements, gather ideas, and draw design inspiration.',
      points: ['Analyze client needs', 'Research industry trends', 'Create mood boards'],
    },
    {
      title: 'Wireframing & Prototyping',
      description: 'Sketch and design the structure and flow of the website.',
      points: ['Draw low-fidelity wireframes', 'Build clickable prototypes', 'Review and refine user flows'],
    },
    {
      title: 'Visual Design',
      description: 'Craft visually appealing designs that reflect the brand’s identity.',
      points: ['Create high-fidelity mockups', 'Choose typography and color palettes', 'Design UI elements and components'],
    },
    {
      title: 'Frontend Development',
      description: 'Translate designs into responsive, interactive, and optimized code.',
      points: ['Code layouts with HTML and CSS', 'Build reusable components', 'Integrate animations and interactions'],
    },
    {
      title: 'Delivery & Handover',
      description: 'Ensure the project is ready for deployment and future updates.',
      points: ['Optimize code and assets', 'Conduct cross-browser testing', 'Prepare documentation for handoff'],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-8 md:px-32 min-h-screen">
      <h2 className="text-4xl md:text-7xl font-serif text-center mb-10">
        Your Website <span className="italic"><br />in 5 steps</span>
      </h2>
      <p className="text-center text-lg mb-16">
        From concept to completion, we guide you through every step of the process.
      </p>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#DAC5A7] bg-opacity-20 h-full"></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-card flex flex-col ${
              index % 2 === 0 ? 'items-start' : 'items-end'
            } mb-16`}
          >
            <div
              className={`relative bg-[#DAC5A7] bg-opacity-5 p-6 rounded-lg shadow-lg w-full md:w-1/2 ${
                index % 2 === 0 ? 'ml-0' : 'ml-auto'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="mb-4">{step.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveSteps;
