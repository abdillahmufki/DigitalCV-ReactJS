import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kandidat from "./pages/Home";
import Navbar from "./components/Navbar";
import Company from "./pages/AboutUs";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="container-2xl">
          <Routes>
            <Route path="/" element={<Kandidat />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          {/* <Company /> */}
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
