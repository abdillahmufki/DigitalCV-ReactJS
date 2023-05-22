import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../../App.css";
import img from "../../assets/images/content/servicesHero.gif";
import Button from "../../components/Button";

const HeroService = () => {
  return (
    <Container
      className="flex flex-col items-center justify-between container_hero lg:flex-row sm:justify-center lg:items-start overflow-hidden"
      fluid
    >
      <div className="lg:mt-28 lg:mr-20">
        <div className="my-2">
          <h2 className="text-xl font-semibold text-blue-500">SERVICES</h2>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-medium">
            Kami membangun, menguji, meluncurkan, dan meningkatkan kualitas
            terbaik aplikasi web dan mobile yang kompleks.
          </h2>
          <div className="my-5">
            <Button>Contact</Button>
          </div>
        </div>
      </div>
      <img
        src={img}
        className="w-full pointer-events-none select-none lg:w-2/5 xl:w-1/2"
        draggable="false"
        alt="hero img"
      />
    </Container>
  );
};

export default HeroService;
