import React from "react";
import ItemWrap from "../../components/ItemWrap";
import { Container, Row, Col } from "react-grid-system";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import contentImage from "../../assets/images/content/calcNote.png";

const listItems = [
  "Lorem Ipsum is simply dummy text",
  "Lorem Ipsum is simply dummy text",
  "Lorem Ipsum is simply dummy text",
  "Lorem Ipsum is simply dummy text",
];
const CalcNote = () => {
  return (
    <>
      <div className="flex items-center lg:px-10">
        <ItemWrap>
          <Container>
            <Row className="gap-y-5 lg:px-10">
              <Col lg={6}>
                {" "}
                <div>
                  <h2 className="text-2xl font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </h2>
                  <p className="my-10 text-[#626b79]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <ul>
                    {listItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-start gap-x-5 my-2 text-[#626b79]">
                        <CheckCircleIcon className="h-6 w-6 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                {" "}
                <div className="lg:static">
                  <img
                    src={contentImage}
                    alt="calcnote image"
                    className="lg:absolute"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </ItemWrap>
      </div>
    </>
  );
};

export default CalcNote;
