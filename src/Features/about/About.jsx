import React, { useEffect } from "react";
import { Container } from "react-grid-system";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import imgAbout from "../../assets/images/content/about.svg";
import Collapse from "../../components/Collapse";
import "../../App.css";

import AOS from "aos";
import "aos/dist/aos.css";

const listItem = [
  {
    index: 1,
    title: "Lorem Ipsum is simply dummy text",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    index: 2,
    title: "Lorem Ipsum is simply dummy text",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    index: 3,
    title: "Lorem Ipsum is simply dummy text",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    index: 4,
    title: "Lorem Ipsum is simply dummy text",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);

  return (
    <>
      <div className="sm:pt-24 ">
        <div className="text-center sm:px-10 px-5">
          <h2
            className="text-4xl sm:text-2xl md:text-3xl py-5 font-semibold dark:text-white"
            data-aos="fade-down">
            Meningkatkan performa bisnis melalui integrasi
          </h2>
          <p
            className="text-[#7D7784] text-lg dark:text-white"
            data-aos="fade-right">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type <br /> and scrambled it to make a type specimen book.
          </p>
          <div className="my-3">
            <a
              className="link link-hover flex justify-center gap-x-2 text-blue-800"
              data-aos="fade-down">
              Pelajari lebih lanjut
              <span className="hover:animate-bounce">
                <ArrowLongRightIcon className="h-6 w-6 text-blue-800" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <Container className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-y-10 px-10 overflow-hidden mt-10">
        <div className="text-dark">
          <div className="text-center">
            <img
              src={imgAbout}
              className="pointer-events-none select-none"
              draggable="false"
              alt="content img"
              width={400}
              data-aos="fade-right"
            />
          </div>
        </div>
        <div className="md:px-8 sm:px-0 " data-aos="fade-left">
          <div className="text-dark md:mt-16 ">
            <div className="text-center ">
              {listItem.map((item, index) => (
                <Collapse
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default About;
