 import { gsap } from "gsap";
  
export const GsapHome = () => {
        gsap.from(".text-area", {
          x: -100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".text-area",
            start: "top 80%",
          },
        });
    
        gsap.from(".hero-img", {
          x: 100,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".hero-img",
            start: "top 80%",
          },
        });
    
        gsap.from(".cta-buttons", {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".cta-buttons",
            start: "top 80%",
          },
        });
    
        gsap.from(".BoxCard", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".BoxCard",
            start: "top 80%",
          },
        });
    }