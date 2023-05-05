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
      <div className="about__container w-full h-full bg-white rounded-t-box text-white font-bold flex justify-center items-center p-14">
        <div>
          <img
            src={aboutContactImages}
            alt="images content"
            data-aos="fade-right"
          />
        </div>
        <div className="ml-10" data-aos="fade-left">
          <h2 className="header__about text-black text-4xl">
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
