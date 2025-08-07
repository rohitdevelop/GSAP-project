import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDumbbell, FaHeartbeat, FaRunning, FaAppleAlt } from "react-icons/fa";
import { GsapHome } from "./GsapHome";

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
  useGSAP(() => {
    GsapHome(); // 🔁 Animation logic from another file
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
              Unlock your potential with cutting-edge equipment, expert
              trainers, and a community that supports your journey.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Your transformation starts{" "}
              <span className="text-orange-500 font-bold">today</span>. Change
              your body, mindset, and your{" "}
              <span className="text-orange-500 font-bold">life</span>.
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
      className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl text-center transform transition duration-500 hover:scale-95 hover:backdrop-blur-sm hover:bg-opacity-90"
    >
      <div className="mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
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
      <div className="BoxCard w-full py-20 px-6 md:px-64 bg-gradient-to-bl from-black to-red-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
          {/* Left: Overlapping Images */}
          <div className="relative flex flex-col gap-6">
            <img
              src="https://wallpapercave.com/wp/wp8997282.jpg"
              alt="workout"
              className="img1 w-64 h-64 object-cover rounded-xl shadow-2xl relative z-20"
            />
            <img
              src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwZ3V5fGVufDB8fDB8fHww"
              alt="strength"
              className="img2 w-64 h-64 object-cover rounded-xl shadow-2xl -mt-12 ml-12 relative z-10"
            />
          </div>

          {/* Right: Text and Stats */}
          <div className="text-white text-center md:text-left space-y-6">
            <h2 className="text-4xl font-extrabold mb-2">
              Give Shape to Your Body
            </h2>
            <p className="max-w-2xl text-lg text-gray-300">
              Discover a healthier, stronger version of yourself. Our gym
              provides expert guidance, world-class equipment, and the
              motivation you need to succeed. Whether you're just starting or
              pushing your limits, we’ve got your back.
            </p>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500">100+</h3>
                <p className="text-sm text-gray-400">
                  Heart Attack Recovery Cases
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500">250+</h3>
                <p className="text-sm text-gray-400">Strong Transformations</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500">50+</h3>
                <p className="text-sm text-gray-400">Certified Trainers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500">1K+</h3>
                <p className="text-sm text-gray-400">Happy Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-bl from-black to-red-950 text-white py-16 px-6">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-red-600">
    Meet the Legends of Bodybuilding 💪
  </h2>

  <div className="grid grid-cols-3 gap-8">

    {/* Row 1 */}
    <div className="col-start-1">
      <img
        src="https://images.stockcake.com/public/7/0/0/700ee260-f630-45ef-828b-aa39ef262fc7_large/muscular-man-flexing-stockcake.jpg"
        alt="Arnold Schwarzenegger"
        className="img3 w-full h-[400px] object-cover rounded-xl shadow-lg"
      />
    </div>
    <div></div>
    <div className="col-start-3">
      <img
        src="https://images.stockcake.com/public/b/d/d/bdd260db-a0e7-4d3b-903a-454527ee68cc_large/muscular-body-performance-stockcake.jpg"
        alt="Ronnie Coleman"
        className="img4 w-full h-[400px] object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* Row 2 */}
    <div></div>
    <div className="col-start-2">
      <img
        src="https://images.stockcake.com/public/e/e/7/ee7d4cf1-943b-47b9-88a1-fadd327107a4_large/muscular-man-flexing-stockcake.jpg"
        alt="Jay Cutler"
        className="img5 w-full h-[400px] object-cover rounded-xl shadow-lg"
      />
    </div>
    <div></div>

    {/* Row 3 */}
    <div className="col-start-1">
      <img
        src="https://repone.de/wp-content/uploads/2025/01/hunter-labrada-bodybuilder-trt.png"
        alt="Hunter Labrada"
        className="img6 w-full h-[400px] object-cover rounded-xl shadow-lg"
      />
    </div>
    <div></div>
    <div className="col-start-3">
      <img
        src="https://images.stockcake.com/public/e/e/7/ee7d4cf1-943b-47b9-88a1-fadd327107a4_large/muscular-man-flexing-stockcake.jpg"
        alt="Phil Heath"
        className="img7 w-full h-[400px] object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* Row 4 */}
    <div></div>
    <div className="col-start-2">
      <img
        src="https://images.stockcake.com/public/7/0/0/700ee260-f630-45ef-828b-aa39ef262fc7_large/muscular-man-flexing-stockcake.jpg"
        alt="Dorian Yates"
        className="img8 w-full h-[400px] object-cover rounded-xl shadow-lg"
      />
    </div>
    <div></div>
  </div>
</div>

<div id="HEADPAGE" className="HEADPAGE   bg-gradient-to-bl from-black to-red-950 text-white">
<h1 className='text-[40vw] text-white font-bold'>FITNESSMOTIVATION</h1>
</div>
    </>
  );
};

export default Home;
