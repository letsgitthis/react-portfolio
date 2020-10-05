import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">John Bentley</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#body">Home</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </header>
  );
}

export default Header;
