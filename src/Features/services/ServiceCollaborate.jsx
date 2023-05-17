import React from "react";
import { Container, Row, Col } from "react-grid-system";
import project from "../../assets/images/content/project.png";
import team from "../../assets/images/content/team.png";
import handshake from "../../assets/images/content/handshake.png";

const ServiceCollaborate = () => {
  return (
    <Container fluid className="my-52">
      <div className="mb-20">
        <h2 className="text-4xl text-center">Cara bekerja dengan kami</h2>
        <h3 className="text-xl text-center">
          Kami membangun, menguji, meluncurkan, dan meningkatkan aplikasi web
          dan mobile yang kompleks
        </h3>
      </div>
      <div className="my-10">
        <Row className="px-10">
          <Col
            lg={4}
            md={4}
            sm={12}
            className="border-r-2 border-b-2 border-slate-400 hover:border-[#ff9800] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:z-10 py-10 px-10 text-center"
          >
            <img
              src={project}
              width={100}
              alt="content"
              className="max-w-full h-auto mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-5">Berbasis Proyek</h3>
            <p>
              Cara favorit kami bermitra dengan Anda. Dalam model ini Gestalt
              System Technologi mengambil alih manajemen proyek, membuat
              keputusan terkait teknologi, menyediakan pengembangan, sementara
              Anda fokus pada keputusan terkait bisnis.
            </p>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={12}
            className="border-r-2 border-b-2 border-slate-400 hover:border-[#ff9800] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:z-10 py-10 px-10 text-center"
          >
            <img
              src={team}
              width={100}
              alt="content"
              className="max-w-full h-auto mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-5">Perluasan tim</h3>
            <p>
              Jika Anda sudah mulai mengembangkan aplikasi Anda, butuh bantuan
              dengan beberapa bagiannya, dan merasa nyaman menjadi penanggung
              jawab manajemen proyek, kami dapat menyesuaikan dengan proses yang
              ada dan berkolaborasi dengan anggota tim Anda saat ini.
            </p>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={12}
            className="border-b-2 border-slate-400 hover:border-r-2 sm:hover:border-r-2 hover:border-[#ff9800] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:z-10 py-10 px-10 text-center"
          >
            <img
              src={handshake}
              width={100}
              alt="content"
              className="max-w-full h-auto mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-5">Basis Langganan</h3>
            <p>
              Jika Anda tahu tugas apa yang perlu dilakukan, tetapi tidak yakin
              tentang ruang lingkup dan jadwal proyek, maka model kami yang
              paling fleksibel adalah untuk Anda. Di sini kami memberi Anda tim
              yang berdedikasi, dan Anda memberi mereka tugas untuk dikerjakan.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ServiceCollaborate;
