// src/App.jsx
import { useEffect } from "react";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    gsap.from(".hero-title", { x: -100, opacity: 0, duration: 1 });
    gsap.from(".hero-subtitle", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".hero-img", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex justify-between items-center p-6 bg-zinc-900">
        <h1 className="text-2xl font-bold text-red-500">🏋️ FitZone</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-red-500">Home</a></li>
          <li><a href="#" className="hover:text-red-500">Programs</a></li>
          <li><a href="#" className="hover:text-red-500">Trainers</a></li>
          <li><a href="#" className="hover:text-red-500">Contact</a></li>
        </ul>
      </nav>

      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="hero-text space-y-6 max-w-lg">
          <h1 className="hero-title text-5xl font-extrabold text-red-500">Transform Your Body</h1>
          <p className="hero-subtitle text-lg text-gray-300">Join the best fitness community and achieve your goals.</p>
          <button className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-600 transition">Get Started</button>
        </div>
        <div className="hero-img mt-10 md:mt-0">
          <img
            className="rounded-lg w-[400px] shadow-lg"
            src="https://images.unsplash.com/photo-1594737625785-cd4e7c9e4c9a?auto=format&fit=crop&w=800&q=80"
            alt="Gym"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
