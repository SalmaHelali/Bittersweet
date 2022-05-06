import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Navv() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/">
            Bittersweet accessories
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home" as={Link} to='/Home'  >Home</Nav.Link> */}
              <Nav.Link href="#about-us" as={Link} to="/Aboutus">
                {" "}
                About us{" "}
              </Nav.Link>
              <NavDropdown title="Accessories" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#Productlist"
                  as={Link}
                  to="/Productlist"
                >
                  {" "}
                  Necklaces
                </NavDropdown.Item>
                <NavDropdown.Item href="#bracelets" as={Link} to="/Bracelets">
                  Bracelets
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#login" as={Link} to="/Login">
                {" "}
                LOGIN{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navv;
