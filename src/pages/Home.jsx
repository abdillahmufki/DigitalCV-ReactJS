import React, { useEffect } from "react";
import "../App.css";
import TabComponent from "../Features/TabsFeature/TabComponent.jsx";
import Hero1 from "../components/Hero.jsx";
import Partner from "../Features/PartnerFeature/Partner.jsx";
import About from "../Features/about/About";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../assets/images/content/home.svg";

const Kandidat = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);

  const data = {
    id: 1,
    title: "Selamat Datang Di Gestalt Systech",
    subHeading:
      "Rampingkan operasional bisnis Anda dengan Platform yang terintegrasi untuk produktivitas tanpa batas!",
    description:
      "Gestalt Systech, solusi teknologi modern untuk mengoptimalkan kinerja bisnis Anda. Kami telah merancang sistem dengan cermat agar sesuai dengan kebutuhan perusahaan Anda. Dapatkan keuntungan dari kemajuan teknologi bersama kami!",
    img: img,
    button: "Contact",
  };

  return (
    <>
      <div>
        <Hero1
          data-aos="fade-up"
          heading={data.title}
          subHeading={data.subHeading}
          text={data.description}
          img={data.img}
          button={data.button}
          className="text-center"
        />
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
