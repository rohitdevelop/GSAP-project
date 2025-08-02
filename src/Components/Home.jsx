import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDumbbell, FaHeartbeat, FaRunning, FaAppleAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const gymBenefits = [
  {
    icon: <FaDumbbell className="text-4xl text-red-600" />,
    title: "Build Strength",
    desc: "Increase muscle power and endurance.",
  },
  {
    icon: <FaHeartbeat className="text-4xl text-red-600" />,
    title: "Improve Heart Health",
    desc: "Boost cardiovascular performance.",
  },
  {
    icon: <FaRunning className="text-4xl text-red-600" />,
    title: "Enhance Stamina",
    desc: "Stay energetic throughout the day.",
  },
  {
    icon: <FaAppleAlt className="text-4xl text-red-600" />,
    title: "Stay Fit",
    desc: "Maintain a healthy and active lifestyle.",
  },
];

const Home = () => {
  useEffect(() => {
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
  }, []);

  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
        <img
          src="https://t3.ftcdn.net/jpg/06/74/96/46/360_F_674964630_8sbi0HVwMwGPLPSg3w2CRq0kPKFUO5LR.jpg"
          alt="gym-bg"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
        />

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12 lg:py-16 gap-10 min-h-[40vh]">
          {/* Left: Text */}
          <div className="text-area max-w-2xl text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-white block">Transform Your</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Body & Mind
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              Unlock your potential with cutting-edge equipment, expert trainers,
              and a community that supports your journey.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Your transformation starts <span className="text-orange-500 font-bold">today</span>. 
              Change your body, mindset, and your <span className="text-orange-500 font-bold">life</span>.
            </p>

            <div className="cta-buttons flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:bg-orange-600 hover:shadow-2xl transition-all duration-300 text-lg">
                Start Your Journey
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg flex items-center gap-2">
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="hero-img">
            <img
              src="https://img.freepik.com/premium-photo/muscular-aggressive-bodybuilder-generative-ai_888418-13643.jpg"
              alt="Muscular Man"
              className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10">
          {gymBenefits.map((item, index) => (
            <div
              key={index}
              className="card-hover bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 text-center transition-all duration-500 hover:border-orange-500/50"
            >
              <div className="mb-6 flex justify-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-orange-500/20 p-4 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Image + Text Section */}
      <div className="BoxCard w-full py-16 px-6 bg-gradient-to-bl from-black to-red-950 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Overlapping Images */}
          <div className="relative flex flex-col gap-6">
            <img
              src="https://img.freepik.com/premium-photo/fit-girl-doing-squats-gym_900958-25421.jpg"
              alt="workout"
              className="w-52 h-52 object-cover rounded-xl shadow-lg relative z-20"
            />
            <img
              src="https://img.freepik.com/premium-photo/gym-training-hardcore-concept-muscular-man-doing-exercise_1562-7343.jpg"
              alt="strength"
              className="w-52 h-52 object-cover rounded-xl shadow-lg -mt-10 ml-10 relative z-10"
            />
          </div>

          {/* Right: Text */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Give Shape to Your Body</h2>
            <p className="max-w-xl text-lg text-gray-300">
              Discover a healthier, stronger version of yourself. Our gym
              provides expert guidance, world-class equipment, and the
              motivation you need to succeed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
