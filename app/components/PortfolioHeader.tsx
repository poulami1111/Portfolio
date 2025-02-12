"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";

const PortfolioHeader: React.FC = () => {

    const subTextRef = useRef<HTMLParagraphElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {


        // Animate image fade-in
        gsap.fromTo(
            imgRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1.5, delay: 0.8, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="relative flex flex-col items-center text-center overflow-hidden w-full py-16 px-4">
        {/* Name Background (Left) */}
        {/* <div className="absolute text-5xl md:text-8xl left-0 top-[110px] w-full overflow-hidden">
            <p className="whitespace-nowrap">Poulami Das</p>
        </div> */}
    
        {/* Image Section */}
        <div ref={imgRef} className="w-48 h-48 md:w-64 md:h-64 z-10 rounded-full overflow-hidden mb-12">
            <Image
                width={260}
                height={100}
                src="/poulami.jpg"
                alt="profile"
                className="object-cover"
            />
        </div>
    
        {/* Name Foreground (Right) */}
        {/* <div className="absolute text-5xl md:text-8xl right-0 top-[110px] w-full overflow-hidden">
            <p className="whitespace-nowrap">Poulami Das</p>
        </div> */}
    
        {/* Subtext Section */}
        <p ref={subTextRef} className="text-xl md:text-2xl italic mb-4">
            A website that leaves a <strong>lasting impression!</strong>
        </p>
    
        {/* Description Section */}
        <p className="text-sm md:text-base max-w-3xl leading-relaxed">
            Hi, I&apos;m Poulami Das, a developer specializing in premium Web Design, Development, and App services.
            I&apos;m passionate about creating unique and effective solutions for companies and bring a personal touch to every project.
            Let&apos;s work together to bring your vision to life!
        </p>
    
        {/* Social Icons */}
        <div className="flex space-x-6 mt-6">
            <a href="mailto:poulami.das7604@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xl" aria-label="Email">
                <IoMdMail />
            </a>
            <a href="https://www.linkedin.com/in/poulami-das-081061230/" className="text-gray-400 hover:text-white transition-colors text-xl" aria-label="LinkedIn">
                <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/poul_amidas/" className="text-gray-400 hover:text-white transition-colors text-xl" aria-label="Instagram">
                <FaInstagram />
            </a>
        </div>
    </div>
    
    );
};

export default PortfolioHeader;
