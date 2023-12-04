import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiCss3,
} from "react-icons/di";
import {
  SiMaterialui,
  SiGraphql,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiPython,
  SiDotnet,
  SiCsharp
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p className="icon-name">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="icon-name">Css3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="icon-name">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="icon-name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="icon-name">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p className="icon-name">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <p className="icon-name">Material-UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p className="icon-name">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <p className="icon-name">GraphQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <p className="icon-name">.Net</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <p className="icon-name">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p className="icon-name">C#</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="icon-name">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
