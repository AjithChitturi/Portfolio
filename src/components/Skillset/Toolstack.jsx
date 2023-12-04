import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudio,
  SiVisualstudiocode,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <p className="icon-name">Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="icon-name">Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="icon-name">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p className="icon-name">Git Hub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
