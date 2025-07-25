import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    gsap.to("#box1", {
      x: 600,
      y: 400,
      duration: 2,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.to("#box2", {
      x: -600,
      y: 400,
      duration: 2,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".headline", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(".tagline", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "power2.out",
    });

    gsap.from(".cta-btn", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      delay: 1.2,
      ease: "back.out(1.7)",
    });
  });

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-4">
      {/* Background moving boxes */}
      <div
        id="box1"
        className="h-40 w-40 bg-red-600 rounded-full absolute top-0 left-0 opacity-20"
      ></div>
      <div
        id="box2"
        className="h-40 w-40 bg-red-800 rounded-full absolute top-0 right-0 opacity-20"
      ></div>

      {/* Main content */}
      <h1 className="headline text-5xl md:text-7xl font-extrabold text-red-600 text-center z-10">
        Welcome to <span className="text-white">FitZone</span>
      </h1>
      <p className="tagline mt-6 text-xl md:text-2xl text-gray-300 z-10 text-center">
        Your fitness journey starts <span className="text-red-500 font-semibold">NOW</span> 💪
      </p>
      <button className="cta-btn mt-10 bg-red-600 hover:bg-red-500 text-black font-bold px-8 py-4 rounded-full shadow-lg transition duration-300 z-10">
        Join the Movement
      </button>
    </div>
  );
};

export default Home;
