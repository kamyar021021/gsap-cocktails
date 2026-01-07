"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Cocktails from "./Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default Home;
