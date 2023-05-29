import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, WhatsappButton } from "./components";
import { ErorPage } from "./pages";
import logo from "./assets/images/logo/navbarSystech.png";

// Custom loading spinner component
const CustomLoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={logo}
        alt="Loading Spinner"
        className="animate-spin w-20 mb-4"
      />
    </div>
  );
};

// Lazy-loaded page components
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Router>
        <Navbar />
        <main className="container-2xl">
          <React.Suspense fallback={<CustomLoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="*" element={<ErorPage />} />
            </Routes>
          </React.Suspense>
          <WhatsappButton />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
