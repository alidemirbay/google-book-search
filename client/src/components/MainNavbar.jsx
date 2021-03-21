import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/search">GOOGLE BOOKS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> </Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/search">SEARCH</Nav.Link>
        <Nav.Link href="/saved">SAVED BOOKS</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MainNavbar;
