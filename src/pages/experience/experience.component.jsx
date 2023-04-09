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
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCIA</h1>
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
                      <li>Layout of web interfaces using html/css/javascript</li>
                      <li>Development of web pages and e-commerces, based on php (codeigniter/Laravel)</li>
                      <li>Creation of plugins for the cms Wordpress, and the crm Perfex CRM in php.</li>
                      <li>Development of apps using Ionic with capacitor, and phonegap, for android and ios devices, using ReactJS as frontend language.</li>
                      <li>Responsible for the synchronization process between different systems through the use of APIS and clean architectures.</li>
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