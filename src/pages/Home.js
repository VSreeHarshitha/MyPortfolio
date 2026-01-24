import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particle from "../components/Particle";
import myImg from "../assets/professional attiree.PNG"; // Ensure this matches your file name
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      {/* SECTION 1: HERO (Top Part) */}
      <Container fluid className="home-section" id="home" style={{paddingTop: '150px', paddingBottom: '100px'}}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize: '3em' }}>
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{fontSize: '3.5em'}}>
                I'M <strong className="main-name"> HARSHITHA VAKKANTHAM</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: '2em' }}>
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer (MERN)",
                      "MLSA Alpha Ambassador",
                      "AI & Machine Learning Enthusiast",
                      "Hackathon Winner & Innovator"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: 'flex', justifyContent: 'center' }}>
              <img 
                src={myImg} 
                alt="home pic" 
                className="home-pic" 
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* SECTION 2: SELF INTRODUCTION (New Bottom Part) */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em", textTransform: "uppercase" }}>
                Let Me <span className="cyan"> Introduce </span> Myself
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="cyan"> Python, Java, and Javascript. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="cyan">Web Technologies and Products </b>
                </i>
                and also in areas related to{" "}
                <i>
                  <b className="cyan">Artificial Intelligence and IoT (Smart Helmets/Trolleys).</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products with <b className="cyan">Node.js</b> and
                <i>
                  <b className="cyan"> Modern Javascript Library and Frameworks</b>
                </i>
                &nbsp; like
                <i>
                  <b className="cyan"> React.js.</b>
                </i>
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="cyan">connect </span>with me
              </p>
              <ul className="home-about-social-links" style={{listStyle: 'none', padding: 0}}>
                <li className="social-icons" style={{display: 'inline-block', marginRight: '20px'}}>
                  <a
                    href="https://github.com/VSreeHarshitha"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                    style={{color: 'black'}} 
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons" style={{display: 'inline-block', marginRight: '20px'}}>
                  <a
                    href="https://www.linkedin.com/in/harshithasv"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                    style={{color: '#0e76a8'}}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons" style={{display: 'inline-block', marginRight: '20px'}}>
                  <a
                    href="https://www.instagram.com/sree_harshitha_8"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                    style={{color: '#E1306C'}}
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons" style={{display: 'inline-block', marginRight: '20px'}}>
                  <a
                    href="mailto:sreeharshithavakkantham246@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                    style={{color: '#D44638'}}
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;