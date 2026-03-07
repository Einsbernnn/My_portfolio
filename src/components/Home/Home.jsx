import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "none",
        padding: "20px 0",
      }}
    >
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          background: "none",
        }}
      >
        <Container
          className="home-content"
          style={{
            maxWidth: 1200,
            background: "rgba(15, 23, 42, 0.95)",
            borderRadius: 20,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            padding: "60px 40px",
            marginTop: 20,
            marginBottom: 20,
            border: "1px solid rgba(59, 130, 246, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Row style={{ alignItems: "center" }}>
            <Col
              lg={6}
              md={12}
              className="home-header"
              style={{ 
                textAlign: "left",
                marginBottom: { xs: 40, md: 0 }
              }}
            >
              <div style={{ marginBottom: 24 }}>
                <h1
                  className="heading"
                  style={{
                    fontSize: { xs: 36, md: 48, lg: 52 },
                    fontWeight: 700,
                    color: "#60a5fa",
                    marginBottom: 16,
                    letterSpacing: 0.5,
                    lineHeight: 1.2,
                  }}
                >
                  Hi There!{" "}
                  <span 
                    className="wave" 
                    role="img" 
                    aria-labelledby="wave"
                    style={{
                      display: "inline-block",
                      animation: "wave 2s infinite",
                      transformOrigin: "70% 70%",
                    }}
                  >
                    👋🏻
                  </span>
                </h1>
                <h2
                  className="heading-name"
                  style={{
                    fontSize: { xs: 24, md: 28, lg: 32 },
                    fontWeight: 600,
                    color: "#f8fafc",
                    marginBottom: 24,
                    lineHeight: 1.3,
                  }}
                >
                  I'M{" "}
                  <span
                    className="main-name"
                    style={{ 
                      color: "#60a5fa", 
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    JOHN PAUL LEGASPI
                  </span>
                </h2>
              </div>
              
              <div
                style={{
                  padding: "28px 24px",
                  background: "rgba(59, 130, 246, 0.08)",
                  borderRadius: 16,
                  marginBottom: 32,
                  border: "1px solid rgba(59, 130, 246, 0.15)",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.1)",
                }}
              >
                <div style={{
                  color: "#e2e8f0",
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}>
                  <Type />
                </div>
              </div>
              
              <div style={{
                fontSize: { xs: 16, md: 18 },
                color: "#cbd5e1",
                lineHeight: 1.6,
                marginBottom: 32,
              }}>
                Passionate developer creating innovative solutions with modern technologies.
              </div>
            </Col>
            
            <Col
              lg={6}
              md={12}
              style={{ 
                textAlign: "center", 
                paddingTop: { xs: 40, lg: 0 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{
                position: "relative",
                maxWidth: "100%",
                height: "auto",
              }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                    borderRadius: 20,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.boxShadow = "0 25px 50px rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 20px 40px rgba(59, 130, 246, 0.2)";
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
