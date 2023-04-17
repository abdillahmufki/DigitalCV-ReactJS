import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Button from "./Button";

const Hero = () => {
  return (
    <Container>
      <Row className="hero-content leading-loose">
        <Col lg={12}>
          <h2 className="text-4xl font-bold">
            Rampingkan operasional bisnis Anda dengan Platform yang terintegrasi
            untuk produktivitas tanpa batas!
          </h2>
          <p className="py-6 text-slate-600">
            Gestalt Systech, solusi teknologi modern untuk mengoptimalkan
            kinerja bisnis Anda. Kami telah merancang sistem dengan cermat agar
            sesuai dengan kebutuhan perusahaan Anda. Dapatkan keuntungan dari
            kemajuan teknologi bersama kami!
          </p>
          <Button text="Contact" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
