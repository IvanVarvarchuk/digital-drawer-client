import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styles from './navigation.module.css';
import { useBoolean } from 'usehooks-ts';
import { routes } from '../../config/routes';
import useAuth from '../../hooks/use-auth/use-auth';
import LoginModal, { AuthMode } from '../login-modal/login-modal';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function ProfileNavItem() {
  const { user, logout, isAuthenticated } = useAuth();
  const {
    value: isLoginMoalVisible,
    setFalse: hideLoginModal,
    setTrue: showModal,
  } = useBoolean(false);
  const {
    value: isLoginMode,
    setFalse: setSignUpMode,
    setTrue: setLoginMode,
  } = useBoolean(true);

  const openLoginModal = () => {
    showModal();
    setLoginMode();
  };
  const openSignUpModal = () => {
    showModal();
    setSignUpMode();
  };

  return isAuthenticated ? (
    <Nav>
      <NavDropdown title={`${user?.userName} ${user?.email}`} id="collasible-nav-dropdown">
        <NavDropdown.Item href={routes.profile}>My profile</NavDropdown.Item>
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  ) : (
    <>
      <Nav>
        <NavDropdown title="Log In" id="collasible-nav-dropdown">
          <NavDropdown.Item onClick={openLoginModal}>Log In</NavDropdown.Item>
          <NavDropdown.Item onClick={openSignUpModal}>Sign Up</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <LoginModal
        authMode={isLoginMode ? AuthMode.LogIn : AuthMode.SignUp}
        showModal={isLoginMoalVisible}
        handleClose={hideLoginModal}
      />
    </>
  );
}

export function Navigation(props: NavigationProps) {
  const { isAuthenticated } = useAuth();
  return (
    <Navbar
      className={styles.header}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="\">Digital Drawer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={routes.about}>About us</Nav.Link>
            {isAuthenticated && (
              <Nav.Link href={routes.convert}>Convert files</Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link href={routes.convesionHistory}>
                Converion history
              </Nav.Link>
            )}
          </Nav>
          <ProfileNavItem />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
