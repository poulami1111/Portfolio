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
      title: 'Designing in Figma',
      description: 'Use Figma to create app screens, components, and design prototypes.',
      points: ['Design wireframes and layouts', 'Create reusable components', 'Use auto-layout for responsiveness'],
    },
    {
      title: 'Integrating RESTful API',
      description: 'Connect the app with backend services using RESTful APIs.',
      points: ['Fetch and display dynamic data', 'Handle authentication and user sessions', 'Optimize API calls for performance'],
    },
    {
      title: 'Responsive Development',
      description: 'Ensure the app is fully responsive across different screen sizes.',
      points: ['Use flexible layouts and adaptive UI', 'Optimize interactions for touchscreens', 'Test on multiple devices'],
    },
    {
      title: 'Testing & Deployment',
      description: 'Test the app thoroughly and deploy it for users.',
      points: ['Perform functional and UI testing', 'Fix bugs and optimize performance', 'Deploy to App Store and Play Store'],
    },
  ];
  

  return (
    <section ref={sectionRef} className="py-20 px-8 md:px-32 min-h-screen">
      <h2 className="text-4xl md:text-7xl font-serif text-center mb-10">
        My work <span className="italic"><br />in 5 steps</span>
      </h2>
      {/* <p className="text-center text-lg mb-16">
        From concept to completion, we guide you through every step of the process.
      </p> */}
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
