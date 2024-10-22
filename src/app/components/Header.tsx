"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../../../public/kayzonelogo2.png";
import Image from "next/image";
import ScrollLink from "./ScrollLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#010101] shadow-md sticky top-0 z-[99]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-auto">
          {/* Logo */}
          <div className="flex-shrink-0 p-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image src={logo} width={25} height={30} alt="" />
            </Link>
            {/* <p className="font-semibold text-[#eaeaea]">Kayzone</p> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#services"
              className="text-[#eaeaea] hover:text-primary"
            >
              Services
            </Link>
            <ScrollLink
              href="#portfolio"
              className="text-[#eaeaea] hover:text-primary"
            >
              Portfolio
            </ScrollLink>
            <Link href="#about" className="text-[#eaeaea] hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-[#eaeaea] hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/plans"
              className="bg-[#6e34cf] text-[#eaeaea] px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300"
            >
              View Plans
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#eaeaea] hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <Link
              href="#services"
              className="block py-2 text-[#eaeaea] hover:text-primary"
            >
              Services
            </Link>
            <ScrollLink
              href="#portfolio"
              className="block py-2 text-[#eaeaea] hover:text-primary"
            >
              Portfolio
            </ScrollLink>
            <Link
              href="#about"
              className="block py-2 text-[#eaeaea] hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-[#eaeaea] hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="/plans"
              className="block py-2 mt-4 bg-[#6e34cf] text-[#eaeaea] px-4 rounded-md transition duration-300"
            >
              View Plans
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
