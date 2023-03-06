import React from 'react';
import { Container, NavbarBrand, NavLink, Navbar, Nav, NavItem, Form, Button, Image, InputGroup } from 'react-bootstrap';
import { Person, Heart, Bag, Search } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar expand="lg" className="py-0">

    <Navbar>
      <NavbarBrand href="#"><Image src="/images/adidas-logo.avif" width="65px" /></NavbarBrand>
    </Navbar>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Container>
        <Nav className="center-item">
          <NavItem><NavLink className="active" aria-current="page"><strong>MEN</strong></NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page"><strong>WOMEN</strong></NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page"><strong>KIDS</strong></NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page">SALE</NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page">3 STRIPE LIFE</NavLink></NavItem>
        </Nav>
      </Container>

      <Nav>
        <NavItem>
          <InputGroup>
            <Form.Control placeholder="Search" aria-label="Search" />
            <Button variant="outline-dark">
              <Search />
            </Button>
          </InputGroup>
        </NavItem>
        <NavItem><NavLink href="#"><Person /></NavLink></NavItem>
        <NavItem><NavLink href="#"><Heart /></NavLink></NavItem>
        <NavItem><NavLink href="#"><Bag /></NavLink></NavItem>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
);

export default TopMenu;
