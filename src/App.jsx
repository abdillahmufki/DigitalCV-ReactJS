import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ErorPage from "./pages/ErrorPage";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="container-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />

            {/* catch-all route for 404 errors */}
            <Route path="*" element={<ErorPage />} />
          </Routes>
          <WhatsappButton />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
