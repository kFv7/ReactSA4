import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavScrollExample() {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token'); 

  navigate('/login');
   };
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">            
        <img
              src="/Images/a.jpeg"
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="register">Cadastro</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="reservation">Reserva</Nav.Link>
            <Nav.Link href="login">Logout</Nav.Link>
          </Nav>
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavScrollExample;