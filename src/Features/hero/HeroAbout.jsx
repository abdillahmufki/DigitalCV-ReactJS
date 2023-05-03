import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../../App.css";
import img from "../../assets/images/content/about1.gif";

const HeroAbout = () => {
  return (
    <Container className="container_hero lg:mt-[5rem] md:mt-[3rem] sm:mt-[5rem]">
      <Row className="hero-content leading-loose flex" justify="center">
        <Col lg={12}>
          <div className="my-2">
            <h2 className="text-center text-xl text-blue-500 font-semibold">
              About
            </h2>
          </div>
          <div className="my-5">
            <h2 className="text-4xl font-semibold text-center">
              Gestalt Systech adalah pusat pengembangan utama untuk perencanaan,
              pembangunan, dukungan dan peningkatan aplikasi web terkemuka.
            </h2>
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

export default HeroAbout;
