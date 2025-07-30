import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    gsap.from(".text-area", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(".hero-img", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".cta-btn", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "back.out(1.7)",
    });
  });

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://t3.ftcdn.net/jpg/06/74/96/46/360_F_674964630_8sbi0HVwMwGPLPSg3w2CRq0kPKFUO5LR.jpg"
        alt="gym-bg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-16">
        {/* Text Content */}
        <div className="text-area min-h-screen flex items-center justify-center">
          <div className="text-white max-w-xl text-center md:text-left p-4 ">
            <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-4">
              Welcome to <span className="text-white">FitZone</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transform your body, transform your life. The time is{" "}
              <span className="text-red-500 font-bold">NOW</span> 💪
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
              <button className="bg-red-600 hover:bg-red-500 text-black font-bold px-8 py-4 rounded-full shadow-lg transition duration-300">
                Join the Movement
              </button>
              <button className="bg-white hover:bg-gray-200 text-red-600 font-bold px-8 py-4 rounded-full shadow-lg transition duration-300">
                View Programs
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-img mt-10 md:mt-0">
          <img
            src="https://img.freepik.com/premium-photo/muscular-aggressive-bodybuilder-generative-ai_888418-13643.jpg"
            alt="Muscular Man"
            className="w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain rounded-xl shadow-xl"
            />
        </div>
      </div>

      {/* ..................info boxes..................  */}
      <div className="">
        
      </div>
    </div>
            </>
  );
};

export default Home;
