"use client";
import Navbar from "../../components/Navbar/page";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twit.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

import Image from "next/image";
import bgimage from "../../assets/bgimage.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroPage() {
  return (
    <div
      className="relative h-screen w-full flex flex-col justify-between bg-cover bg-center mb-20"
      style={{ backgroundImage: `url(${bgimage.src})` }}
    >
      <Navbar />

      <div className="flex flex-col items-center text-secondaryTextColor font-normal px-6 md:px-12 pb-5 text-center pb-[120px]">
        <motion.p className="text-lg sm:text-2xl md:text-2xl font-medium pb-2">
          Hello,
        </motion.p>
        <motion.h2 className="text-2xl sm:text-6xl md:text-7xl font-medium drop-shadow-md shadow-sm leading-tight">
         <span className="text-md">i'm</span> SANJAY K
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mb-5 mt-3">
          <p className="text-2xl sm:text-4xl md:text-4xl text-secondaryTextColor font-medium">
            An interactive
          </p>
          <div className="text-2xl sm:text-4xl md:text-4xl font-medium text-titleColor inline-block">
            <TypeAnimation
              sequence={["Front-End Developer", 1000, "UX Designer", 1000]}
              wrapper="span"
              speed={20}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>

        <p className="text-xs sm:text-lg md:text-md text-secondaryTextColor font-normal max-w-5xl px-4">
          "I am a <strong>Front-End Developer</strong> committed to turning
          complex ideas into seamless digital experiences with a growth-oriented
          mindset, I aim to deliver work that balances usability, performance
          and visual appeal web application.{" "}
        </p>
      </div>

      <div className="flex justify-center items-center gap-6 sm:gap-12 pb-6">
        <a
          href="https://www.linkedin.com/in/sanjaykprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="hover:brightness-0 hover:invert"
            width={30}
            height={30}
            src={linkedin}
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/sanjayk2701"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="hover:brightness-0 hover:invert"
            width={30}
            height={30}
            src={github}
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="hover:brightness-0 hover:invert"
            width={30}
            height={30}
            src={insta}
            alt="Instagram"
          />
        </a>
        <a
          href="https://twitter.com/your-twitter-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="hover:brightness-0 hover:invert"
            width={30}
            height={30}
            src={twitter}
            alt="Twitter"
          />
        </a>
      </div>
    </div>
  );
}
