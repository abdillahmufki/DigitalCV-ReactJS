import React, { useEffect } from "react";
import { Container, Col, Row } from "react-grid-system";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceFeatureRight = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <Container data-aos="fade-left">
      <Row align="center" justify="center" direction="row">
        <Col lg={6} md={12} sm={12}>
          <div className="my-5">
            <h3 className="text-2xl max-[480px]:text-lg text-black dark:text-white">
              {props.title}
            </h3>
          </div>
          <div>
            <p className="text-base text-slate-600 dark:text-white">
              {props.description}
            </p>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div>
            <img src={props.img} alt="img" className="rounded-lg" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceFeatureRight;
