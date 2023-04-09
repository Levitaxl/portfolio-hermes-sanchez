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
              <Card.Header as="h7" className="d-flex justify-content-center flex-wrap title-work red-background">
                <Card.Title className="text-center">Webtiginoso</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column padding-top-120">
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Tecnologías:</strong> PHP, JQUERY, REACTJS, IONIC, MYSQL
                    <br />
                    <strong>Duración:</strong> <br /> June 2020 - Present
                    <br/>
                    <strong> Descripción </strong>
                    <ul className="text-left">
                      <li>Maquetación de interfaces web utilizando ReactJs.</li>
                      <li>Elaboración de páginas web y tiendas virtuales con Php.</li>
                      <li>Creación de plugins para el cms Wordpress, y el crm Perfex CRM en Php.</li>
                      <li>Elaboración de apps ios y android utilizando Ionic con capacitor/phonegap y ReactJS.</li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
              <img className="img-rounded" src="https://media.licdn.com/dms/image/C4E0BAQH6oxGqjsQh1g/company-logo_200_200/0/1598039947051?e=1689206400&v=beta&t=6TBrA9yl5TXbpca2nBCn293Hl5daoGzOW6LsugQFcJY"></img>
            </Card>
   
        </Container>
        
      </Jumbotron>

      <Jumbotron className="jumbo-gray-bg">
        <Container>
          
            <Card>
              <Card.Header as="h7" className="d-flex justify-content-center flex-wrap title-work girl-up-background">
                <Card.Title className="text-center">Girl Up</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column padding-top-120">
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Pasante</strong>
                    <br />
                    <strong>Tecnologías:</strong> PHP, WORDPRESS, MYSQL
                    <br />
                    <strong>Duración:</strong> <br /> June 2020 - Present
                    <br/>
                    <strong> Descripción </strong>
                    <ul className="text-left">
                      <li>Se desarrolló una página web con la finalidad de proveer a la comunidad joven venezolana recursos de empoderamiento femenino y educación sobre tópicos que involucran los derechos de las mujeres. </li>
                      <li>Yo fui el encargado del backend de la página, desarrollando funcionalidades mediante plugins en el lenguaje php.</li>
                    </ul>
      
                    
                  </Card.Text>
                </div>
              </Card.Body>
              <img className="img-rounded" src="https://media.licdn.com/dms/image/C4E0BAQHLow5Ym-s5YQ/company-logo_200_200/0/1622036271602?e=1689206400&v=beta&t=MqBnL7nyS9tKu33lS3ZaU6aYdqhuHM11Ev8Gu5Ndwqo"></img>
            </Card>
   
        </Container>
        
      </Jumbotron>
    </div>
  );
};