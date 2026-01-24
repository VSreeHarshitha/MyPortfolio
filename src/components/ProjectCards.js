import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="glass-card" style={{ height: '100%' }}>
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <div style={{height: '200px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           <h3 className="cyan">{props.title} Preview</h3>
      </div>
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: '0.9em' }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;