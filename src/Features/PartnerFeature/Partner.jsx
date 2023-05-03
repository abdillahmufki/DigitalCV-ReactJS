import React from "react";
import { Container, Row, Col } from "react-grid-system";
import mps from "../../assets/images/logo/mps.png";
import bsb from "../../assets/images/logo/bsb.png";
import ultra from "../../assets/images/logo/ultra.png";
import Internal from "../../assets/images/logo/Internal.png";
import Campina from "../../assets/images/logo/Campina.png";
import Nikos from "../../assets/images/logo/Nikos.png";

const listItems = [
  {
    id: 1,
    img: mps,
    alt: "mps image",
  },
  {
    id: 2,
    img: bsb,
    alt: "bsb image",
  },
  {
    id: 3,
    img: ultra,
    alt: "ultra image",
  },
  {
    id: 4,
    img: Internal,
    alt: "Internal image",
  },
  {
    id: 5,
    img: Campina,
    alt: "Campina image",
  },
  {
    id: 6,
    img: Nikos,
    alt: "Nikos image",
  },
];

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
              {listItems.map((item) => (
                <img key={item.id} src={item.img} width={130} alt={item.alt} />
              ))}
            </Row>
          </div>
        </marquee>
      </Container>
    </>
  );
};

export default Partner;
