import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can install lucide-react or use any icon library
import { CgGym } from "react-icons/cg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-l to-black from-red-950 text-white px-6 py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
       <div className="flex justify-center items-center">
  <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-yellow-400 tracking-wide">
    <CgGym className="text-3xl" />
    Fit<span className="text-white">Zone</span>
  </Link>
</div>


        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/program" className="hover:text-yellow-400">Program</Link></li>
          <li><Link to="/trainer" className="hover:text-yellow-400">Trainers</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* Join Button for Desktop */}
        <Link to="/contact">
          <button className="hidden md:block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition">
            Join Now
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-yellow-400 text-3xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-black text-center text-lg font-medium flex flex-col gap-4 py-6 mt-4 rounded-lg shadow-md">
          <li><Link to="/" onClick={toggleMenu} className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/program" onClick={toggleMenu} className="hover:text-yellow-400">Program</Link></li>
          <li><Link to="/trainer" onClick={toggleMenu} className="hover:text-yellow-400">Trainers</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="hover:text-yellow-400">Contact</Link></li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
                Join Now
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
