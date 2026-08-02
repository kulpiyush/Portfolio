"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";

export default function Home() {
  const [isHireOpen, setIsHireOpen] = useState(false);

  return (
    <>
      <Navbar onHireClick={() => setIsHireOpen(true)} />
      <main>
        <Hero onHireClick={() => setIsHireOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
      <HireMe
        isOpen={isHireOpen}
        onClose={() => setIsHireOpen(false)}
      />
    </>
  );
}
