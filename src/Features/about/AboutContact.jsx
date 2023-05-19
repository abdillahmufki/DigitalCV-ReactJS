import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutContactImages from "../../assets/images/content/contact.gif";
import Button from "../../components/Button";
import "../../App.css";

import AOS from "aos";
import "aos/dist/aos.css";
const AboutContact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <div className="flex items-center justify-center px-5 my-32 overflow-hidden font-bold text-white bg-white about__container rounded-t-box">
        <div>
          <img
            src={aboutContactImages}
            alt="images content"
            data-aos="fade-right"
          />
        </div>
        <div className="ml-10" data-aos="fade-left">
          <h2 className="text-4xl text-black header__about">
            Tertarik dengan produk kami?
          </h2>
          <div className="my-5">
            <Link to="/contact">
              <Button>Selengkapnya</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContact;
