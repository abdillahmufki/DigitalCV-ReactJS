import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import logoDigitalCV from "../assets/images/logo/logoDcv2.png";
import dcvContent from "../assets/images/content/job.png";
import CardContentTab from "../components/CardContentTab";

const AllFeature = () => {
  return (
    <>
      <Container fluid>
        <Row className="gap-y-5 lg:px-10">
          <Col lg={6} sm={12}>
            <Link to="https://digitalcv.id/id/">
              <CardContentTab
                imgLogo={logoDigitalCV}
                altLogo="logo"
                imgContent={dcvContent}
                content="Payroll"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
              />
            </Link>
          </Col>
          <Col lg={6} sm={12}>
            <Link to="https://digitalcv.id/id/">
              <CardContentTab
                imgLogo={logoDigitalCV}
                altLogo="logo"
                imgContent={dcvContent}
                content="Payroll"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
              />
            </Link>
          </Col>
          <Col lg={6} sm={12}>
            <Link to="https://digitalcv.id/id/">
              <CardContentTab
                imgLogo={logoDigitalCV}
                altLogo="logo"
                imgContent={dcvContent}
                content="Payroll"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
              />
            </Link>
          </Col>
          <Col lg={6} sm={12}>
            <Link to="https://digitalcv.id/id/">
              <CardContentTab
                imgLogo={logoDigitalCV}
                altLogo="logo"
                imgContent={dcvContent}
                content="Payroll"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
              />
            </Link>
          </Col>
          <Col lg={6} sm={12}>
            <Link to="https://digitalcv.id/id/">
              <CardContentTab
                imgLogo={logoDigitalCV}
                altLogo="logo"
                imgContent={dcvContent}
                content="Payroll"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
              />
            </Link>
          </Col>
          <Col lg={6} sm={12}>
            <Link to="https://digitalcv.id/id/">
              <CardContentTab
                imgLogo={logoDigitalCV}
                altLogo="logo"
                imgContent={dcvContent}
                content="Payroll"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
              />
            </Link>
          </Col>

          <Col lg={12} sm={12}>
            <CardContentTab
              imgLogo={logoDigitalCV}
              altLogo="logo"
              imgContent={dcvContent}
              content="Payroll"
              description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllFeature;
