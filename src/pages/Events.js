import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import { motion } from "framer-motion";
import { FaTrophy, FaMicrophone, FaHandHoldingHeart, FaLaptopCode, FaRocket } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

// 1. IMPORT THE JSON DATA
import eventData from "../data/events.json";

function Events() {
  
  // Helper to get icons dynamically based on tags
  const getIcon = (tag) => {
    if (tag.includes("Hackathon") || tag.includes("Winner")) return <FaTrophy />;
    if (tag.includes("Speaker") || tag.includes("Organizer")) return <FaMicrophone />;
    if (tag.includes("Volunteer")) return <FaHandHoldingHeart />;
    if (tag.includes("Learning") || tag.includes("Conference")) return <FaLaptopCode />;
    return <BsStars />;
  };

  return (
    <Container fluid className="project-section" style={{paddingTop: '120px', paddingBottom: '50px'}}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{textAlign: 'center', marginBottom: '50px'}}>
          My Tech <strong className="cyan">Journey</strong>
        </h1>
        
        <div className="timeline-container">
          {/* 2. MAP THROUGH THE JSON DATA */}
          {eventData.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-icon" style={{ backgroundColor: event.color }}>
                {getIcon(event.tag)}
              </div>
              <div className="timeline-content glass-card">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                    <span className="badge-custom" style={{borderColor: event.color, color: event.color}}>{event.tag}</span>
                    <span style={{fontSize: '0.85em', color: '#ccc'}}>{event.date}</span>
                </div>
                <h3 style={{fontSize: '1.4em', fontWeight: 'bold'}}>{event.title}</h3>
                <p style={{textAlign: 'justify', fontSize: '1em', marginTop: '10px'}}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Events;  