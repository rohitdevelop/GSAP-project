import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    // Hero section animations
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(".hero-cta", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out",
    });

    // Floating elements animation
    gsap.to("#floating-dumbbell", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to("#floating-heart", {
      y: -15,
      x: 10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 0.5,
    });

    // Stats counter animation
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 2,
      delay: 1,
      ease: "power2.out",
      snap: { textContent: 1 },
      stagger: 0.2,
    });

    // Feature cards animation
    gsap.from(".feature-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Background gradient animation
    gsap.to(".bg-gradient", {
      backgroundPosition: "200% 50%",
      duration: 8,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="bg-gradient fixed inset-0 opacity-30 bg-gradient-to-br from-purple-600 via-blue-600 to-green-500 bg-[length:400%_400%]"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          FitZone
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Programs</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Trainers</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            TRANSFORM
            <br />
            YOUR BODY
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands who've transformed their lives with our premium fitness programs and expert guidance
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all">
              Start Your Journey 🚀
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 md:left-20">
          <div id="floating-dumbbell" className="text-6xl opacity-20">
            🏋️
          </div>
        </div>
        
        <div className="absolute top-40 right-10 md:right-20">
          <div id="floating-heart" className="text-5xl opacity-20">
            💪
          </div>
        </div>

        <div className="absolute bottom-20 left-1/4">
          <div className="text-4xl opacity-10 animate-pulse">
            ⚡
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number text-4xl font-bold text-purple-400 mb-2">500</div>
              <div className="text-gray-300">Happy Members</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold text-blue-400 mb-2">50</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold text-green-400 mb-2">1000</div>
              <div className="text-gray-300">Workouts</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold text-yellow-400 mb-2">24</div>
              <div className="text-gray-300">Hours Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose FitZone?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Personal Training</h3>
              <p className="text-gray-300">Get one-on-one coaching from certified trainers who will help you reach your specific fitness goals faster.</p>
            </div>
            
            <div className="feature-card bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Mobile App</h3>
              <p className="text-gray-300">Track your progress, book classes, and access workout plans anywhere with our cutting-edge mobile app.</p>
            </div>
            
            <div className="feature-card bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Nutrition Plans</h3>
              <p className="text-gray-300">Customized meal plans and nutritional guidance to fuel your body and maximize your results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-xl mb-8 text-gray-300">Join FitZone today and get your first month free!</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all">
            Get Started Now 💪
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            FitZone
          </div>
          <p className="text-gray-400">© 2025 FitZone. Transform your life, one workout at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;