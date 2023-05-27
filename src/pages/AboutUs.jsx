import React, { useEffect } from "react";
import "../App.css";
import Hero from "../components/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutGestalt from "../Features/about/AboutGestalt.jsx";
import AboutCard from "../Features/about/AboutCard";
import AboutKeahlian from "../Features/about/AboutKeahlian";
import AboutTech from "../Features/about/AboutTech";
import AboutContact from "../Features/about/AboutContact";
import img from "../assets/images/content/aboutus.svg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);

  const data = {
    id: 1,
    title: "ABOUT",
    subHeading:
      "Gestalt Systech adalah pusat pengembangan utama untuk perencanaan, pembangunan, dukungan dan peningkatan aplikasi web terkemuka.",
    img: img,
    button: "Contact",
  };
  return (
    <>
      <div className="my-10" data-aos="fade-right">
        <Hero
          heading={data.title}
          subHeading={data.subHeading}
          text={data.description}
          img={data.img}
          button={data.button}
          className="d-none text-center"
        />
      </div>

      <div className="my-5 flex justify-center">
        <AboutGestalt data-aos="fade-right" />
      </div>
      <div className="my-5 flex justify-center">
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
