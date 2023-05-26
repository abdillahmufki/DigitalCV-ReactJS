import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, WhatsappButton } from "./components";
import { Home, Contact, Services, AboutUs, ErorPage } from "./pages";

function App() {
  return (
    <div className="dark:bg-gray-900">
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
    </div>
  );
}

export default App;
