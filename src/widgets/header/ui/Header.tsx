import { PAGE_PATH } from '@shared/lib/react-router';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to={PAGE_PATH.friends.root} as={Link}>
          Friends App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to={PAGE_PATH.page404} as={Link}>
              About
            </Nav.Link>
            <Nav.Link to={PAGE_PATH.friends.new} as={Link}>
              Add Friend
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
