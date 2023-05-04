import React, { useEffect } from "react";
import "../App.css";
import HeroAbout from "../Features/hero/HeroAbout.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutGestalt from "../Features/about/AboutGestalt.jsx";
import AboutCard from "../Features/about/AboutCard";
import AboutKeahlian from "../Features/about/AboutKeahlian";
import AboutTech from "../Features/about/AboutTech";
import AboutContact from "../Features/about/AboutContact";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <div
        className="container-2xl hero-home hero min-h-screen bg-fixed"
        data-aos="fade-right"
        // style={{
        //   backgroundImage: `url("${bgHero}")`,
        // }}
      >
        <HeroAbout data-aos="fade-up" />
      </div>

      <div className="my-5 flex justify-center">
        <AboutGestalt data-aos="fade-right" />
      </div>
      <div className="my-5 px-5 flex justify-center">
        <AboutCard />
      </div>
      <div className="my-5 px-5 flex justify-center">
        <AboutKeahlian />
      </div>
      <div className="my-5 flex justify-center">
        <AboutTech />
      </div>
      <div className="mt-16 flex justify-center">
        <AboutContact />
      </div>
    </>
  );
};

export default AboutUs;
