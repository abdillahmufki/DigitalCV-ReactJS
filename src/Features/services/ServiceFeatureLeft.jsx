import React from "react";
import { Col, Row } from "react-grid-system";

const ServiceFeatureLeft = (props) => {
  return (
    <Row align="center" justify="center" direction="row">
      <Col lg={6} md={12}>
        <div>
          <img src={props.img} alt="img" className="rounded-lg" />
        </div>
      </Col>
      <Col lg={6} md={12} sm={12}>
        <div className="my-5">
          <h3 className="text-2xl">{props.title}</h3>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </Col>
    </Row>
  );
};

export default ServiceFeatureLeft;
