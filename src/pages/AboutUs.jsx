import React, { useEffect } from "react";
import "../App.css";
import HeroAbout from "../Features/hero/HeroAbout.jsx";
import Partner from "../Features/PartnerFeature/Partner.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutGestalt from "../Features/about/AboutGestalt.jsx";
import AboutCard from "../Features/about/AboutCard";
import AboutKeahlian from "../Features/about/AboutKeahlian";

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
    </>
  );
};

export default AboutUs;
