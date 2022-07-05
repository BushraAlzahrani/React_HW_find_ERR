import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Container, Nav } from "react-bootstrap"

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link  href="/Cards">Images</Nav.Link>
      <Nav.Link  href="/About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  );
}

export default Header;
