import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import smartstorage from "../../Assets/Projects/leaf.png";
import etindatracker from "../../Assets/Projects/emotion.png";
import vigitaleye from "../../Assets/Projects/codeEditor.png";
import ecosequencher from "../../Assets/Projects/eco1.png";
import cncpcbfab from "../../Assets/Projects/suicide.png";
import aivital from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center", width: "100%" }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", width: "100%", marginBottom: 32 }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecosequencher}
              isBlog={false}
              title="Eco-Sequencher"
              description="A smart reverse vending machine that converts plastic waste into clean drinking water. Features include AI-powered bottle detection, RFID-based point system, and advanced water filtration. The system promotes eco-friendly behavior while providing accessible clean water solutions."
              fullDescription="Eco-Sequencher is a smart, compact reverse vending machine designed to promote eco-friendly behavior by turning plastic waste into clean, drinkable water. Powered by a Raspberry Pi, the system uses OpenCV and machine learning to detect and identify plastic bottles. Only empty, valid PET bottles are accepted—verified by a load sensor—then compacted by a linear actuator to save internal space.\n\nEach transaction is linked to a user's RFID card, which securely tracks points earned from bottle deposits. These points can be redeemed for filtered water, delivered through a 3-stage filtration process (sediment, carbon, and CTO filters) and a UV sterilizer that ensures safe, potable output.\n\nEco-Sequencher fuses intelligent automation, computer vision, and water treatment into one sustainable device. It offers a practical and rewarding way to reduce plastic pollution while providing accessible, clean drinking water—making it an ideal solution for smart, green environments."
              ghLink="https://github.com/soumyajit4419/Eco-Sequencher"
              demoLink="https://eco-sequencher.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aivital}
              imgPaths={Array.from({length: 33}, (_, i) => require(`../../../Images/AI-Vital/AI${33-i}.PNG`))}
              isBlog={false}
              title="AI-Vital"
              description="An advanced health monitoring system that combines biomedical sensors with AI-driven analysis. Features real-time vital sign monitoring, RFID-based patient identification, and intelligent diagnostic feedback. Perfect for clinics, telemedicine, and smart health stations."
              fullDescription="AI-Vital is a next-generation health monitoring and diagnostic system that combines biomedical sensors, RFID identification, and AI-driven analysis to deliver fast, accurate, and personalized healthcare insights.\n\nThe system captures multiple vital signs in real-time, including body temperature, ECG, SpO₂, pulse rate, and blood pressure, through sensor modules powered by Arduino and ESP32 microcontrollers written in C++.\n\nPatients are identified via RFID cards, enabling seamless tracking of their medical history, vital logs, and medication records. Each user's data is securely stored and managed through a PHP and MySQL-based web dashboard.\n\nAI-Vital integrates OpenAI's diagnostic model to analyze sensor data and generate intelligent diagnostic feedback—offering potential health condition summaries and suggestions, similar to a virtual nurse or doctor.\n\nAn integrated emailing system sends real-time diagnosis reports, alerts, or recommendations to users, ensuring they stay informed and engaged in managing their health—even remotely.\n\nFrom sensor data to smart diagnosis and secure history tracking, AI-Vital is a full-stack IoT healthcare platform designed for clinics, telemedicine, and smart health stations."
              ghLink="https://github.com/Einsbernnn/AI_Vital"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vigitaleye}
              isBlog={false}
              title="Vigital-Eye"
              description="An AI-powered surveillance system with facial recognition and motion detection. Features include real-time alerts via Telegram, remote camera control, and a web interface for monitoring. Provides proactive security solutions for homes and facilities."
              fullDescription="Vigilant Eye is an advanced surveillance system that combines AI-driven facial recognition, motion detection, and instant notification technologies to enhance security in homes and facilities. Powered by a Raspberry Pi, the system uses OpenCV to identify faces in real-time, while a PIR sensor detects motion and triggers the camera to follow the subject using a servo motor.\n\nWhen motion is detected, the system checks if the face belongs to a known (trusted) user or an unknown intruder. If an intruder is detected, it immediately activates a buzzer alarm and flashes a relay-controlled LED light to warn the surroundings. Simultaneously, a notification is sent via Telegram, providing real-time alerts directly to the user's mobile device. Even when a trusted user is detected, the system logs the event and sends a Telegram update, ensuring transparency and constant awareness.\n\nUsers can control the camera directly through Telegram, issuing commands to rotate, enable or disable motion detection, or adjust monitoring behavior—all remotely and securely. The system also features a dedicated web interface, developed with Vue.js and Python, which allows users to monitor activity, retrain the facial recognition model, and manage trusted users seamlessly.\n\nBy combining intelligent automation, AI-based identification, and direct communication through Telegram, Vigilant Eye offers a proactive and highly responsive solution to modern security challenges."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartstorage}
              isBlog={false}
              title="Smart Storage"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cncpcbfab}
              isBlog={false}
              title="CNC PCB Fabrication"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etindatracker}
              isBlog={false}
              title="eTinda Tracker"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
