import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400 tracking-wide">
          Fit<span className="text-white">Zone</span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/join" className="hover:text-yellow-400">Join</Link>
          </li>
          <li>
            <Link to="/trainer" className="hover:text-yellow-400">Trainers</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>
        </ul>

        {/* Join Button */}
        <Link to="/contact">
          <button className="hidden md:block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition">
            Join Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
