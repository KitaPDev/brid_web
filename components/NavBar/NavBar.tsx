import { FunctionComponent, useState } from "react";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";

import { withTranslation } from "react-i18next";

import {
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const NavBar: FunctionComponent = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color="white" light expand="xl">
      <NavbarBrand href="/">
        <img id="navbar-brand" src="/logo-navbar.png" alt="logo"></img>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Modules
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>...Modules</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Industries
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>...Industries</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <a href="/news">News</a>
          </NavItem>
          <NavItem>
            <a href="/support">Support</a>
          </NavItem>
          <NavItem>
            <a href="/careers">Careers</a>
          </NavItem>
          <NavItem id="contact-us">
            <Button id="btn-contact-us">
              Contact Us
              <a href="/contact-us"></a>
            </Button>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Language
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>TH</DropdownItem>
              <DropdownItem>EN</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
