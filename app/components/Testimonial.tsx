import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
          title: "Web Designer",
          description:
            "Working with Poulami was a game-changer for our business. Her frontend development expertise brought our designs to life with pixel-perfect precision. The website is now fast, responsive, and delivers an exceptional user experience across all devices. I highly recommend her skills for any frontend project.",
         
          company: "Make me Global",
        },
        {
          title: "Front end developer",
          description:
            "Poulami's frontend skills transformed our ideas into a visually stunning and interactive website. She ensured seamless performance, modern animations, and a clean codebase that made future updates a breeze. Her attention to detail and commitment to delivering high-quality work impressed us throughout the project.",
         
          company: "Growth Loop Technology.",
        },
      ];
      

  return (
    <section className=" py-20 px-8 md:px-32">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Companies I have  <span className="italic">work with</span>
        </h2>
        <p className="text-lg ">
          See what my clients have to say about working with me and the results I helped them achieve.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#DAC5A7] bg-opacity-5 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{testimonial.title}</h3>
            <p className="text-gray-300 mb-6">{testimonial.description}</p>
            <div className="border-t border-gray-700 pt-4">
              
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
