import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import bgHero from "../assets/images/content/bg1.png";
// import SearchBar from "../components/SearchBar";
// import ButtonPencarian from "../components/ButtonPencarian";
import imgContent from "../assets/images/content/komponen1.png";
import TabComponent from "../components/TabComponent";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Kandidat = () => {
  return (
    <>
      <div
        className="container-2xl hero min-h-screen bg-fixed mb-5"
        // style={{
        //   backgroundImage: `url("${bgHero}")`,
        // }}
      >
        <div>
          <Hero />
        </div>
      </div>
      <div className="flex justify-center min-w-screen min-h-fit px-10">
        <div>
          <TabComponent />
        </div>
      </div>
      <Container fluid className="my-10">
        <Row className="px-10">
          <Col lg={4} md={6} sm={12}>
            <div className="flex justify-center min-w-screen min-h-fit px-10">
              <div>
                <Card
                  img="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="workstation"
                  title="Sharing"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  btnText="Details"
                />
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="flex justify-center min-w-screen min-h-fit px-10">
              <div>
                <Card
                  img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="workstation"
                  title="Growth"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  btnText="Details"
                />
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="flex justify-center min-w-screen min-h-fit px-10">
              <div>
                <Card
                  img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="workstation"
                  title="Workstation"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  btnText="Details"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kandidat;
