import React from "react";
import { Container, Row } from "react-grid-system";
import mps from "../assets/images/logo/mps.png";
import bsb from "../assets/images/logo/bsb.png";
import ultra from "../assets/images/logo/ultraJaya.png";

const Partner = () => {
  return (
    <>
      <Container fluid className="h-96 my-[50px]">
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
          <div className="flex justify-center my-5 py-5">
            <Row className="gap-x-5">
              <img src={mps} alt="instagram images" />
              <img src={bsb} alt="instagram images" />
              <img src={ultra} alt="instagram images" />
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Partner;
