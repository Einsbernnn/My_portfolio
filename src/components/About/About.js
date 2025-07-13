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
      <Container fluid>
        {/* Hero Section */}
        <Row className="about-hero">
          <Col lg={12}>
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <p className="about-hero-subtitle">
                Passionate developer crafting innovative solutions with technology
              </p>
            </div>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="about-main-content">
          <Col lg={7} md={12} className="about-text-section">
            <Aboutcard />
          </Col>
          <Col lg={5} md={12} className="about-image-section">
            <div className="about-image-container">
              <img src={laptopImg} alt="John Paul Legaspi" className="about-image" />
              <div className="about-image-overlay"></div>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="skills-section">
          <Col lg={12}>
            <div className="skills-header">
              <h2 className="skills-title">
                Professional <strong className="purple">Skillset</strong>
              </h2>
              <p className="skills-subtitle">
                Technologies and frameworks I work with
              </p>
            </div>
            <Techstack />
          </Col>
        </Row>

        {/* Tools Section */}
        <Row className="tools-section">
          <Col lg={12}>
            <div className="tools-header">
              <h2 className="tools-title">
                <strong className="purple">Tools</strong> I Use
              </h2>
              <p className="tools-subtitle">
                Development tools and platforms that power my work
              </p>
            </div>
            <Toolstack />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
