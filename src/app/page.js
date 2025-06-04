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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // same loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
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
