import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">John Paul Legaspi</span> from <span className="purple">Hermosa, Bataan, Philippines.<span className="purple"> </span>Contact me at +63946-3845-548.</span>
            <br />
            I hold a Bachelor of Science in Computer Engineering (BSCpE) from Eastwoods Professional College of Science and Technology, Inc. During my college years, I worked with clients from various schools—helping bring their capstone and thesis projects to life with real, working prototypes.
            <br />
            <br />
            <span className="purple">💻 What I Do</span>
            <br />
            I'm an experienced developer with a strong foundation in both software and embedded systems. I enjoy creating practical solutions—from writing backend code to designing microcontroller-based systems.
            <br />
            <br />
            <span className="purple">🎮 Outside of Work</span>
            <br />
            When I'm not coding, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Geeking out over emerging technologies 🚀
            </li>
          </ul>

          <p style={{ color: "blue" }}>
            "Technology is best when it brings people together."{" "}
          </p>
          <footer className="blockquote-footer">Matt Mullenweg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
