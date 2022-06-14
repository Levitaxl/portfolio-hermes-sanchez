import React from "react";
import { Timeline, Events, UrlButton, ImageEvent,themes,createTheme  } from "@merc/react-timeline";

// projects
import L_Arma_tu_fiesta from "../../assets/img/projects/arma_tu_fiesta.png";
import L_Banco from "../../assets/img/projects/banco.png";
import L_Sockets from "../../assets/img/projects/sockets.png";
import L_python_c from   "../../assets/img/projects/python_competencies.png";
import L_ucabdito from   "../../assets/img/projects/ucabdito.png";
import L_Uno from "../../assets/img/projects/uno.png";
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
import L_PYTHON    from  '../../assets/img/skills/python.svg';

import "./projects-timeline-styles.css";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#696969',
  },
  marker: {
    borderColor: '#696969',
  },
  timelineTrack: {
    backgroundColor: '#696969',
  },
});


const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
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
                        <strong>Description:</strong>  Web application that has basic functionalities of a social network such as uploading images, giving likes and adding comments
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
                        <strong>Description:</strong> Dela cream is a virtual ice cream shop where you can buy and sell ice cream to the general public.
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
                        <strong>Description:</strong> UNO game with RS232 connection.

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

          {/* Project: SOCKET CONNECTIOn */}
          <ImageEvent
            date="19/11/2021"
            className="text-center"
            text="SOCKET CONNECTION (TCP/IP/UDP)"
            src={L_Sockets}
            alt="SOCKET CONNECTION (TCP/IP/UDP)"
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
                        <strong>Description:</strong> Project that uses TCP/IP or UDP sockets for the transfer of information.

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
                  href="https://github.com/Levitaxl/Mini-aplicativo-distribuidos/tree/main/src/mini_aplicativo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Python User COMPETENCIES  */}
          <ImageEvent
            date="26/11/2021"
            className="text-center"
            text="PYTHON USER COMPETENCIES"
            src={L_python_c}
            alt="SPYTHON USER COMPETENCIES"
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
                        <strong>Description:</strong> PYTHON USER COMPETENCIES is a project that manages the handling of user information through json, using SOLID principles

                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
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
                  href="https://github.com/Levitaxl/Proyecto-1-python/tree/main"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: UCABDITO  */}
          <ImageEvent
            date="29/01/2022"
            className="text-center"
            text="UCABDITO"
            src={L_ucabdito}
            alt="UCABDITO"
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
                        <strong>Description:</strong> Ucabdito is a virtual food shop.

                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                              //test
                                src={L_LARAVEL}
                                alt="Laravel"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Laravel
                              </span>
                            </li>
                            <li>
                            <span className="p-2">
                              <Image
                              //test
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                              </span>
                            </li>

                            <li>
                            <span className="p-2">
                              <Image
                              //test
                                src={L_POSTGRESQL}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Postgresql
                              </span>
                            </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-left flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Levitaxl/Ucabdito"
                  target="_blank"
                >
                  SOURCE BACKEND
                </UrlButton>

                <UrlButton
                  href="https://github.com/Levitaxl/Proyecto-SQA-React"
                  target="_blank"
                >
                  SOURCE FRONTEND
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