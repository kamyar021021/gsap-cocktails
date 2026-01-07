"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger }from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Zoom = () => {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#div',
                start: 'top top',
                end: '+=100%',
                pin: true,
                scrub: true,
                // markers: true
            },
        }).to('#div', {
               scale: 2,
               z:250,
               transformOrigin: "center center",
        }).to("#div", {
            scale: 1.4,
            boxShadow: `10000px 0 0 0 rgba(0,0,0,0.5) inset`,
            transformOrigin: "center center",
        },
        "<"
    ).to("#div", {
        autoAlpha: 0,  
    })
    }, []);

  return (
    <>
        <div
          id="div"
          className="w-30 h-30 rounded-4xl mt-20 bg-red-700"
        ></div>
        <div className="h-screen"></div>
    </>
  );
};

export default Zoom;
