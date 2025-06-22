import { Button } from "react-bootstrap";
import React, { useState } from "react";

function ProjectCard({ imgPath, imgPaths = [], title, description, fullDescription, ghLink, demoLink, isBlog }) {
  const [current, setCurrent] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

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

  const openGallery = () => {
    setShowGallery(true);
    setGalleryIndex(0);
  };
  const closeGallery = () => setShowGallery(false);
  const nextGalleryImage = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (imgPaths.length > 0 ? (prev + 1) % imgPaths.length : 0));
  };
  const prevGalleryImage = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (imgPaths.length > 0 ? (prev - 1 + imgPaths.length) % imgPaths.length : 0));
  };

  // Use either single image or first image from array
  const currentImage = imgPath || (imgPaths.length > 0 ? imgPaths[current] : null);

  return (
    <div className="project-card-inner" style={{
      background: "rgba(35,47,71,0.85)", // semi-transparent, allows particles to show through
      borderRadius: "16px",
      boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
      border: "2px solid #2196f3",
      padding: "24px 18px 18px 18px",
      marginBottom: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: 500,
      position: "relative"
    }}>
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
              border: "2px solid #2196f3" // blue
            }}
          />
        )}
      </div>
      <h3 style={{ color: "#2196f3", marginTop: 18, marginBottom: 10, fontWeight: 700, fontSize: 22 }}>{title}</h3>
      <div className="project-description" style={{ color: "#fff", fontSize: 16, textAlign: "center", minHeight: 90, marginBottom: 10, background: "rgba(33,150,243,0.08)", borderRadius: 8, padding: 12, border: "1px solid #2196f3" }}>
        <p style={{ whiteSpace: "pre-line", margin: 0 }}>
          {isExpanded ? (fullDescription || description) : truncateDescription(description)}
        </p>
        {(fullDescription || description.length > 150) && (
          <Button
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ padding: 0, color: "#2196f3", fontWeight: 600 }}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        )}
      </div>
      <div className="project-buttons" style={{ marginTop: "auto", display: "flex", justifyContent: "center", gap: "10px", width: "calc(100% - 20px)", flexWrap: "wrap" }}>
        <Button
          href={ghLink || undefined}
          target={ghLink ? "_blank" : undefined}
          rel={ghLink ? "noopener noreferrer" : undefined}
          variant="primary"
          style={{ minWidth: 90, color: "#fff", background: "#6c2eb7", border: "none", flex: 1, maxWidth: 120 }}
          disabled={!ghLink}
        >
          GitHub
        </Button>
        <Button
          href={title === "AI-Vital" ? undefined : (demoLink || undefined)}
          target={title === "AI-Vital" ? undefined : (demoLink ? "_blank" : undefined)}
          rel={title === "AI-Vital" ? undefined : (demoLink ? "noopener noreferrer" : undefined)}
          variant="primary"
          style={{ minWidth: 90, color: "#fff", background: "#6c2eb7", border: "none", flex: 1, maxWidth: 120 }}
          disabled={!demoLink && title !== "AI-Vital"}
          onClick={title === "AI-Vital" ? () => setShowGallery(true) : undefined}
        >
          Demo
        </Button>
        <Button
          variant="primary"
          style={{ minWidth: 90, color: "#fff", background: "#6c2eb7", border: "none", flex: 1, maxWidth: 120 }}
          onClick={openGallery}
        >
          Gallery
        </Button>
        <Button
          variant="primary"
          style={{ minWidth: 90, color: "#fff", background: "#6c2eb7", border: "none", flex: 1, maxWidth: 120 }}
          onClick={() => {/* Add more details functionality */}}
        >
          View Full Details
        </Button>
      </div>
      {showGallery && title === "AI-Vital" && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.85)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} onClick={closeGallery}>
          <div style={{ position: "relative", maxWidth: 700, width: "90%", background: "#232f47", borderRadius: 12, boxShadow: "0 6px 24px rgba(0,0,0,0.5)", padding: 24, display: "flex", flexDirection: "column", alignItems: "center" }} onClick={e => e.stopPropagation()}>
            <div style={{ width: "100%", maxHeight: 400, marginBottom: 16 }}>
              <iframe
                src="https://drive.google.com/file/d/16WaCImup-IJK0gs1gDGojiZPbU3ey9i2/preview"
                width="100%"
                height="400"
                allow="autoplay"
                style={{ border: 0, borderRadius: 8 }}
                title="AI-Vital Demo Video"
              ></iframe>
            </div>
            <Button variant="secondary" onClick={closeGallery} style={{ marginTop: 8 }}>Close</Button>
          </div>
        </div>
      )}
      {/* Only show gallery for images, not for AI-Vital demo video */}
      {showGallery && title !== "AI-Vital" && imgPaths.length > 0 && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.85)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} onClick={closeGallery}>
          <div style={{ position: "relative", maxWidth: 700, width: "90%", background: "#232f47", borderRadius: 12, boxShadow: "0 6px 24px rgba(0,0,0,0.5)", padding: 24, display: "flex", flexDirection: "column", alignItems: "center" }} onClick={e => e.stopPropagation()}>
            <img src={imgPaths[galleryIndex]} alt={`Gallery ${galleryIndex+1}`} style={{ width: "100%", maxHeight: 400, objectFit: "contain", borderRadius: 8, marginBottom: 16, border: "2px solid #2196f3" }} />
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 8 }}>
              <Button variant="primary" onClick={prevGalleryImage} style={{ minWidth: 100, background: "#2196f3", border: "none" }}>Previous</Button>
              <span style={{ color: "#fff", alignSelf: "center" }}>{galleryIndex+1} / {imgPaths.length}</span>
              <Button variant="primary" onClick={nextGalleryImage} style={{ minWidth: 100, background: "#2196f3", border: "none" }}>Next</Button>
            </div>
            <Button variant="secondary" onClick={closeGallery} style={{ marginTop: 8 }}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
