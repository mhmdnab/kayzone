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
          <div className="relative bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/0c/0f/79/0c0f7981b24a4b70dc1b53c14a6af432.jpg)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Social Media Management
            </h3>
            <p className="relative text-gray-700 mb-4 z-10">
              We manage your social media presence, curate content, and engage
              with your audience to boost visibility and engagement.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 2: Content Creation */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/0c/0f/79/0c0f7981b24a4b70dc1b53c14a6af432.jpg)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Content Creation
            </h3>
            <p className="relative text-gray-700 mb-4 z-10">
              We create visually appealing, high-quality content that resonates
              with your brand and captivates your audience.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 3: Paid Advertising */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/0c/0f/79/0c0f7981b24a4b70dc1b53c14a6af432.jpg)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Paid Advertising
            </h3>
            <p className="relative text-gray-700 mb-4 z-10">
              Our team designs and optimizes ad campaigns to reach your target
              audience and drive tangible business growth.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 4: Influencer Marketing */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/0c/0f/79/0c0f7981b24a4b70dc1b53c14a6af432.jpg)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Influencer Marketing
            </h3>
            <p className="relative text-gray-700 mb-4 z-10">
              We connect you with the right influencers to expand your brand's
              reach and foster credibility in your industry.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 5: Analytics & Reporting */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/0c/0f/79/0c0f7981b24a4b70dc1b53c14a6af432.jpg)",
              }}
            ></div>
            <h3 className="relative text-2xl font-semibold mb-4 z-10">
              Analytics & Reporting
            </h3>
            <p className="relative text-gray-700 mb-4 z-10">
              We track and report on key performance metrics to ensure your
              campaigns are delivering results and maximizing ROI.
            </p>
            <div className="absolute inset-0 bg-[#6e34cf] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Service Card 6: Strategy & Consultation */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#6e34cf] overflow-hidden group">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/0c/0f/79/0c0f7981b24a4b70dc1b53c14a6af432.jpg)",
              }}
            ></div>

            {/* Content */}
            <h3 className="relative text-2xl font-semibold mb-4 z-10 ">
              Strategy & Consultation
            </h3>
            <p className="relative text-gray-700 mb-4 z-10">
              We provide tailored strategies and consultations to help you
              achieve your long-term business goals.
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
