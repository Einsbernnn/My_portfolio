import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ProjectCard({ imgPath, imgPaths = [], title, description, fullDescription, ghLink, demoLink, isBlog }) {
  const [current, setCurrent] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Function to truncate description
  const truncateDescription = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? imgPaths.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === imgPaths.length - 1 ? 0 : prev + 1));
  };

  // Use either single image or first image from array
  const currentImage = imgPath || (imgPaths.length > 0 ? imgPaths[current] : null);

  return (
    <div className="project-card-inner">
      <div style={{ position: "relative", width: "100%", height: "220px" }}>
        {imgPaths.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                zIndex: 2,
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Previous image"
              type="button"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                zIndex: 2,
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Next image"
              type="button"
            >
              &#8594;
            </button>
          </>
        )}
        {currentImage && (
          <img
            src={currentImage}
            alt={title}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        )}
      </div>
      <h3>{title}</h3>
      <div className="project-description">
        <p style={{ whiteSpace: "pre-line" }}>
          {isExpanded ? (fullDescription || description) : truncateDescription(description)}
        </p>
        {(fullDescription || description.length > 150) && (
          <Button
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ padding: 0, color: "#c770f0" }}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        )}
      </div>
      <div className="project-buttons" style={{ marginTop: "15px" }}>
        {ghLink && (
          <Button
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-primary"
            style={{ marginRight: "10px" }}
          >
            GitHub
          </Button>
        )}
        {demoLink && (
          <Button
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-primary"
            style={{ marginRight: "10px" }}
          >
            Live Demo
          </Button>
        )}
        <Button
          variant="outline-primary"
          onClick={() => {/* Add gallery view functionality */}}
          style={{ marginRight: "10px" }}
        >
          Gallery
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => {/* Add more details functionality */}}
        >
          More Details
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
