import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import med from "../assets/projects/Med.png";
import BC from "../assets/projects/SignatureVerifiaCrypt.jpeg";
import TA from "../assets/projects/travel.jpeg";
import PM from "../assets/projects/PhotGalary.jpeg";
import AD from "../assets/projects/OIP.jpeg"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This is a dynamic and user-friendly blogging website developed using the .NET MVC (Model-View-Controller)
              framework. The project aims to provide a platform for users to create, manage, and share their blogs while
              offering an engaging and interactive experience for readers. With This website bloggers can express their
              thoughts, engage with a community, and gain visibility for their content. This is the project that I have done by
              using ASP.NET MVC"
              ghLink="https://github.com/AjithChitturi/Blogging-Site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PM}
              isBlog={false}
              title="Memoria"
              description="Memoria is a user-friendly web application designed to provide a secure and convenient platform for users
              to store and organize their cherished memories in the form of pictures. With the power of React and
              TypeScript, Memoria offers a seamless and intuitive experience for users to upload, manage, and relive their
              precious moments"
              ghLink="https://github.com/AjithChitturi/Photo-Gallery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={med}
              isBlog={false}
              title="MediGuide"
              description="MediGuide, an iOS-compatible React Native Expo app, offers a revolutionary voice-activated medical
              information platform. Users can effortlessly access drug details, including uses, side effects, and interactions,
              using intuitive natural language voice commands. This user-friendly app aims to empower individuals with
              comprehensive medical knowledge, enhancing accessibility and ease of information retrieval."
              ghLink="https://github.com/AjithChitturi/Medi-Guide"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TA}
              isBlog={false}
              title="TravelAdvisor"
              description="TravelAdvisor, a React Native Expo-built iOS app, is a robust travel companion simplifying trip planning and
              enriching travel experiences. This comprehensive platform offers personalized recommendations for dining,
              exploring, and must-visit places, streamlining the discovery process. Its AI-integrated chatbot ensures real time assistance and answers, enhancing the efficiency of trip planning."
              ghLink="https://github.com/AjithChitturi/Travel_Advisor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BC}
              isBlog={false}
              title="CryptographyToolkit"
              description="The CryptographyToolkit is a Python-based collection of cryptographic tools and utilities 
              designed to facilitate various encryption, decryption, and secure data sharing operations. It includes 
              functionalities for generating secrets, managing JSON data structures for cryptographic operations, 
              implementing verifiable secret sharing, and Schnorr signature scheme."
              ghLink="https://github.com/AjithChitturi/Hash-Effect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AD}
              isBlog={false}
              title="Admin Dashboard"
              description="Developed a responsive MERN stack admin dashboard with data visualization and cloud deployment.
              Proficient in React, Express, Node.js, and MongoDB, focused on high-quality, scalable web solutions"
              ghLink="https://github.com/AjithChitturi/Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects