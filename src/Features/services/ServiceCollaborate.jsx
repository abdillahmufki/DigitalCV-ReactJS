import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import project from "../../assets/images/content/project.png";
import team from "../../assets/images/content/team.png";
import handshake from "../../assets/images/content/handshake.png";
import AOS from "aos";
import "aos/dist/aos.css";
const listItem = [
  {
    title: "Berbasis Proyek",
    description:
      "Cara favorit kami bermitra dengan Anda. Dalam model ini Gestalt System Technologi mengambil alih manajemen proyek, membuat keputusan terkait teknologi, menyediakan pengembangan, sementara Anda fokus pada keputusan terkait bisnis.",
    image: project,
  },
  {
    title: "Perluasan tim",
    description:
      "Jika Anda sudah mulai mengembangkan aplikasi Anda, butuh bantuan dengan beberapa bagiannya, dan merasa nyaman menjadi penanggung jawab manajemen proyek, kami dapat menyesuaikan dengan proses yang ada dan berkolaborasi dengan anggota tim Anda saat ini.",
    image: team,
  },
  {
    title: "Basis Langganan",
    description:
      "Jika Anda tahu tugas apa yang perlu dilakukan, tetapi tidak yakin tentang ruang lingkup dan jadwal proyek, maka model kami yang paling fleksibel adalah untuk Anda. Di sini kami memberi Anda tim yang berdedikasi, dan Anda memberi mereka tugas untuk dikerjakan.",
    image: handshake,
  },
];

const ServiceCollaborate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <Container fluid className="my-52">
      <div className="mb-20 dark:text-white" data-aos="fade-down">
        <h2 className="text-4xl max-[480px]:text-xl text-black text-center dark:text-white">
          Cara bekerja dengan kami
        </h2>
        <h3 className="text-2xl max-[480px]:text-lg text-slate-600 text-center dark:text-white">
          Kami membangun, menguji, meluncurkan, dan meningkatkan aplikasi web
          dan mobile yang kompleks
        </h3>
      </div>
      <div className="my-10" data-aos="fade-up">
        <Row className="px-5 gap-y-5">
          {listItem.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div className="px-6 py-10 text-center duration-300 transform bg-[#f5f5f5] shadow-lg hover:shadow-xl border-slate-400 rounded-xl hover:transition hover:scale-105 hover:z-10 h-[31rem] max-[428px]:h-[36rem]">
                <div className="flex justify-center my-5">
                  <img src={item.image} width={100} alt="img" />
                </div>
                <div className="py-5">
                  <h3 className="text-2xl max-[480px]:text-xl text-black font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-base">{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ServiceCollaborate;
