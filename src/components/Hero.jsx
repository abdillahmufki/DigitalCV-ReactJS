import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Button from "./Button";

const Hero = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="mt-20">
            <div>
              <p
                className="text-center text-lg text-blue-400 font-semibold dark:text-white"
                data-aos="fade-down">
                {props.heading}
              </p>
            </div>
            <div className="my-5" data-aos="fade-right">
              <h2 className="text-4xl max-[480px]:text-2xl font-semibold text-center text-black dark:text-white">
                {props.subHeading}
              </h2>
            </div>
            <p
              className="py-6 text-slate-600 text-center dark:text-white"
              data-aos="fade-down">
              {props.text}
            </p>
            <div className={props.className}>
              <Link to="/contact">
                <Button>{props.button}</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={props.img}
            className="mx-auto my-8 pointer-events-none select-none rounded-md h-48 md:h-72 lg:h-[450px]"
            draggable="false"
            alt="hero img"
            data-aos="fade-left"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
