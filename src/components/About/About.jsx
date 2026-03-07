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
    <div className="about-section simple-about">
      <div className="about-particles-bg">
        <Particle />
      </div>
      <Container>
        <h1 className="about-main-title">About Me</h1>
        <Row className="about-content-simple align-items-center">
          <Col lg={6} md={12} className="about-text-simple">
            <Aboutcard />
          </Col>
          <Col lg={6} md={12} className="about-image-simple">
            <img src={laptopImg} alt="John Paul Legaspi" />
          </Col>
        </Row>
        <hr className="about-divider" />
        <Row className="about-tech-simple">
          <Col md={12}>
            <h2 className="about-section-title">Technologies I Use</h2>
            <Techstack />
          </Col>
        </Row>
        <Row className="about-tools-simple">
          <Col md={12}>
            <h2 className="about-section-title">Tools I Use</h2>
            <Toolstack />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
