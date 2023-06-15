import { Row } from 'antd';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import { Container } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface PageLayoutProps {}

export function PageLayout(props: PageLayoutProps) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <Container className="mt-5">
        <Outlet />
      </Container>
    </div>
  );
}

export default PageLayout;
