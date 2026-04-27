import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components aur Pages ko import kar rahe hain
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Data from './pages/Data';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      {/* Navbar hamesha top par rahega */}
      <Navbar />

      {/* Step 2: Define all your Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/data" element={<Data />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer hamesha bottom par rahega */}
      <Footer />
    </>
  );
}

export default App;