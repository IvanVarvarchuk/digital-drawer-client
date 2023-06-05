import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import styles from './page-layout.module.css';
import Navigation from '../navigation/navigation';

/* eslint-disable-next-line */
export interface PageLayoutProps {}

export function PageLayout(props: PageLayoutProps) {
  return (
    <Layout>
      <Navigation/>
      <Outlet/>
    </Layout>
  );
}

export default PageLayout;
