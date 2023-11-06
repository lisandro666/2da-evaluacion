//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/Home">Home</Link>
            <Link to="/Favs">Favs</Link>
            <Link to="/Contact">Contacts</Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

