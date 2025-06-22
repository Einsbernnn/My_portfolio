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
            background: "rgba(35,47,71,0.85)",
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(33,150,243,0.18)",
            padding: "48px 32px",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Row style={{ alignItems: "center" }}>
            <Col
              md={6}
              className="home-header"
              style={{ textAlign: "center" }}
            >
              <h1
                className="heading"
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  color: "#2196f3",
                  marginBottom: 12,
                  letterSpacing: 1,
                }}
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h2
                className="heading-name"
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 18,
                }}
              >
                I'M{" "}
                <span
                  className="main-name"
                  style={{ color: "#2196f3", fontWeight: 800 }}
                >
                  JOHN PAUL LEGASPI
                </span>
              </h2>
              <div
                style={{
                  padding: 24,
                  background: "rgba(33,150,243,0.08)",
                  borderRadius: 12,
                  marginBottom: 18,
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 400,
                  boxShadow: "0 2px 8px rgba(33,150,243,0.08)",
                }}
              >
                <Type />
              </div>
            </Col>
            <Col
              md={6}
              style={{ textAlign: "center", paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "420px",
                  borderRadius: 18,
                  boxShadow: "0 4px 24px rgba(33,150,243,0.12)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
