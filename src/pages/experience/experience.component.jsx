import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

export const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-gray-bg">
        <Container>
          
            <Card>
              <Card.Header as="h7" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="text-center">Webtiginoso</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technologies:</strong> PHP, CODEIGNITER, HTML, CSS, JS, Jquery, React,Mysql  
                    <br />
                    <strong>Duration:</strong> <br /> June 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Creation of several web pages using wordpress as cms</li>
                      <li>Creation of web pages and plugins using Perfex CRM</li>
                      <li>Using php with frameworks (Laravel, Codeigniter) to create web applications</li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
   
        </Container>
      </Jumbotron>
    </div>
  );
};