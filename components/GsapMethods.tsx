import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapMethods = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);

  //GSAP-To
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.in",
    });
  }, []);

  //GSAP-From
  useGSAP(() => {
    gsap.from("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.in",
    });
  }, []);

  //GSAP-FromTo
  useGSAP(() => {
    gsap.fromTo(
      "#blue-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.in",
      }
    );
  }, []);

  //GSAP-Timeline
  useGSAP(() => {
    timeline.to("#blue-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#blue-box", {
      y: 250,
      scale: 1,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#blue-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  //GSAP-Stagger
  useGSAP(() => {
    gsap.to("#blue-box", {
      y: 250,
      duration: 2,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // stagger: 0.5,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "cir.inOut",
        from: "center",
      },
    });
  }, []);

  //وقتی المنت ها داینامیک هستند یا چند المنت داخل یک کانتینر هستند و یا کامپوننت قابل استفاده مجدد است از رف استفاده بکن
  //GSAP-ScrollTrigger
  // useGSAP(
  //   (context) => {
  //     if (!context.selector) return;

  //     const boxes = context.selector(".scroll-box") as HTMLElement[];

  //     boxes.forEach((box) => {
  //       gsap.to(box, {
  //         x: 150,
  //         rotation: 360,
  //         borderRadius: "100%",
  //         scale: 1.5,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: "top 80%",
  //         },
  //       });
  //     });
  //   },
  //   { scope: scrollRef }
  // );
  useGSAP(
    () => {
      if (!scrollRef.current) return;

      const boxes = gsap.utils.toArray<HTMLElement>(scrollRef.current.children);

      boxes.forEach((box) =>
        gsap.to(box, {
          x: 150,
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        })
      );
    },
    { scope: scrollRef }
  );

  //GSAP-Text
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      "#text",
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: 20,
        delay:2, 
        stagger: 0.5
      }
    );
  }, []);

  return (
    <>
      <button
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Paused
      </button>
      <div ref={scrollRef}>
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </>
  );
};

export default GsapMethods;
