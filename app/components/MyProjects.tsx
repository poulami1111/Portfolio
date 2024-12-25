'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const MyProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    { title: 'Space', category: 'Web Design', image: '/space.jpg' },
    { title: 'Nova', category: 'Web Design', image: '/nova.jpg' },
    { title: 'Sonic', category: 'Web Design', image: '/sonic.jpg' },
    { title: 'Solar', category: 'Web Design', image: '/solar.jpg' },
  ];

  return (
    <section
      ref={sectionRef}
      className="  py-20 w-full px-32  min-h-screen"
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl md:text-6xl font-serif tracking-wide">
          My <span className=" italic">Projects</span>
        </h2>
        <button className=" hover:text-white transition">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
            width={200}
            height={200}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white space-y-1">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
