import React from "react";
import { Container } from "react-grid-system";
import ServiceFeatureLeft from "./ServiceFeatureLeft";
import ServiceFeatureRight from "./ServiceFeatureRight";

const services = [
  {
    title: "Analisis Bisnis dan Perencanaan Strategis",
    description:
      "Kami memulai setiap proyek pengembangan dengan penilaian persyaratannya untuk membuat rencana pengembangan berbasis iterasi yang jelas. Model bebas risiko kami mencakup penilaian proyek percontohan gratis.",
    img: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    Component: ServiceFeatureLeft,
  },
  {
    title: "Layanan pengembangan aplikasi web",
    description:
      "Kami senang bekerja pada aplikasi web yang kompleks dan memberikan produk yang mudah digunakan dan indah. Kami dapat mengembangkan produk baru dari bawah ke atas, atau menyesuaikan aplikasi yang ada.",
    img: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    Component: ServiceFeatureRight,
  },
  {
    title: "Layanan Pengembangan Aplikasi Mobile",
    description:
      "Meskipun pengembangan aplikasi web adalah esensi kami, kami juga senang membuat aplikasi yang mudah digunakan, dan terlihat bagus untuk perangkat iOS dan Android.",
    img: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    Component: ServiceFeatureLeft,
  },
  {
    title:
      "Manfaatkan layanan desain aplikasi Web dan Seluler kami untuk peluncuran produk cepat, kegunaan yang unggul, dan peningkatan keterlibatan pengguna dengan aplikasi Anda",
    description:
      "Mengandalkan prinsip-prinsip desain UI dan UX saat ini, tim pemenang penghargaan kami menciptakan desain aplikasi yang indah yang mudah digunakan.",
    img: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    Component: ServiceFeatureRight,
  },
  {
    title:
      "Layanan Manajemen proyek dan pengiriman untuk pengembangan aplikasi",
    description:
      "Anggota tim manajemen proyek & pengiriman kami menerapkan metodologi Agile SCRUM untuk memastikan keberhasilan penerapan. Kami juga menggunakan alur kerja berulang yang bekerja dengan baik dengan berbagai departemen (pemasaran, penjualan).",
    img: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    Component: ServiceFeatureLeft,
  },
  {
    title:
      "Layanan jaminan kualitas dibangun ke dalam metodologi pengembangan produk apa pun",
    description:
      "Gestalt System Technologi uses manual and automatic QA and testing procedures to make sure delivered applications are secure, stable and working properly.",
    img: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    Component: ServiceFeatureRight,
  },
  {
    title: "Dukungan aplikasi dan layanan peningkatan setelah implementasi",
    description:
      "Kami dapat mengambil alih dukungan teknis dan pelanggan untuk aplikasi yang dikembangkan, dan terus bekerja pada peningkatan produk, tanpa mengganggu fitur produk saat ini.",
    img: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    Component: ServiceFeatureLeft,
  },
];

const ServiceLifecycle = () => {
  return (
    <div>
      {services.map((service, index) => (
        <Container
          key={index}
          align="center"
          justify="center"
          direction="row"
          className="my-10 overflow-hidden"
        >
          <service.Component {...service} />
        </Container>
      ))}
    </div>
  );
};

export default ServiceLifecycle;
