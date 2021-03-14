import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_Arma_tu_fiesta from "../../assets/img/projects/arma_tu_fiesta.png";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_Banco from "../../assets/img/projects/banco.png";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_Uno from "../../assets/img/projects/uno.png";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_PHP    from  '../../assets/img/skills/php.svg';
import L_MYSQL    from  '../../assets/img/skills/mysql.svg';
import L_VUEJS  from '../../assets/img/skills/vuejs.svg';
import L_NODEJS from "../../assets/img/skills/nodejs.svg";
import L_LARAVEL    from  '../../assets/img/skills/laravel.svg';
import L_JS from "../../assets/img/skills/javascript.svg";
import L_JAVA    from  '../../assets/img/skills/java.svg';

import "./projects-timeline-styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
           {/* Project: Banco */}
           <ImageEvent
            date="31/7/2019"
            className="text-center"
            text="Banco"
            src={L_Banco}
            alt="Banco"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to
                        search through robots fetched in real-time with users.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search through Robots</li>
                          <li>Users and Robots being fetched via API call</li>
                          <li>Usage of Redux store</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="MYSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MYSQL
                            </span>
                          </li>
                        
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Levitaxl/Banco"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Red-Social*/}
          <ImageEvent
            date="20/1/2020"
            className="text-center"
            text="Red-Social"
            src="https://raw.githubusercontent.com/Levitaxl/Red-Social/master/fotos/home1.png"
            alt="Red-Social"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_VUEJS}
                                alt="VUEJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              VUEJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BOOTSTRAP4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODEJS}
                                alt="Nodejs"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              NODEJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="POSTGRESQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              POSTGRESQL
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Levitaxl/Red-Social"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Dela Cream */}
          <ImageEvent
            date="11/2/2020"
            className="text-center"
            text="Dela Cream"
            src="https://raw.githubusercontent.com/Levitaxl/Ecommerce/master/fotos/home.png"
            alt="Dela Cream"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app calculates Tip for the amount entered and percentage of tip to be given.
                        It uses MERN stack build to acomplish the same.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_VUEJS}
                                alt="VUEJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              VUEJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BOOTSTRAP4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODEJS}
                                alt="Nodejs"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              NODEJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="POSTGRESQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              POSTGRESQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Levitaxl/Ecommerce"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project:Arma Tu Fiesta */}
          <ImageEvent
            date="22/4/2020"
            className="text-center"
            text="Arma Tu Fiesta"
            src={L_Arma_tu_fiesta}
            alt="Arma Tu Fiesta"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that searches
                        people on GitHub with non-private account and see all
                        their details using GitHub API
                        <hr />
               
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_LARAVEL}
                                alt="LARAVEL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              LARAVEL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BOOTSTRAP4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="POSTGRESQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              POSTGRESQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JS}
                                alt="JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JAVASCRIPT
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Levitaxl/armatufiesta"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: UNO(RS232) */}
          <ImageEvent
            date="23/01/2021"
            className="text-center"
            text="UNO(RS232)"
            src={L_Uno}
            alt="UNO(RS232)"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that detects face
                        in a picture.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="JAVA"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Levitaxl/Proyecto-Redes-l"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;