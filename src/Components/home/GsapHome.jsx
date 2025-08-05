import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GsapHome = () => {
  // Animate text area from left
  gsap.from(".text-area", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".text-area",
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });

  // Animate hero image from right
  gsap.from(".hero-img", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-img",
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });

  // CTA buttons scale in
  gsap.from(".cta-buttons", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".cta-buttons",
      scroller: "body",
      start: "top 85%",
      toggleActions: "play none none reset",
    },
  });

  // BoxCard section slides up smoothly
  gsap.from(".BoxCard", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".BoxCard",
      scroller: "body",
      start: "top 60%",
      scrub: true,
    },
  });

  // Left image scrolls in from right
  gsap.from(".img1", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".img1",
      scroller: "body",
      start: "top 60%",
      scrub: true,
    },
  });

  // Right image scrolls in from bottom
  gsap.from(".img2", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".img2",
      scroller: "body",
      start: "top 60%",
      scrub: true,
    },
  });
  // Image 3 Zoom Out
 // Animate img3 when fully on screen
gsap.fromTo(
  ".img3",
  { scale: 1, opacity: 1 },
  {
    scale: 1.3,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".img3",
      start: "top bottom",    // Top of img3 hits bottom of viewport
      end: "bottom top",      // When img3 scrolls out
      scrub: true,
      pin: true,
      markers: true,          // Remove in production
    },
  }
);

// Fade in img4 smoothly
gsap.from(".img4", {
  opacity: 0,
  scale: 1.1,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".img4",
    start: "top 90%",
    end: "top 30%",
    scrub: true,
    markers: true,
  },
});

};
