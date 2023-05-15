import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../App.css";
import { Autoplay, Pagination } from "swiper";
import Card from "../../components/Card";

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
  return (
    <>
      <div className="my-40">
        <div>
          <h2 className="text-3xl text-center font-normal p-5">
            Layanan kami cocok untuk perusahaan teknologi dan pengembangan yang
            ingin meningkatkan kemampuan pengembangan, meningkatkan
            produktivitas, dan mengoptimalkan biaya.
          </h2>
        </div>
        <div className="my-10">
          <div className="my-10">
            <h3 className="font-semibold text-2xl text-center">
              KAMI MEMBANGUN SOLUSI TEKNOLOGI SEPERTI
            </h3>
          </div>
          <div className="w-full">
            <Swiper
              slidesPerView={4}
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
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="sm:mx-10"
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
          </div>
        </div>
      </div>
    </>
  );
}
