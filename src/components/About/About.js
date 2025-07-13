import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <Particle />
      <Container>
        <Row className="about-content">
          <Col lg={6} md={12} className="about-text">
            <Aboutcard />
          </Col>
          <Col lg={6} md={12} className="about-image">
            <img src={laptopImg} alt="John Paul Legaspi" />
          </Col>
        </Row>
        
        <Row className="skills-row">
          <Col lg={6} md={12}>
            <Techstack />
          </Col>
          <Col lg={6} md={12}>
            <Toolstack />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
