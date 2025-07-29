import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-amber-400 mb-2">FitZone Gym</h2>
          <p className="text-sm">
            Empowering your fitness journey with world-class equipment and certified trainers. Open 6 AM – 10 PM daily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-amber-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Contact Info</h3>
          <p className="text-sm">📍 Sector 15, Noida, India</p>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">📧 contact@fitzonegym.com</p>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} FitZone Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
