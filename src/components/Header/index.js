import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Header() {
  return (
    <header>
      <Navbar expand="xxl" className="bg-body-tertiary Header">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="logo" src="/images/Logo.ico" width="100" height="100" className="d-inline-block align-center" />{' '}
            Nhà Sách TL
          </Navbar.Brand>
          <Form className="d-flex seach">
            <Form.Control
              type="search"
              placeholder="Seach for book"
              className="me-2"
              aria-label="Search"
              spellCheck={false}
            />
            <button className="searchBtn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form>
          <Nav>
            <ButtonGroup aria-label="Basic example">
              <ButtonGroup aria-label="Basic example">
                <Button className="buttonColor">
                  <FontAwesomeIcon icon={faBell} />
                </Button>
                <Button className="buttonColor">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
                <Button className="buttonColor">
                  <FontAwesomeIcon icon={faUser} />
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
