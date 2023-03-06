import React from 'react';
import { Container, Navbar, Col, Dropdown } from 'react-bootstrap';

const TopBar1 = () => (
  <Navbar expand-lg bg="dark">
    <Container className="text-center">
      <Col>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="navFont">GET A $20 BONUS REWARD</Dropdown.Toggle>
        </Dropdown>
      </Col>
    </Container>
  </Navbar>
);
export default TopBar1;
