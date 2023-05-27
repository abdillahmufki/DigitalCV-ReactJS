import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, WhatsappButton, LoadingSpinner } from "./components";
import { Home, Contact, Services, AboutUs, ErorPage } from "./pages";

function App() {
  const [loading, setLoading] = useState(false); // State untuk mengelola status loading

  return (
    <div className="dark:bg-gray-900">
      <Router>
        <Navbar />
        {loading && <LoadingSpinner />}{" "}
        {/* Tampilkan loading spinner jika loading adalah true */}
        <main className="container-2xl">
          <Routes>
            {/* Menggunakan Navigate dengan onBeforeChange untuk mengatur status loading sebelum pindah halaman */}
            <Route
              path="/"
              element={<Home />}
              onBeforeChange={() => setLoading(true)}
              onAfterChange={() => setLoading(false)}
            />
            <Route
              path="/contact"
              element={<Contact />}
              onBeforeChange={() => setLoading(true)}
              onAfterChange={() => setLoading(false)}
            />
            <Route
              path="/services"
              element={<Services />}
              onBeforeChange={() => setLoading(true)}
              onAfterChange={() => setLoading(false)}
            />
            <Route
              path="/aboutus"
              element={<AboutUs />}
              onBeforeChange={() => setLoading(true)}
              onAfterChange={() => setLoading(false)}
            />
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
