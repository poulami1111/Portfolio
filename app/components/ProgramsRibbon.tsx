import React from "react";
import { BsGit } from "react-icons/bs";
import { FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiShadcnui } from "react-icons/si";

const ProgramsRibbon = () => {
  return (
    <div className="relative w-full mt-8 overflow-hidden bg-[#0e0e0e] py-4">
      {/* Scrolling container */}
      <div className="flex items-center space-x-10 animate-scroll">
        {/* Original Icons */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex space-x-10 text-2xl ">
            <FaHtml5 />
            <IoLogoCss3  />
            <FaReact  />
            <RiTailwindCssFill  />
            <BsGit  />
            <SiMui  />
            <FaGithub  />
            <FaFigma  />
            <SiShadcnui  />
            <RiNextjsFill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsRibbon;
