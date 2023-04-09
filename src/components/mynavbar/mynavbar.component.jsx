import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import "./mynavbar.styles.css";


export const MyNavbar = () => {
    return (
      <div>
        <Navbar
          fixed="top"
          variant="dark"
          expand="md"
          className="animate-navbar nav-theme justify-content-between"
        >
          <div>
            <Navbar.Brand href="#home">
             
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">Yo</Nav.Link>
                <Nav.Link href="#skills">Habilidades</Nav.Link>
                <Nav.Link href="#experience">Experiencia</Nav.Link>
                <Nav.Link href="#projects">Proyectos</Nav.Link>
                <Nav.Link href="#contact">Contáctame</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  };