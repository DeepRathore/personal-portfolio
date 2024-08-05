import { Navbar, Container } from 'react-bootstrap/Navbar';
import { useState } from 'react';

export const Navbar = () => {
  const {activeLinks, setActiveLinks} = useState('home');

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src='{}' alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-mobile-icon'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icons'>
              <a href="#"><img src="{}" at="Github" /></a>
              <a href="#"><img src="{}" at="LinkedIn" /></a>
            </div>
          </span>
          <Nav.Link href="#connect">Let's connect</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}