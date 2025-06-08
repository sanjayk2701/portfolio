"use client";

import Aboutme from "./pages/aboutme/page";
import Projects from "./pages/projects/page";
import Skills from "./pages/skills/page";
import HeroPage from "./pages/heroPage/page";
import EducationOverview from "./pages/education/page";
import Contact from "./pages/contact/page";
import Footer from "./components/Footer/page";
import { PropagateLoader } from "react-spinners";

import { useState, useEffect } from "react";

export default function main() {

  const [preloading, setPreLoading] = useState(true);

 useEffect(() => {
  const hasVisited = sessionStorage.getItem("hasVisited");
  if (hasVisited) {
    setPreLoading(false); // skip preloader
  } else {
    sessionStorage.setItem("hasVisited", "true");
    const timer = setTimeout(() => {
      setpreLoading(false);
    }, 1500); // show preloader on first visit

    return () => clearTimeout(timer);
  }
}, []);

  if (preloading) {
    return (
      <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
        <p className="text-2xl text-white mb-4 animate-pulse">
          Assembling components, please wait...
        </p>
        <PropagateLoader color="#ffffff" size={15} />
      </div>
    );
  }

  return (
    <div>
      <section id="hero">
        <HeroPage />
      </section>

      <section id="about">
        <Aboutme />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <EducationOverview />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
