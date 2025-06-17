import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Project Based Developer",
          "Web Developer",
          "Embedded Systems Developer",
          "Microcontroller Enthusiast/ Hobbyist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
