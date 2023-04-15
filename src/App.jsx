import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kandidat from "./pages/Kandidat";
import Navbar from "./components/Navbar";
import Company from "./pages/Company";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="container-2xl">
          <Routes>
            <Route path="/" element={<Kandidat />} />
            <Route path="/company" element={<Company />} />
          </Routes>
          <Company />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
