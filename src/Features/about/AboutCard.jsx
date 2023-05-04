import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "../../components/Card";
import pilar1 from "../../assets/images/content/pilar1.svg";
import pilar2 from "../../assets/images/content/pilar2.svg";
import pilar3 from "../../assets/images/content/pilar3.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const listItems = [
  {
    id: 1,
    img: pilar1,
    alt: "pilar 1 image",
    title: "Kecepatan",
    desc: "Kami membangun aplikasi dengan kecepatan tinggi untuk memenuhi kebutuhan bisnis Anda.",
  },
  {
    id: 2,
    img: pilar2,
    alt: "pilar 2 image",
    title: "Inovasi",
    desc: "Menyelesaikan masalah Anda dengan solusi inovatif yang kami kembangkan untuk memenuhi kebutuhan bisnis Anda.",
  },
  {
    id: 3,
    img: pilar3,
    alt: "pilar 3 image",
    title: "Dampak Sosial",
    desc: "Memberikan dampak positif bagi masyarakat melalui teknologi yang kami kembangkan.",
  },
];

const AboutCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <Container className="container_hero lg:mt-[5rem] md:mt-[3rem] sm:mt-[5rem]">
      <Row
        className="hero-content leading-loose flex justify-center"
        data-aos="fade-down-right"
      >
        <Col lg={12}>
          <div className="my-2">
            <h2 className="text-center text-3xl text-blue-500 font-semibold my-20">
              Tiga Pilar Gestalt Systech
            </h2>
          </div>
        </Col>
        <Col lg={12}>
          <Row className="gap-y-5 flex justify-center">
            {listItems.map((item) => (
              <Col key={item.id}>
                <Card
                  img={item.img}
                  alt={item.alt}
                  title={item.title}
                  desc={item.desc}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCard;
