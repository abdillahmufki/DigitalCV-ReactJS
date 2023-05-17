import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import logoDigitalCV from "../../assets/images/logo/logoDcv2.png";
import dcvContent from "../../assets/images/content/job.png";
import gdsContent from "../../assets/images/content/gdsContent.png";
import CardContentTab from "../../components/CardContentTab";
import {
  countlist,
  gds,
  pinmyloc,
  digitalcv,
} from "../../assets/images/logo/import";

const features = [
  {
    id: 1,
    link: "https://digitalcv.id/id/",
    imgLogo: gds,
    altLogo: "logo",
    imgContent: gdsContent,
    content: "Gds",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    id: 2,
    link: "https://digitalcv.id/id/",
    imgLogo: countlist,
    altLogo: "logo",
    imgContent: dcvContent,
    content: "CalcNote",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    id: 3,
    link: "https://digitalcv.id/id/",
    imgLogo: logoDigitalCV,
    altLogo: "logo",
    imgContent: dcvContent,
    content: "CalcSales",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    id: 4,
    link: "https://digitalcv.id/id/",
    imgLogo: logoDigitalCV,
    altLogo: "logo CalcStaff",
    imgContent: dcvContent,
    content: "CalcStaff",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    id: 5,
    link: "https://digitalcv.id/id/",
    imgLogo: countlist,
    altLogo: "logo coutlist",
    imgContent: dcvContent,
    content: "CountList",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    id: 6,
    link: "https://digitalcv.id/id/",
    imgLogo: logoDigitalCV,
    altLogo: "logo digital cv",
    imgContent: dcvContent,
    content: "Digital CV",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    id: 7,
    link: "https://digitalcv.id/id/",
    imgLogo: pinmyloc,
    altLogo: "logo Pinmyloc",
    imgContent: dcvContent,
    content: "Pinmyloc",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
];

const AllFeature = () => {
  return (
    <Container fluid>
      <Row className="gap-y-5 lg:px-10">
        {features.map((feature) => (
          <Col key={feature.id} lg={6} sm={12}>
            <Link to={feature.link}>
              <CardContentTab
                imgLogo={feature.imgLogo}
                altLogo={feature.altLogo}
                imgContent={feature.imgContent}
                content={feature.content}
                description={feature.description}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllFeature;
