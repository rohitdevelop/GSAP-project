import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/home/Home";
import Loder from "./Components/home/Loder";
import About from "./Components/about/About";
import Program from "./Components/program/Program";
import Trainer from "./Components/trainer/Trainer";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return <Loder />; // Only show loader while loading
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
