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
            "A Full-stack Software Engineer",
            "An Embedded Systems Enthusiast",
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
