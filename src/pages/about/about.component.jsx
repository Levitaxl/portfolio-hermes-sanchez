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
            <h1 className="pt-3 text-center font-details pb-3 color-white">ACERCA DE MÍ</h1>
            <Container>
              <Row className="pt-3 pb-5 align-items-center">
                <Col xs={12} md={6}>
                  <Row className="justify-content-center mb-2">
                    <Image className="profile justify-content-center" alt="profile" src="https://media.licdn.com/dms/image/C4E03AQH-aqXW2JvN9g/profile-displayphoto-shrink_800_800/0/1660523315844?e=1686787200&v=beta&t=WkDmo8hrCUXfxwewxjBWQ12SgS5Tei9TxDLlS0EFMTc" thumbnail fluid />
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row className=" align-items-start p-2  rounded color-white">
                    ¡Hola! Soy<strong>&nbsp;Hermes Sánchez</strong>
                    <br/>
                    <br/>
                    Programador apasionado e Ingeniero de Software, nacido en Venezuela. Soy un desarrollador Full Stack con ReactJS, PHP y MySQL como mi stack de tecnologías principales.
                    <br/>
                    <br/>
                    A la fecha, poseo más 3 años de experiencia en distintos proyectos usando distintas tecnologías: ReactJs, Jquery y VueJs en el frontend. Codeigniter, Laravel, Java, Python y Nodejs en el backend, y finalmente Ionic con Capacitor para el desarrollo de aplicaciones móvil. 
                    <br/>
                    <br/>Además, tengo conocimiento en machine learning e inteligencia artificial, experiencia en la implementación de arquitecturas limpias y DDD, junto con entendimiento en el uso de arduino UNO y sus distintos periféricos.
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="#contact">
                          <Button className="m-2" variant="outline-primary">
                            Hablemos
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
