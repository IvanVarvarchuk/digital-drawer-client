import { Button, Container, Row, Col } from 'react-bootstrap';
import styles from './home.module.css';
import LoginModal from '../../components/login-modal/login-modal';
import { useBoolean } from 'usehooks-ts';
import { useModal } from '../../hooks/use-modal/use-modal';
import useAuth from '../../hooks/use-auth/use-auth';
import { Link } from 'react-router-dom';
import { routes } from 'src/app/config/routes';

function Home() {
  const { isModalVisible, showModal, hideModal } = useModal();
  const { isAuthenticated } = useAuth();

  return (
    <Row md={2}>
      <Col>
        <Col className={styles.text}>
          <h1>Welcome to Digital Drawer!</h1>
          <p>
            Welcome to our file conversion web service! We specialize in
            transforming your architectural drawing images into CAD files with
            utmost precision. Our platform offers a range of conversion options,
            including IFC, DWG, and SVG formats. Whether you need to convert
            complex designs or simple sketches, we've got you covered.
            Experience seamless and accurate file conversions with our
            easy-to-use interface. Start converting your architectural drawings
            today.
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            {isAuthenticated ? (
              <Link to={routes.convert}>
                <Button size="lg" variant="dark">
                  Convert files
                </Button>
              </Link>
            ) : (
              <Button size="lg" variant="dark" onClick={showModal}>
                Log in
              </Button>
            )}
          </p>
        </Col>
      </Col>
      <img
        alt="landingImage"
        className={styles.image}
        src="./buildingsLanding.jpg"
        style={{ objectFit: 'scale-down', zIndex: -1 }}
      />
      <LoginModal authMode handleClose={hideModal} showModal={isModalVisible} />
    </Row>
  );
}

export default Home;
