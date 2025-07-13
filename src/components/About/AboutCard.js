import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  ImPointRight, 
  FaGraduationCap, 
  FaCode, 
  FaGamepad, 
  FaMusic, 
  FaRocket 
} from "react-icons/fa";

function AboutCard() {
  return (
    <div className="about-card-container">
      <Card className="about-card">
        <Card.Body className="about-card-body">
          {/* Introduction Section */}
          <div className="about-intro">
            <h3 className="about-name">
              Hi, I'm <span className="purple">John Paul Legaspi</span>
            </h3>
            <p className="about-location">
              From <span className="purple">Hermosa, Bataan, Philippines</span>
            </p>
            <p className="about-contact">
              📞 Contact: <span className="purple">+63946-3845-548</span>
            </p>
          </div>

          {/* Education Section */}
          <div className="about-section">
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h4 className="section-title">Education</h4>
            </div>
            <p className="section-content">
              I hold a <strong>Bachelor of Science in Computer Engineering (BSCpE)</strong> from 
              <span className="purple"> Eastwoods Professional College of Science and Technology, Inc.</span>
            </p>
            <p className="section-content">
              During my college years, I worked with clients from various schools—helping bring their 
              capstone and thesis projects to life with real, working prototypes.
            </p>
          </div>

          {/* What I Do Section */}
          <div className="about-section">
            <div className="section-header">
              <FaCode className="section-icon" />
              <h4 className="section-title">What I Do</h4>
            </div>
            <p className="section-content">
              I'm an experienced developer with a strong foundation in both software and embedded systems. 
              I enjoy creating practical solutions—from writing backend code to designing microcontroller-based systems.
            </p>
          </div>

          {/* Hobbies Section */}
          <div className="about-section">
            <div className="section-header">
              <FaGamepad className="section-icon" />
              <h4 className="section-title">Outside of Work</h4>
            </div>
            <p className="section-content">
              When I'm not coding, you'll find me:
            </p>
            <ul className="hobbies-list">
              <li className="hobby-item">
                <FaGamepad className="hobby-icon" />
                <span>Playing video games 🎮</span>
              </li>
              <li className="hobby-item">
                <FaMusic className="hobby-icon" />
                <span>Listening to music 🎧</span>
              </li>
              <li className="hobby-item">
                <FaRocket className="hobby-icon" />
                <span>Geeking out over emerging technologies 🚀</span>
              </li>
            </ul>
          </div>

          {/* Quote Section */}
          <div className="about-quote">
            <blockquote className="quote-text">
              "Technology is best when it brings people together."
            </blockquote>
            <footer className="quote-author">— Matt Mullenweg</footer>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
