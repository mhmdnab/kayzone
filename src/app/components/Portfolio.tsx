import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-gradient-to-r from-[#010101] to-[#6e34cf] text-[#eaeaea] py-16 md:py-32 px-5 md:px-44"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Portfolio
        </h2>

        <p className="text-xl text-center text-[#eaeaea]/80 mb-12">
          Discover how we’ve helped our clients grow their presence and
          influence on social media.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/path-to-image1.jpg"
              alt="Client project 1"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#101010]">
                Client Project 1
              </h3>
              <p className="text-gray-700 mb-4">
                We helped this client increase their social media engagement by
                50% in just 3 months.
              </p>
              {/* <Link
                href=""
                className="text-[#6e34cf] font-semibold hover:underline"
              >
                View Project
              </Link> */}
            </div>
          </div>

          {/* Portfolio Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/path-to-image2.jpg"
              alt="Client project 2"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#101010]">
                Client Project 2
              </h3>
              <p className="text-gray-700 mb-4">
                Our innovative strategies led to a 30% boost in online sales and
                a stronger social presence.
              </p>
              {/* <Link
                href=""
                className="text-[#6e34cf] font-semibold hover:underline"
              >
                View Project
              </Link> */}
            </div>
          </div>

          {/* Portfolio Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/path-to-image3.jpg"
              alt="Client project 3"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#101010]">
                Client Project 3
              </h3>
              <p className="text-gray-700 mb-4">
                We built a comprehensive social media campaign that resulted in
                a 40% increase in followers.
              </p>
              {/* <Link
                href=""
                className="text-[#6e34cf] font-semibold hover:underline"
              >
                View Project
              </Link> */}
            </div>
          </div>

          {/* Add more portfolio cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
