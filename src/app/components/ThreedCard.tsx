"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import image from "../../../public/455906215_1906095029856519_2605681304601479586_n.jpg";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-2 border flex flex-col justify-center items-center h-[790px] w-[360px] ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white text-center"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full flex justify-end mt-8">
          <Link
            href={"https://www.instagram.com/ahmadnajibayoub/reel/C-xl0Uyv8hp/"}
            rel="noopener"
            target="_blank"
            className="w-auto h-auto"
          >
            <Image
              src={image}
              layout="responsive"
              className="rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
