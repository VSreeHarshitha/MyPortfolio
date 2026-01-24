import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../components/Particle";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section" style={{paddingTop: '120px', paddingBottom: '50px', height: '100vh'}}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col style={{textAlign: 'center'}}>
             <h1 style={{marginBottom: '50px'}}>My <strong className="cyan">Resume</strong></h1>
             <div className="glass-card" style={{padding: '50px'}}>
                <p>Click the button below to download my latest CV.</p>
                <Button variant="primary" href="#" target="_blank" style={{ maxWidth: "250px" }}>
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
             </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Resume;