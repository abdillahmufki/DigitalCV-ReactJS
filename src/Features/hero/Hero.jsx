import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "../../App.css";
import img from "../../assets/images/content/hero.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <Container
      justify="center"
      className="container_hero lg:mt-[5rem] md:mt-[3rem] sm:mt-[5rem]"
    >
      <Row className="hero-content leading-loose flex">
        <Col lg={12}>
          <div className="my-2">
            <p
              className="text-center text-lg text-blue-500 font-semibold dark:text-white"
              data-aos="fade-down"
            >
              Selamat Datang Di Gestalt Systech
            </p>
          </div>
          <div className="my-5" data-aos="fade-right ">
            <h2 className="text-4xl font-semibold text-center dark:text-white">
              Rampingkan operasional bisnis Anda dengan Platform yang
              terintegrasi untuk produktivitas tanpa batas!
            </h2>
          </div>
          <p className="py-6 text-slate-600 text-center dark:text-white">
            Gestalt Systech, solusi teknologi modern untuk mengoptimalkan
            kinerja bisnis Anda. Kami telah merancang sistem dengan cermat agar
            sesuai dengan kebutuhan perusahaan Anda. Dapatkan keuntungan dari
            kemajuan teknologi bersama kami!
          </p>
          <div className="text-center">
            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </Col>
        <Col lg={12}>
          <img
            src={img}
            width={450}
            className="lg:ml-80 my-8 pointer-events-none select-none rounded-md"
            draggable="false"
            alt="hero img"
            data-aos="fade-right"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
