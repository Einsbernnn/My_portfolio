import React from "react";

function AboutCard() {
  return (
    <div className="aboutcard-simple">
      <h2 className="aboutcard-name">John Paul Legaspi</h2>
      <div className="aboutcard-location">Hermosa, Bataan, Philippines</div>
      <div className="aboutcard-contact">📞 +63946-3845-548</div>
      <p className="aboutcard-desc">
        I'm a Computer Engineering graduate with experience in both software and embedded systems development. I enjoy creating practical solutions and working on innovative projects.
      </p>
      <div className="aboutcard-quote">
        <span>"Technology is best when it brings people together."</span>
        <div className="aboutcard-quote-author">— Matt Mullenweg</div>
      </div>
    </div>
  );
}

export default AboutCard;
