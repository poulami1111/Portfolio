
import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Import arrow icon

const Services = () => {
  const services = [
    {
      id: "01",
      title: "WEB DESIGN",
      description:
        "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
      linkText: "ABOUT WEBDESIGN",
    },
    {
      id: "02",
      title: "DEVELOPMENT",
      description:
        "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
      linkText: "ABOUT WEBFLOW",
    },
    {
      id: "03",
      title: "CONTENT & SEO",
      description:
        "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
      linkText: "ABOUT SEO",
    },
  ];

  return (
    <div className="flex justify-center text-opacity-40 items-center bg-[#0e0e0e] py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#1a1a1a] text-opacity-40 text-left border border-[#DAC5A7] border-opacity-15 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className=" text-sm rounded-full border border-[#DAC5A7] border-opacity-15 px-2 py-1 w-8 font-medium">{service.id}</div>
            <h3 className="text-xl   mt-2">
              {service.title}
            </h3>
            <p className=" text-sm mt-4">
              {service.description}
            </p>
            <a
              href="#"
              className="flex items-center gap-2   hover:text-white mt-6 text-sm font-medium group"
            >
              <FiArrowRight
                className=" group-hover:text-white transition-colors border border-[#DAC5A7] border-opacity-15 px-3 py-3 rounded-full"
              />
              {service.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
