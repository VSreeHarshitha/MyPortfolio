import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../components/ProjectCards";
import Particle from "../components/Particle";

function Projects() {
  return (
    <Container fluid className="project-section" style={{paddingTop: '120px', paddingBottom: '50px'}}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{textAlign: 'center'}}>
          My Recent <strong className="cyan">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: 'center' }}>
          Here are my key projects and hackathon wins.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCards
              title="Vibeza - Emotion Music App"
              description="A standalone web app for real-time music suggestions based on facial emotion detection. Implemented a machine learning model to classify user emotions (Happy, Sad, etc.) and auto-recommend relevant songs."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              title="Rapid Rescue (Research Published)"
              description="Smart Traffic Management system for ambulances. Uses IoT to alert traffic signals of approaching ambulances, turning them green for seamless passage. Published a Research Paper on this in IJCA Journal."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              title="Pollution-Responsive Smart Helmet"
              description="An IoT-based safety solution where the bike only starts if the rider is wearing a helmet and pollution levels are safe. Award-winning concept."
              ghLink="#"
            />
          </Col>

        </Row>

        <h1 className="project-heading" style={{textAlign: 'center', marginTop: '50px'}}>
          <strong className="cyan">Achievements</strong> & Awards
        </h1>
        <Row style={{ justifyContent: "center"}}>
            <Col md={10}>
                <div className="glass-card" style={{textAlign: 'left'}}>
                    <ul style={{fontSize: '1.1em', listStyleType: 'none'}}>
                        <li>🥇 <strong>3rd Prize</strong> - St. Peter's Hackathon</li>
                        <li>🥇 <strong>3rd Prize</strong> - IARE Hackathon</li>
                        <li>📜 <strong>Published Paper</strong> - "Rapid Rescue" in IJCA Journal</li>
                        <li>🤝 <strong>Volunteer Certificate</strong> - Innovation & Entrepreneurship Event</li>
                    </ul>
                </div>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;