import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/johnpaul.jpg";
import Tilt from "react-parallax-tilt";
import {
  FaFacebook,
  FaTelegram,
  FaViber
} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered a passion for programming and have been learning and
              growing ever since.
              <br />
              <br />
              I'm proficient in technologies like <b className="purple"> PHP</b> for backend development, <b className="purple"> C++</b> for microcontroller programming (Arduino and ESP32), and <b className="purple"> MySQL</b> for database management. I also work with <b className="purple"> Python</b>, focusing on machine learning and computer vision applications, as well as backend development.
              <br />
              <br />
              My interests lie in building innovative <b className="purple"> web technologies and products</b>, with a particular curiosity in the <b className="purple"> blockchain</b> space. I enjoy creating full-stack solutions using modern tools like <b className="purple"> HTML, CSS, JavaScript, Vue.js,</b> and <b className="purple"> Bash</b>, and I often work on hardware-integrated projects using <b className="purple"> Raspberry Pi</b>.
              <br />
              <br />
              Whenever possible, I bring my ideas to life with frameworks like <b className="purple"> Node.js</b> and libraries like <b className="purple"> React.js</b> and <b className="purple"> Next.js</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ paddingTop: "200px" }}>
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ 
                  width: "2000px",
                  height: "500px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "1px"
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/JohnpaulLgsp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="viber://add?number=639463845548"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaViber />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/einsbernnn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram /> 
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
