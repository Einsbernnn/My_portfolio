import React from "react";
import { Card } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="about-card">
      <Card.Body>
        <h2 className="about-title">
          Know Who <strong className="purple">I'M</strong>
        </h2>
        
        <div className="about-info">
          <p className="about-name">
            <strong className="purple">John Paul Legaspi</strong>
          </p>
          <p className="about-location">
            Hermosa, Bataan, Philippines
          </p>
          <p className="about-contact">
            📞 +63946-3845-548
          </p>
        </div>

        <div className="about-description">
          <p>
            I'm a Computer Engineering graduate with experience in both software and embedded systems development. 
            I enjoy creating practical solutions and working on innovative projects.
          </p>
        </div>

        <div className="about-quote">
          <p>"Technology is best when it brings people together."</p>
          <small>— Matt Mullenweg</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
