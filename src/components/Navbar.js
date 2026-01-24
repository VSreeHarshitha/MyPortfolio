import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdEventNote } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      variant="dark" // This tells Bootstrap to use light text
    >
      <Container>
        {/* UPDATED BRAND NAME HERE */}
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <span className="cyan" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Harshitha</span>
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            
            {/* Added style={{ color: 'white' }} to force visibility */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ color: 'white' }}>
                <AiOutlineHome style={{ marginBottom: "2px", color: 'white' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} style={{ color: 'white' }}>
                <AiOutlineUser style={{ marginBottom: "2px", color: 'white' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)} style={{ color: 'white' }}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px", color: 'white' }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/events" onClick={() => updateExpanded(false)} style={{ color: 'white' }}>
                <MdEventNote style={{ marginBottom: "2px", color: 'white' }} /> Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)} style={{ color: 'white' }}>
                <CgFileDocument style={{ marginBottom: "2px", color: 'white' }} /> Resume
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;