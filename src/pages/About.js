import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import { DiJava, DiReact, DiPython, DiGit, DiNodejs, DiMongodb } from "react-icons/di";
import { SiPostman, SiHackerone, SiTestinglibrary } from "react-icons/si";
import { BiChip } from "react-icons/bi"; // Icon for events

function About() {
  return (
    <Container fluid className="about-section" style={{paddingTop: '120px', paddingBottom: '50px'}}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ textAlign: 'center', paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="cyan">I'M</strong>
            </h1>
            <div className="glass-card" style={{textAlign: "left", padding: "30px", maxWidth: "900px", margin: "auto"}}>
                <p style={{ fontSize: '1.2em', lineHeight: '1.8' }}>
                  Hi, I am <span className="cyan">Vakkantham Sree Harshitha</span> from <span className="cyan">Hyderabad, India</span>.
                  <br /><br />
                  I am a passionate <strong>Full Stack Developer</strong> and <strong>AI/ML Enthusiast</strong>. 
                  Currently, I am an <strong className="cyan">MLSA Alpha Ambassador</strong> and a B.Tech student at <strong>Malla Reddy University</strong>.
                  <br /><br />
                  I specialize in the <strong>MERN Stack</strong>, <strong>API Integrations</strong>, and <strong>Testing</strong>. I am also a community leader who organizes technical sessions and mentors peers.
                </p>
            </div>
          </Col>
        </Row>
        
        {/* Experience Section */}
        <h1 className="project-heading" style={{textAlign: 'center', margin: '40px 0'}}>
          My <strong className="cyan">Experience</strong>
        </h1>
        <Row style={{justifyContent: 'center', paddingBottom: "30px"}}>
            <Col md={8}>
                <div className="glass-card" style={{marginBottom: '20px', textAlign: 'left'}}>
                    <h4 className="cyan" style={{fontWeight: 'bold'}}>Software Dev Intern</h4>
                    <h5>Swecha</h5>
                    <p><em>3 Months Internship</em></p>
                    <ul>
                      <li>Worked on <strong>MERN Stack</strong> feature development and bug fixing.</li>
                      <li>Performed rigorous <strong>Unit Testing</strong> and validation of web applications.</li>
                      <li>Collaborated with senior developers to integrate complex <strong>RESTful APIs</strong>.</li>
                    </ul>
                </div>
            </Col>
        </Row>

        {/* NEW: Events & Hackathons Section */}
        <h1 className="project-heading" style={{textAlign: 'center', margin: '40px 0'}}>
          Events & <strong className="cyan">Hackathons</strong>
        </h1>
        <Row style={{justifyContent: 'center', paddingBottom: "30px"}}>
            <Col md={10}>
                <div className="glass-card" style={{padding: '30px', textAlign: 'left'}}>
                    <Row>
                        <Col md={6}>
                            <h4 className="cyan"><SiHackerone /> Hackathon Wins</h4>
                            <ul style={{marginTop: '15px'}}>
                                <li style={{marginBottom: '10px'}}>🥇 <strong>3rd Prize - St. Peter's Hackathon:</strong> Built an innovative solution for community safety.</li>
                                <li style={{marginBottom: '10px'}}>🥇 <strong>3rd Prize - IARE Hackathon:</strong> Developed a rapid prototype for smart city management.</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h4 className="cyan"><BiChip /> Community & Events</h4>
                            <ul style={{marginTop: '15px'}}>
                                <li style={{marginBottom: '10px'}}>🎤 <strong>MLSA Alpha Member:</strong> Hosting workshops on Microsoft Azure & AI technologies.</li>
                                <li style={{marginBottom: '10px'}}>🤝 <strong>Volunteer:</strong> Certified volunteer for Innovation & Entrepreneurship events.</li>
                                <li style={{marginBottom: '10px'}}>🏫 <strong>Organizer:</strong> Conducting technical sessions and coding workshops at Malla Reddy University.</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>

        {/* Tech Stack Section */}
        <h1 className="project-heading" style={{textAlign: 'center', margin: '40px 0'}}>
          Professional <strong className="cyan">Skillset</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><DiJava size={50} /><h5>Java & DSA</h5></div></Col>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><DiPython size={50} /><h5>Python</h5></div></Col>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><DiReact size={50} /><h5>React.js</h5></div></Col>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><DiNodejs size={50} /><h5>Node.js</h5></div></Col>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><DiMongodb size={50} /><h5>MongoDB</h5></div></Col>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><SiPostman size={50} /><h5>API Integration</h5></div></Col>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><SiTestinglibrary size={50} /><h5>Testing</h5></div></Col>
          <Col xs={4} md={2} className="tech-icons"><div className="glass-card tech-card"><DiGit size={50} /><h5>Git & GitHub</h5></div></Col>
        </Row>

      </Container>
    </Container>
  );
}
export default About;