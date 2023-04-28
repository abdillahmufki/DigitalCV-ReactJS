import React from "react";
import "../App.css";
// import bgHero from "../assets/images/content/bg1.png";
import TabComponent from "../Features/TabsFeature/TabComponent.jsx";
import TabFeatureSuperiority from "../Features/TabsFeature/TabFeatureSuperiority.jsx";
import Hero from "../components/UI/Hero.jsx";
import Partner from "../Features/PartnerFeature/Partner.jsx";

const Kandidat = () => {
  return (
    <>
      <div
        className="container-2xl hero-home hero min-h-screen bg-fixed"
        // style={{
        //   backgroundImage: `url("${bgHero}")`,
        // }}
      >
        <Hero />
      </div>
      <TabFeatureSuperiority />
      <div className="my-[80px]">
        <TabComponent />
      </div>
      {/* <div className="flex justify-center">
        <Container fluid className="gap-3 my-10">
          <Row className="gap-y-5">
            <Col lg={3} md={6} sm={12}>
              <div className="flex justify-center min-w-screen min-h-fit">
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
            <Col lg={3} md={6} sm={12}>
              <div className="flex justify-center min-w-screen min-h-fit">
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
            <Col lg={3} md={6} sm={12}>
              <div className="flex justify-center min-w-screen min-h-fit">
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
            <Col lg={3} md={6} sm={12}>
              <div className="flex justify-center min-w-screen min-h-fit">
                <div>
                  <Card
                    img="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Works Space"
                    title="Workstation"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    btnText="Details"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <Partner />
    </>
  );
};

export default Kandidat;
