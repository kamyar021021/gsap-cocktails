"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Cocktails from "./Cocktails";
import About from "./About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default Home;
