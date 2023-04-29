import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import imgAbout from "../../assets/images/content/about.svg";
import Collapse from "../../components/Collapse";
import "../../App.css";

const contentObj = [
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
  return (
    <>
      <div className="wrapping__about">
        <div className="pt-24">
          <div className="text-center px-10">
            <h2 className="text-4xl py-5 font-semibold">
              Meningkatkan performa bisnis melalui integrasi
            </h2>
            <p className="text-[#7D7784]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's <br /> standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type <br /> and scrambled it to make a type specimen
              book.
            </p>
            <div className="my-3">
              <a className="link link-hover flex justify-center gap-x-2 text-blue-800">
                Pelajari lebih lanjut
                <span className="hover:animate-bounce">
                  <ArrowLongRightIcon className="h-6 w-6 text-blue-800" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="text-dark">
              <div className="text-center">
                <img
                  src={imgAbout}
                  className="pointer-events-none select-none"
                  draggable="false"
                  alt="content img"
                  width={400}
                />
              </div>
            </div>
          </Col>
          <Col className="flex items-center" lg={6} md={6} sm={12}>
            <div className="text-dark">
              <div className="text-center">
                {contentObj.map((item, index) => (
                  <Collapse
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
