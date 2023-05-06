import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import aboutKeahlian from "../../assets/images/content/aboutAhli.jpg";
import AboutWrap from "../../components/AboutWrap";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const listItem = [
  {
    id: 1,
    title: "Keahlian Kami",
    desc: `Bekerja pada aplikasi skala besar di berbagai bidang bisnis, dari fintech hingga otomatisasi pemasaran, membantu kami memperoleh pengalaman luas dengan mengembangkan solusi kompleks yang membutuhkan tingkat keamanan tinggi, integrasi dengan API jarak jauh dan interaksi dengan sejumlah data yang besar.`,
    secDesc:
      "Kami mengandalkan praktik terbaik dan alat untuk memberikan kode yang bersih, kualitas tinggi, dan algoritma pemrosesan data yang optimal.",
  },
  {
    id: 2,
    title: "Pelayanan Kami",
    desc: " Layanan kami disesuaikan dengan kebutuhan perusahaan teknologi dan pengembangan yang berkembang pesat yang mencari keahlian pengembangan perangkat lunak - baik dengan hanya coding, atau dengan mengelola seluruh pengembangan perangkat lunak dan proses pengiriman.",
    secDesc:
      "Kami menggunakan pendekatan Siklus Hidup Aplikasi Lengkap kami untuk memastikan produk dikerahkan tepat waktu dan dibuat sesuai dengan kebutuhan Anda.",
  },
];

const AboutKeahlian = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="my-2">
              <h2 className="text-center text-3xl text-blue-500 font-semibold my-20">
                Keahlian Kami
              </h2>
            </div>
          </Col>
          <Col lg={12}>
            <img
              src={aboutKeahlian}
              className="my-8 pointer-events-none select-none w-auto"
              draggable="false"
              alt="hero img"
              data-aos="fade-up"
            />
            <div className="wrap__keahlian lg:relative lg:bottom-36 lg:left-24">
              <AboutWrap>
                {listItem.map((item) => (
                  <div key={item.id} className="my-10" data-aos="fade-left">
                    <h2 className="text-3xl">{item.title}</h2>
                    <p className="text-lg text-slate-500">{item.desc}</p>
                    <br />
                    <p className="text-justify text-lg text-slate-500">
                      {item.secDesc}
                    </p>
                  </div>
                ))}
                <div>
                  <a className="link text-2xl text-blue-500 my-5">Learn More</a>
                </div>
              </AboutWrap>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutKeahlian;
