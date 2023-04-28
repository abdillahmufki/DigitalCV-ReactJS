import React from "react";
import { Container, Row, Col } from "react-grid-system";
import mps from "../../assets/images/logo/mps.png";
import bsb from "../../assets/images/logo/bsb.png";
import ultra from "../../assets/images/logo/ultraJaya.png";
import Internal from "../../assets/images/logo/Internal.png";
import Campina from "../../assets/images/logo/Campina.png";
import Nikos from "../../assets/images/logo/Nikos.png";

const Partner = () => {
  return (
    <>
      <div className="pt-24 text-dark">
        <div className="text-center">
          <h2 className="text-2xl py-5 font-bold">
            Dipercaya oleh berbagai bisnis di segala jenis industri
          </h2>
          <p>
            Puluhan ribu bisnis dan perusahaan terkemuka, dari skala kecil
            sampai besar, di seluruh Indonesia telah mempercayakan Gestatlt
            Systech.
          </p>
        </div>
      </div>
      <Container>
        <div className="my-5 py-5">
          <Row className="gap-y-5">
            <Col lg={2} md={6} sm={6}>
              <img src={bsb} alt="instagram images" />
            </Col>
            <Col lg={2} md={6} sm={6}>
              <img src={mps} alt="instagram images" />
            </Col>
            <Col lg={2} md={6} sm={6}>
              <img
                src={ultra}
                className="ml-8"
                width={80}
                alt="instagram images"
              />
            </Col>
            <Col lg={2} md={6} sm={6}>
              <img src={Internal} alt="instagram images" />
            </Col>
            <Col lg={2} md={6} sm={6}>
              <img src={Campina} alt="instagram images" />
            </Col>
            <Col lg={2} md={6} sm={6}>
              <img src={Nikos} alt="instagram images" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Partner;
