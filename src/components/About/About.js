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
            <div className="skills-section">
              <h3 className="skills-title">
                <strong className="purple">Technologies</strong> I Use
              </h3>
              <Techstack />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="tools-section">
              <h3 className="tools-title">
                <strong className="purple">Tools</strong> I Use
              </h3>
              <Toolstack />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
