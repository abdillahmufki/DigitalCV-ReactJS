import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-grid-system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../App.css";
import { Autoplay, Pagination } from "swiper";
import Card from "../../components/Card";

import AOS from "aos";
import "aos/dist/aos.css";

const listItem = [
  {
    url: "*",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Digital Cv",
    title: "DigitalCV",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    url: "*",
    img: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Pinmyloc",
    title: "Pinmyloc",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    url: "*",
    img: "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Countlist",
    title: "Countlist",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    url: "*",
    img: "https://images.unsplash.com/photo-1594402919317-9e67dca0a305?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "GDS",
    title: "GDS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    url: "*",
    img: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "CalcSales",
    title: "CalcSales",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    url: "*",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "CalcStaff",
    title: "CalcStaff",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    url: "*",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "CalcNote",
    title: "CalcNote",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];
export default function ServiceLeading() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-out", // Jenis easing yang digunakan
      delay: 200, // Delay animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <div className="mb-40 mt-30 overflow-hidden">
        <div data-aos="fade-right">
          <h2 className="p-5 text-3xl font-normal text-center dark:text-white">
            Layanan kami cocok untuk perusahaan teknologi dan pengembangan yang
            ingin meningkatkan kemampuan pengembangan, meningkatkan
            produktivitas, dan mengoptimalkan biaya.
          </h2>
        </div>
        <div>
          <div className="my-10" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-center dark:text-white">
              KAMI MEMBANGUN SOLUSI TEKNOLOGI SEPERTI
            </h3>
          </div>
          <Container fluid>
            <Swiper
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={30}
              breakpoints={{
                // For small screens
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  centeredSlidesBounds: true,
                },
                // For medium screens
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlidesBounds: true,
                },
                // For large screens
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlidesBounds: true,
                },
                // For extra large screens
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                  centeredSlidesBounds: true,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="max-[428px]:ml-5 max-[720px]:ml-[70px]"
            >
              {listItem.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={item.url}>
                      <Card
                        img={item.img}
                        alt={item.alt}
                        title={item.title}
                        desc={item.desc}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </div>
      </div>
    </>
  );
}
