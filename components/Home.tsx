"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Navbar";
import Hero from "./Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black" />
    </main>
  );
};

export default Home;
