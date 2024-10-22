"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../../../public/kayzonelogo2.png";
import Image from "next/image";
import ScrollLink from "./ScrollLink";

export default function RibbonSection() {
  return (
    <header className="bg-[#010101] shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center text-center items-center h-auto">
          <h1 className="text-[#eaeaea] text-xl md:text-4xl font-light leading-tight">
            Elevate Your Brand with Cutting-Edge Marketing
          </h1>
        </div>
      </div>
    </header>
  );
}
