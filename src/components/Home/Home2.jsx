import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/johnpaul.jpg";
import Tilt from "react-parallax-tilt";
import {
  FaFacebook,
  FaTelegram,
  FaViber,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ padding: "80px 0" }}>
      <Container>
        <Row style={{ alignItems: "center", marginBottom: 60 }}>
          <Col lg={8} md={12} className="home-about-description" style={{ marginBottom: { xs: 40, lg: 0 } }}>
            <div style={{ marginBottom: 32 }}>
              <h1 style={{ 
                fontSize: { xs: "2.2em", md: "2.6em" },
                fontWeight: 700,
                color: "#f8fafc",
                marginBottom: 24,
                lineHeight: 1.2,
              }}>
                LET ME <span className="purple" style={{ color: "#60a5fa" }}> INTRODUCE </span> MYSELF
              </h1>
            </div>
            
            <div className="home-about-body" style={{
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
              color: "#e2e8f0",
            }}>
              <p style={{ marginBottom: 24 }}>
                I discovered a passion for programming and have been learning and
                growing ever since.
              </p>
              
              <p style={{ marginBottom: 24 }}>
                I'm proficient in technologies like{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>PHP</span> for backend development,{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>C++</span> for microcontroller programming (Arduino and ESP32), and{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>MySQL</span> for database management. I also work with{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>Python</span>, focusing on machine learning and computer vision applications, as well as backend development.
              </p>
              
              <p style={{ marginBottom: 24 }}>
                My interests lie in building innovative{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>web technologies and products</span>, with a particular curiosity in the{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>blockchain</span> space. I enjoy creating full-stack solutions using modern tools like{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>HTML, CSS, JavaScript, Vue.js,</span> and{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>Bash</span>, and I often work on hardware-integrated projects using{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>Raspberry Pi</span>.
              </p>
              
              <p style={{ marginBottom: 0 }}>
                Whenever possible, I bring my ideas to life with frameworks like{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>Node.js</span> and libraries like{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>React.js</span> and{" "}
                <span style={{ color: "#60a5fa", fontWeight: 600 }}>Next.js</span>
              </p>
            </div>
          </Col>
          
          <Col lg={4} md={12} className="myAvtar" style={{ 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            paddingTop: { xs: 40, lg: 0 }
          }}>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={800}
              transitionSpeed={1500}
              scale={1.05}
              gyroscope={true}
            >
              <div style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                border: "3px solid rgba(59, 130, 246, 0.2)",
              }}>
                <img 
                  src={myImg} 
                  className="img-fluid" 
                  alt="John Paul Legaspi" 
                  style={{ 
                    width: "100%",
                    height: "auto",
                    maxWidth: "400px",
                    borderRadius: 16,
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </Tilt>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social" style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 40 }}>
              <h1 style={{
                fontSize: { xs: "2em", md: "2.4em" },
                fontWeight: 700,
                color: "#f8fafc",
                marginBottom: 16,
              }}>
                FIND ME ON
              </h1>
              <p style={{
                fontSize: { xs: 16, md: 18 },
                color: "#cbd5e1",
                marginBottom: 32,
              }}>
                Feel free to <span className="purple" style={{ color: "#60a5fa", fontWeight: 600 }}>connect</span> with me
              </p>
            </div>
            
            <ul className="home-about-social-links" style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "center",
              gap: 24,
              flexWrap: "wrap",
            }}>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/JohnpaulLgsp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    background: "rgba(59, 130, 246, 0.1)",
                    border: "2px solid rgba(59, 130, 246, 0.2)",
                    color: "#60a5fa",
                    fontSize: 24,
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.2)";
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 10px 20px rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.1)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="viber://add?number=639463845548"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    background: "rgba(59, 130, 246, 0.1)",
                    border: "2px solid rgba(59, 130, 246, 0.2)",
                    color: "#60a5fa",
                    fontSize: 24,
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.2)";
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 10px 20px rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.1)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    background: "rgba(59, 130, 246, 0.1)",
                    border: "2px solid rgba(59, 130, 246, 0.2)",
                    color: "#60a5fa",
                    fontSize: 24,
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.2)";
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 10px 20px rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.1)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
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
