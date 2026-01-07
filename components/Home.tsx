"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Cocktails from "./Cocktails";
import About from "./About";
import Art from "./Art";
import Menu from "./Menu";
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default Home;
