'use client';

import Aboutme from "./aboutme/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import HeroPage from "./heroPage/page";
import EducationOverview from "./education/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

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
