import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import image from "../../../public/kayzonelogo1.png";

export default function Footer() {
  return (
    <footer className="bg-[#eaeaea] py-6">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col justify-center items-center gap-y-6">
          {/* Logo */}
          <div className="">
            <Link href="/" className="flex items-center">
              <Image className="h-8 w-auto text-primary" src={image} alt="" />
              <h1 className="ml-2 text-xl font-bold text-primary">
                KayZone Agency
              </h1>
            </Link>
          </div>
          <p>Elevate Your Brand with Cutting-Edge Marketing</p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              className="text-gray-600 hover:text-primary"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-600 hover:text-primary"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-600 hover:text-primary"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="" className="text-gray-600 hover:text-primary">
              <span className="sr-only">LinkedIn</span>
              <Phone className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
