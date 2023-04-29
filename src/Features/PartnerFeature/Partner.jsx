import React from "react";
import { Container, Row, Col } from "react-grid-system";
import mps from "../../assets/images/logo/mps.png";
import bsb from "../../assets/images/logo/bsb.png";
import ultra from "../../assets/images/logo/ultra.png";
import Internal from "../../assets/images/logo/Internal.png";
import Campina from "../../assets/images/logo/Campina.png";
import Nikos from "../../assets/images/logo/Nikos.png";

const Partner = () => {
  return (
    <>
      <div className="pt-24 text-dark">
        <div className="text-center">
          <h2 className="text-4xl py-5 font-semibold">
            Dipercaya oleh berbagai bisnis di segala jenis industri
          </h2>
          <p>
            Puluhan ribu bisnis dan perusahaan terkemuka, dari skala kecil
            sampai besar, di seluruh Indonesia telah mempercayakan Gestatlt
            Systech.
          </p>
        </div>
      </div>
      <Container fluid>
        <marquee>
          <div className="my-5 py-5">
            <Row className="gap-y-5 gap-x-10">
              <img src={bsb} alt="instagram images" />
              <img src={mps} width={200} alt="instagram images" />
              <img src={ultra} width={100} height={60} alt="instagram images" />
              <img src={Internal} alt="instagram images" />
              <img src={Campina} alt="instagram images" />
              <img src={Nikos} alt="instagram images" />
            </Row>
          </div>
        </marquee>
      </Container>
    </>
  );
};

export default Partner;
