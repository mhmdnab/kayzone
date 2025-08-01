import Image from "next/image";
import React from "react";
import image from "../../public/455906215_1906095029856519_2605681304601479586_n.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-gradient-to-r from-[#010101] to-[#6e34cf] text-[#eaeaea] py-16 md:py-32 px-3 md:px-44"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Team have Worked for
        </h2>

        <p className="text-xl text-center text-[#eaeaea]/80 mb-12">
          Discover how my team have contributed with clients whom grow their
          presence and influence on social media.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
          {/* Portfolio Card 1 */}
          <div className="bg-white border-8 border-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-black/60 transition-transform duration-150">
            <Image
              src={image}
              alt="Client project 1"
              width={500}
              height={300}
              className="w-full rounded-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#101010]">
                AYOUB & CO. REAL ESTATE
              </h3>
              <p className="text-gray-700 mb-4">
                We helped this client increase their social media engagement by
                50% in just 3 months.
              </p>
              <Link
                href="https://www.instagram.com/ahmadnajibayoub/reel/C-xl0Uyv8hp/"
                rel="noopener"
                target="_blank"
                className="text-[#6e34cf] font-semibold hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
          {/* Portfolio Card 2 */}
          <div className="bg-white border-8 border-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-black/60 transition-transform duration-150">
            <Image
              src={image}
              alt="Client project 2"
              width={500}
              height={300}
              className="w-full rounded-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#101010]">
                Client Project 2
              </h3>
              <p className="text-gray-700 mb-4">
                Our innovative strategies led to a 30% boost in online sales and
                a stronger social presence.
              </p>
              <Link
                href=""
                className="text-[#6e34cf] font-semibold hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Portfolio Card 3 */}
          <div className="bg-white border-8 border-white rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-black/60 transition-transform duration-150">
            <Image
              src={image}
              alt="Client project 3"
              width={500}
              height={300}
              className="w-full rounded-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#101010]">
                Client Project 3
              </h3>
              <p className="text-gray-700 mb-4">
                We built a comprehensive social media campaign that resulted in
                a 40% increase in followers.
              </p>
              <Link
                href=""
                className="text-[#6e34cf] font-semibold hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Add more portfolio cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
