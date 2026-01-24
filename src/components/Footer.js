import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiFillPhone } from "react-icons/ai";

function Footer() {
  let date = new Date();
  date.getFullYear();
  return (
    <Container fluid className="footer" style={{background: 'rgba(10, 15, 28, 0.8)', backdropFilter: 'blur(10px)', padding: '20px', textAlign: 'center', position: 'relative', bottom: '0', width: '100%'}}>
      <Row>
        <Col md="12" className="footer-copywright">
          <h3 style={{fontSize: '1em', color: '#ccc'}}>Designed by <span className="cyan">Harshitha Vakkantham</span></h3>
          
          <div style={{marginTop: '15px'}}>
            <a href="tel:+919346420953" style={{color: "white", margin: "0 15px", fontSize: "1.2em", textDecoration: 'none'}}>
                <AiFillPhone /> +91 9346420953
            </a>
            <br className="d-md-none"/>
            <a href="mailto:sreeharshithavakkantham246@gmail.com" style={{color: "white", margin: "0 15px", fontSize: "1.2em", textDecoration: 'none'}}>
                <AiOutlineMail /> Email Me
            </a>
          </div>

          <div style={{marginTop: '10px'}}>
             {/* UPDATED GITHUB LINK */}
             <a href="https://github.com/VSreeHarshitha" target="_blank" rel="noopener noreferrer" style={{color: "white", margin: "0 10px", fontSize: "1.5em"}}>
                <AiFillGithub />
             </a>
             {/* UPDATED LINKEDIN LINK */}
             <a href="https://www.linkedin.com/in/harshithasv" target="_blank" rel="noopener noreferrer" style={{color: "white", margin: "0 10px", fontSize: "1.5em"}}>
                <AiFillLinkedin />
             </a>
             <a href="https://www.instagram.com/sree_harshitha_8" target="_blank" rel="noopener noreferrer" style={{color: "white", margin: "0 10px", fontSize: "1.5em"}}>
                <AiFillInstagram />
             </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;