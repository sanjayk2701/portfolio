'use client'

import { useState } from 'react';
import Image from 'next/image'; // or 'react' version if not using Next.js
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Or use any icon library like react-icons
import profileLogo from '../../assets/profileLogo.png'; // update path accordingly

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4 pt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-foreground text-xl font-bold">
          <Image src={profileLogo} width={40} alt="Profile Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-navTextColor">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-md font-medium pr-8">
          {['hero', 'about', 'projects', 'skills', 'education', 'contact'].map((section, idx) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500 + idx * 100}
              className="text-navTextColor hover:text-gray-300 cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
    {isOpen && (
  <div className="md:hidden absolute right-4 top-16  text-black rounded-md  p-4 flex flex-col space-y-4 text-md font-medium z-50">
    {['hero', 'about', 'projects', 'skills', 'education', 'contact'].map((section, idx) => (
      <Link
        key={section}
        to={section}
        smooth={true}
        duration={500 + idx * 100}
        onClick={() => setIsOpen(false)}
        className="hover:text-gray-500 cursor-pointer"
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    ))}
  </div>
)}

    </nav>
  );
}
