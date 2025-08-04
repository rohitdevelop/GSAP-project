import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-20">
      <h1 className="text-4xl font-bold text-amber-300 mb-6">Contact Us</h1>
       

      <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-2xl shadow-lg">
        <div className="mb-6">
          <p><strong>📍 Address:</strong> FitZone Gym, Sector 15, Noida, India</p>
          <p><strong>📞 Phone:</strong> +91 9876543210</p>
          <p><strong>📧 Email:</strong> contact@fitzonegym.com</p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-amber-400 text-black px-6 py-2 rounded-md hover:bg-amber-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
