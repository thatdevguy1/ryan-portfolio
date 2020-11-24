import React from "react";
import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

export default function Navbar() {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="">
        Ryan Browne Web Developer
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.NavDropdown
            title="Navigate My Site"
            id="collasible-nav-dropdown"
          >
            {/*WRAP LINKS IN NAVLINK AND USE to="" INSTEAD OF HREF*/}
            <NavLink to="/">
              <ReactBootStrap.NavDropdown.Item>
                Home
              </ReactBootStrap.NavDropdown.Item>
            </NavLink>

            <NavLink to="/portfolio">
              <ReactBootStrap.NavDropdown.Item>
                Portfolio
              </ReactBootStrap.NavDropdown.Item>
            </NavLink>
            <ReactBootStrap.NavDropdown.Item href="/contact">
              Contact
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="https://github.com/ryanbrowne360">
              Connect With Me On GitHub!
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="https://github.com/ryanbrowne360/PortfolioPageUpdate1/blob/main/Ryan%20Browne%20Web%20Developer%20Resume%20.pdf">
            Please See My Resume Here
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}
