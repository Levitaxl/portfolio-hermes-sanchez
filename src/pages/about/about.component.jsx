import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Hermes from "../../assets/img/contact/hermes.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
export const About = () => {
    return (
        <div id="about">
          <div className="about">
            <h1 className="pt-3 text-center font-details pb-3 color-white">ABOUT ME!</h1>
            <Container>
              <Row className="pt-3 pb-5 align-items-center">
                <Col xs={12} md={6}>
                  <Row className="justify-content-center mb-2">
                    <Image className="profile justify-content-center" alt="profile" src={Hermes} thumbnail fluid />
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row className=" align-items-start p-2  rounded color-white">
                    Hi there! I am <strong>&nbsp;Hermes Sánchez</strong>
                    <br />A passionate programmer and a  software engineer, born and brought up in Venezuela. I am a Full Stack Web Developer with JS, PHP and MySQL as my tech stack.
                    <br />
                    I am currently pursuing a degree in computer engineering, but I already have 2 years of experience with the management of various technologies
                    <br />
                    I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                    <br /> <br />
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="#contact">
                          <Button className="m-2" variant="outline-primary">
                            Let's talk
                          </Button>
                        </a>
                      </div>
                      {/*<div>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-success">
                            My Resume
                          </Button>
                        </a>
                      </div>*/}
                      <div>
                        <a href="https://github.com/Levitaxl" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-light">
                            GitHub
                          </Button>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.linkedin.com/in/hermes-sanchez-9b94a9199/" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-info">
                            LinkedIn
                          </Button>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
}
