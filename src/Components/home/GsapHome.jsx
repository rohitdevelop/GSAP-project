import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GsapHome = () => {
  // === REUSABLE ANIMATION FUNCTION ===
  const animateFrom = (selector, {
    x = 0,
    y = 0,
    scale = 1,
    rotate = 0,
    duration = 1.2,
    ease = "power2.out",
    scrub = false,
    pin = false,
    stagger = 0,
    start = "top 80%",
    end = "top 40%",
    markers = false,
    toggleActions = "play none none reset"
  }) => {
    gsap.from(selector, {
      opacity: 0,
      x,
      y,
      scale,
      rotate,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: selector,
        start,
        end,
        scrub,
        pin,
        toggleActions,
        markers
      },
    });
  };

  // === ZOOM OUT + FADE PINNED ===
  const fadeZoomPin = (selector) => {
    gsap.fromTo(
      selector,
      { scale: 1, opacity: 1 },
      {
        scale: 1.3,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selector,
          start: "top center",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      }
    );
  };

  // === ANIMATION CALLS ===

  animateFrom(".text-area", { x: -100, duration: 1 });
  animateFrom(".hero-img", { x: 100, duration: 1.2 });
  animateFrom(".cta-buttons", {
    scale: 0.5,
    ease: "back.out(1.7)",
    duration: 1,
  });

  animateFrom(".BoxCard", {
    y: 100,
    scrub: true,
    start: "top 60%",
  });

  animateFrom(".img1", { x: 100, scrub: true, start: "top 60%" });
  animateFrom(".img2", { y: 100, scrub: true, start: "top 60%" });

  fadeZoomPin(".img3");
  fadeZoomPin(".img4");

  // ✅ Zoom + Fade + Pin on img5
  gsap.fromTo(
    ".img5",
    { scale: 1, opacity: 1 },
    {
      scale: 1.4,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".img5", // ✅ Corrected
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
    }
  );

  animateFrom(".img6", {
    y: 150,
    scrub: true,
    duration: 1.5,
  });

  animateFrom(".img7", {
    x: -100,
    scrub: true,
    duration: 1.5,
  });

  animateFrom(".img8", {
    scale: 0.95,
    scrub: true,
    duration: 1.5,
  });

  animateFrom(".feature-card", {
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power1.out",
    start: "top 85%",
  });

  animateFrom(".rotate-img", {
    rotate: 360,
    scale: 0.8,
    duration: 2,
    scrub: true,
    start: "top 90%",
    end: "top 30%",
  });

  gsap.to("#HEADPAGE h1", {
 xPercent: -320, 
      scrollTrigger: {
      trigger: "#HEADPAGE",
      scroller:"body",
      start:"top 0%",
      end:"top -150%",
       scrub: 2,
      pin: true,
     },
  });
};



//  
