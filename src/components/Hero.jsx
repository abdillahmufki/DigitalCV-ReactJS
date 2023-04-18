import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Button from "./Button";
import "../App.css";
// import img from "../assets/images/p.png";

const Hero = () => {
  return (
    <Container className="container_hero">
      <Row className="hero-content leading-loose flex">
        <Col lg={12}>
          <p className="text-center text-blue-500 font-semibold">
            Selamat Datang Di Gestalt Systech
          </p>
          <h2 className="text-4xl font-bold text-center">
            Rampingkan operasional bisnis Anda dengan Platform yang terintegrasi
            untuk produktivitas tanpa batas!
          </h2>
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
        <Col lg={12}>{/* <img src={img} alt="hero" /> */}</Col>
      </Row>
    </Container>
  );
};

export default Hero;
