import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import { motion } from "framer-motion";
import { FaTrophy, FaMicrophone, FaHandHoldingHeart, FaLaptopCode, FaRocket } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

function Events() {
  const events = [
    {
      title: "Microsoft Learn Student Ambassador (Alpha)",
      date: "Current Milestone",
      description: "Rejection didn't stop me. It trained me. After applying 5–6 times, I finally earned the Alpha Milestone. This journey taught me patience and consistency. Excited to contribute to the tech community!",
      tag: "Milestone",
      icon: <FaRocket />,
      color: "#38bdf8" // Cyan
    },
    {
      title: "3rd Prize - Hack-A-Thon 1.0",
      date: "St. Peter's Engineering College",
      description: "Secured 3rd Prize! Built a solution through late-night coding, spontaneous brainstorming, and team resilience. It wasn't just code; it was about adaptability under pressure.",
      tag: "Hackathon Winner",
      icon: <FaTrophy />,
      color: "#FFD700" // Gold
    },
    {
      title: "2nd Prize - IARE Hackathon (GeoSick)",
      date: "Institute of Aeronautical Engineering",
      description: "Competed against 50+ teams to win 2nd Prize. Our team 'GeoSick' built a multilingual platform with smart chatbots and city-card geo analytics. Innovation has no borders!",
      tag: "Hackathon Winner",
      icon: <FaTrophy />,
      color: "#C0C0C0" // Silver
    },
    {
      title: "1st Prize - Nav Nirman Ideathon",
      date: "Malla Reddy University",
      description: "Bagged the 1st Prize among 104 teams! A surreal moment pitching to a jury of industry experts. Proved that students today aren't waiting for opportunities; we are creating them.",
      tag: "Ideathon Winner",
      icon: <FaTrophy />,
      color: "#FFD700" 
    },
    {
      title: "AIgnite 2K25 Hackathon",
      date: "Organizer - MLSC Core Team",
      description: "Part of the organizing team for our flagship event. From speaker sessions (Fabric, Azure AI) to judging top 10 finalists, we created an environment where innovation thrived.",
      tag: "Organizer",
      icon: <FaMicrophone />,
      color: "#a855f7" // Purple
    },
    {
      title: "Guest Session with Mr. Asif Ahmed",
      date: "Organizer - CSI Club",
      description: "My first organized guest session! Hosted Mr. Asif Ahmed to discuss AI/ML careers, A/B Testing, and Product Management. Packed insights and high energy.",
      tag: "Organizer",
      icon: <FaMicrophone />,
      color: "#a855f7"
    },
    {
      title: "MLSC Inauguration & Speaker",
      date: "Malla Reddy University",
      description: "Spoke on 'Microsoft for Startups Founders Hub' during the official launch of the Microsoft Learn Student Club. Witnessed registrations jump from 150 to 350+!",
      tag: "Speaker",
      icon: <FaMicrophone />,
      color: "#a855f7"
    },
    {
      title: "Swecha Medical Camp",
      date: "Volunteer",
      description: "Stepped out of my tech role to volunteer at a medical camp. Performed sugar testing and medicine distribution. Learned that giving your heart to a cause makes it meaningful.",
      tag: "Volunteer",
      icon: <FaHandHoldingHeart />,
      color: "#ff6b6b" // Red
    },
    {
      title: "Microsoft PowerBI Bootcamp",
      date: "Microsoft Hyderabad Campus",
      description: "A 2-day deep dive into Fabric, OneLake, and PowerBI. Networked with MVPs and built end-to-end data pipelines.",
      tag: "Learning",
      icon: <FaLaptopCode />,
      color: "#10b981" // Green
    },
    {
      title: "DRDO & Defense Exhibition",
      date: "Vigyan Vaibhav 2K25",
      description: "Witnessed India's defense pride: BrahMos, Agni missiles, and ISRO's Crew Module. A day of national pride and technological inspiration.",
      tag: "Exhibition",
      icon: <BsStars />,
      color: "#f97316" // Orange
    },
    {
      title: "GDG Cloud Hyderabad 2025",
      date: "Novotel HICC",
      description: "Explored Gemini Code Assist, Vertex AI, and CloudARM. A full day of innovation and networking with the cloud community.",
      tag: "Conference",
      icon: <FaLaptopCode />,
      color: "#38bdf8"
    }
  ];

  return (
    <Container fluid className="project-section" style={{paddingTop: '120px', paddingBottom: '50px'}}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{textAlign: 'center', marginBottom: '50px'}}>
          My Tech <strong className="cyan">Journey</strong>
        </h1>
        
        <div className="timeline-container">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-icon" style={{ backgroundColor: event.color }}>
                {event.icon}
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