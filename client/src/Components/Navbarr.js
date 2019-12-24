import React, { useState } from "react";
import { Link as RRNavLink, BrowserRouter as Router, Switch } from "react-router-dom";


import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";


const Navbarr = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#39ff14",
          alignItems: "center",
          display: "flex"
        }}
        light
        expand="lg"
      >
        <NavbarBrand className="mr-7" href="/">
          BUGZY
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">HOME</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="mr-6">
                DASHBOARD
              </DropdownToggle>
              <DropdownMenu right className="nav-links">
           
                
                      {/* <IndexLinkContainer exact to ="/projects" > */}
                  <DropdownItem
                    tag={props => (
                      <RRNavLink
                        to="/projects/new"
                        {...props}
                       
                      />
                    )}
                  >
                    ADD NEW PROJECT
                  </DropdownItem>
                  {/* </IndexLinkContainer> */}
                 
                
              

                <DropdownItem
                 tag={props => (
                  <RRNavLink
                    to="/bugs/new"
                    {...props}
                   
                  />
                )}
                >ADD NEW BUG</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>ADD NEW USER</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                REPORTS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>VIEW PROJECTS</DropdownItem>
                <DropdownItem>VIEW BUGS</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>VIEW USERS</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>LOG OUT</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
