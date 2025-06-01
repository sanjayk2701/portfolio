'use client';

import Aboutme from "./pages/aboutme/page";
import Projects from "./pages/projects/page";
import Skills from "./pages/skills/page";
import HeroPage from "./pages/heroPage/page";
import EducationOverview from "./pages/education/page";
import Contact from "./pages/contact/page";
import Footer from "./components/Footer/page";

import { useState } from "react";

export default function main() {
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
