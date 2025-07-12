import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{
      minHeight: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Project Based Developer",
            "Web Developer",
            "Embedded Systems Developer",
            "Microcontroller Enthusiast",
            "Full-Stack Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 80,
          cursor: "|",
          cursorClassName: "Typewriter__cursor",
          wrapperClassName: "Typewriter__wrapper",
        }}
        onInit={(typewriter) => {
          typewriter.pauseFor(1000).start();
        }}
      />
    </div>
  );
}

export default Type;
