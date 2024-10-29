'use client'

import { Link } from 'react-scroll';
import Image from 'next/image';
import profileLogo from "../assets/profileLogo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 pt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-foreground text-xl font-bold">
          <Image src={profileLogo} width={40} alt="Profile Logo" />
        </div>
        <div className="space-x-12 text-lg font-medium">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-navTextColor hover:text-gray-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-navTextColor hover:text-gray-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            className="text-navTextColor hover:text-gray-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={800}
            className="text-navTextColor hover:text-gray-300 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={900}
            className="text-navTextColor hover:text-gray-300 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={950}
            className="text-navTextColor hover:text-gray-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
