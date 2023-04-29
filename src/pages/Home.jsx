import React, { useEffect } from "react";
import "../App.css";
import TabComponent from "../Features/TabsFeature/TabComponent.jsx";
import Hero from "../Features/hero/Hero.jsx";
import Partner from "../Features/PartnerFeature/Partner.jsx";
import About from "../Features/about/About";
import AOS from "aos";
import "aos/dist/aos.css";

const Kandidat = () => {
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
        <Hero data-aos="fade-up" />
      </div>

      <div className="my-[80px]" data-aos="fade-up">
        <TabComponent />
      </div>
      <div className="my-5">
        <About />
      </div>
      <div className="my-5 px-5">
        <Partner />
      </div>
    </>
  );
};

export default Kandidat;
