import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import logoDigitalCV from "../../assets/images/logo/logoDcv2.png";
import dcvContent from "../../assets/images/content/job.png";
import gdsContent from "../../assets/images/content/gdsContent.png";
import calcNote from "../../assets/images/content/calcNote.png";
import calcSales from "../../assets/images/content/calcsales.svg";
import calcStaff from "../../assets/images/content/calcstaff.svg";
import pinmylocContent from "../../assets/images/content/pinmyloc.svg";
import countListContent from "../../assets/images/content/countlist.svg";
import CardContentTab from "../../components/CardContentTab";

import { countlist, gds, pinmyloc } from "../../assets/images/logo/import";

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
    imgContent: calcNote,
    content: "CalcNote",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    id: 3,
    link: "https://digitalcv.id/id/",
    imgLogo: logoDigitalCV,
    altLogo: "logo",
    imgContent: calcSales,
    content: "CalcSales",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 4,
    link: "https://digitalcv.id/id/",
    imgLogo: logoDigitalCV,
    altLogo: "logo CalcStaff",
    imgContent: calcStaff,
    content: "CalcStaff",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 5,
    link: "https://digitalcv.id/id/",
    imgLogo: countlist,
    altLogo: "logo coutlist",
    imgContent: countListContent,
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
    imgContent: pinmylocContent,
    content: "Pinmyloc",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
];

const AllFeature = () => {
  return (
    <Container>
      <Row className="gap-y-5">
        {features.map((feature) => (
          <Col key={feature.id} lg={4} sm={12}>
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
