import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#eaeaea] text-[#010101]  py-16 md:py-32 px-5 md:px-44"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12">
          We offer a wide range of services to help businesses thrive in the
          digital world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1: Social Media Management */}
          <div className="relative bg-white hover:text-[#eaeaea] shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?t=st=1733340806~exp=1733344406~hmac=abdb2fb0f40fd89d6fa22845eaf5ec2dc11b344d9d980aa62047faf1e2e1b97b&w=360)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Web Development
            </h3>
            <p className="relative mb-4 z-10">
              We create stunning, functional responsive websites tailored to
              elevate your brand and drive results.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 2: Content Creation */}
          <div className="relative bg-white hover:text-[#eaeaea] shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Marketing Startegy
            </h3>
            <p className="relative mb-4 z-10">
              We develop tailored marketing strategies that connect with your
              audience and drive measurable success.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 3: Paid Advertising */}
          <div className="relative bg-white hover:text-[#eaeaea] shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Video Editing
            </h3>
            <p className="relative  mb-4 z-10">
              We deliver professional video editing services that bring your
              vision to life and captivate your audience.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 4: Influencer Marketing */}
          <div className="relative bg-white hover:text-[#eaeaea] shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/8035294/pexels-photo-8035294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Scripting
            </h3>
            <p className="relative  mb-4 z-10">
              We create impactful video scripts that engage your audience and
              convey your message clearly.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 5: Analytics & Reporting */}
          <div className="relative bg-white hover:text-[#eaeaea] shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Content Planning
            </h3>
            <p className="relative  mb-4 z-10">
              We develop tailored content plans that drive engagement and
              support your brand's growth.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 6: Strategy & Consultation */}
          <div className="relative bg-white hover:text-[#eaeaea] shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/social-media-concept-composition_23-2150169148.jpg?t=st=1733340717~exp=1733344317~hmac=73b68ab87f044da020365f0e887b28163548b6489495ec111db526f92e757535&w=360)",
              }}
            ></div>

            {/* Content */}
            <h3 className="relative text-2xl font-semibold mb-4 z-10 ">
              Post Designing
            </h3>
            <p className="relative  mb-4 z-10">
              We craft eye-catching post designs that boost your brand's
              visibility and resonate with your audience.
            </p>

            {/* Optional background overlay for darker hover effect */}
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
