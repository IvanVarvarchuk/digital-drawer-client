import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styles from './navigation.module.css';
import { routes } from "../../config/routes";
import useAuth from '../../auth/use-auth/use-auth';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function ProfileNavItem() {
  const { userName, isAuthenticated, onLogin, onLogout, onSignUp } = useAuth();
  return (
  isAuthenticated? 
  <Nav>
    <NavDropdown title={userName} id="collasible-nav-dropdown">
      <NavDropdown.Item href={routes.profile}>My profile</NavDropdown.Item>
      <NavDropdown.Item onClick={onLogout}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>      
  </Nav>
  :
  <Nav>
    <NavDropdown title='Log In' id="collasible-nav-dropdown">
      <NavDropdown.Item onClick={onLogin}>Log In</NavDropdown.Item>
      <NavDropdown.Item onClick={onSignUp}>
        Sign Up
      </NavDropdown.Item>
    </NavDropdown>      
  </Nav>
  );
}
export function Navigation(props: NavigationProps) {
  const { isAuthenticated } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="\">Digital Drawer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href={routes.about}>About us</Nav.Link>
          {isAuthenticated && <Nav.Link href={routes.convert}>Convert files</Nav.Link>}
          {isAuthenticated && <Nav.Link href={routes.convesionHistory}>Converion history</Nav.Link>}
        </Nav>
        <ProfileNavItem/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navigation;
