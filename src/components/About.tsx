import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-[#6e34cf] to-[#010101] text-[#eaeaea] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute top-10 left-[-50px] w-64 h-64 bg-[#cb6ce6] opacity-20 rounded-full blur-3xl animate-pulse-slow z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-60px] w-80 h-80 bg-[#89499b] opacity-10 rounded-full blur-3xl animate-float z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#cb6ce6] opacity-10 rounded-full blur-2xl animate-float-delay z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full px-4 md:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#eaeaea] mb-6">
          About Kayzone
        </h2>

        <p className="text-base md:text-lg text-[#eaeaea] leading-relaxed">
          At Kayzone, we’re more than just a digital marketing agency — we’re
          your growth partners in the ever-evolving online world. From crafting
          compelling content to running high-converting ad campaigns, we help
          brands connect, engage, and scale. Whether you're launching a startup
          or expanding an established business, our creative strategies and
          data-driven solutions are built to drive real results. Let’s transform
          your vision into a powerful digital presence.
        </p>
      </div>
    </section>
  );
};

export default About;
