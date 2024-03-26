import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
function Header() {
  return (
    <header>
      <Navbar expand="xxl" className="bg-body-tertiary">
        <Container fluid>
          <img src="/Images/Logo.jpg" alt="logo"></img>
          <Navbar.Brand href="#">Nhà sách TL</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav>
            <button>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
