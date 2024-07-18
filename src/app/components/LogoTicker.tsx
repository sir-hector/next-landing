"use client";

import Image from "next/image";
import acmeLogo from "../assets/images/acme 1.png";
import quantumLogo from "../assets/images/quantum 1.png";
import echoLogo from "../assets/images/echo 1.png";
import celecstiaLogo from "../assets/images/celestia 1.png";
import pulseLogo from "../assets/images/pulse 1.png";
import apexLogo from "../assets/images/apex 1.png";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "quantum Logo" },
  { src: echoLogo, alt: "echo Logo" },
  { src: celecstiaLogo, alt: "celecstia Logo" },
  { src: pulseLogo, alt: "pulse Logo" },
  { src: apexLogo, alt: "apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:z-10 before:absolute after:absolute after:h-full before:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 after:top-0 before:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 justify-center flex-none pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
            {images.map(({ src, alt }) => (
              <Image src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
