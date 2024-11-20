import Link from "next/link";
import Image from "next/image";
import image1 from "../../../public/kayzonelogo2.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#6e34cf] to-[#010101] text-[#eaeaea] h-screen pt-16">
      <div className="container mx-auto py-8 md:py-8 px-5 md:px-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-7xl md:text-8xl font-bold leading-tight">
              KAYZONE
            </h1>

            <p className="text-xl md:text-2xl text-gray-200">
              We craft digital experiences that captivate, convert, and drive
              growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#portfolio"
                className="bg-white text-[#010101] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 text-center"
              >
                View our Work
              </Link>
              <Link
                href="/plans"
                className="bg-transparent border-2 border-white text-[#eaeaea] px-6 py-3 rounded-md font-semibold hover:bg-[#eaeaea] hover:text-[#6e34cf] transition duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:flex hidden justify-center mt-8 md:mt-0">
            <Image
              src={image1}
              alt="Marketing Strategy Illustration"
              width={300}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
