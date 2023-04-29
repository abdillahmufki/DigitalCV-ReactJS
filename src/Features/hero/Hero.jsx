import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Button from "../../components/Button";
import "../../App.css";
import img from "../../assets/images/content/hero.svg";

const Hero = () => {
  return (
    <Container
      justify="center"
      className="container_hero lg:mt-[5rem] md:mt-[3rem] sm:mt-[5rem]"
    >
      <Row className="hero-content leading-loose flex">
        <Col lg={12}>
          <div className="my-2">
            <p className="text-center text-blue-500 font-semibold">
              Selamat Datang Di Gestalt Systech
            </p>
          </div>
          <div className="my-5">
            <h2 className="text-4xl font-semibold text-center">
              Rampingkan operasional bisnis Anda dengan Platform yang
              terintegrasi untuk produktivitas tanpa batas!
            </h2>
          </div>
          <p className="py-6 text-slate-600 text-center">
            Gestalt Systech, solusi teknologi modern untuk mengoptimalkan
            kinerja bisnis Anda. Kami telah merancang sistem dengan cermat agar
            sesuai dengan kebutuhan perusahaan Anda. Dapatkan keuntungan dari
            kemajuan teknologi bersama kami!
          </p>
          <div className="text-center">
            <Button text="Contact" />
          </div>
        </Col>
        <Col lg={12}>
          <img
            src={img}
            width={450}
            className="lg:ml-80 my-8 pointer-events-none select-none"
            draggable="false"
            alt="hero img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;