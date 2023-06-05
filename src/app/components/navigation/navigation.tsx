import styles from './navigation.module.css';
import React, { useEffect, useState } from 'react';
import { Layout, Button, Drawer, Menu } from 'antd';
import LeftMenu from './left-menu/left-menu';
import RightMenu from './right-menu/right-menu';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  const { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  // Upto here

  return (
    <nav className={styles["navbar"]}>
      <Layout>
        <Layout.Header className={styles["nav-header"]}>
          <div className={styles["logo"]}>
            <h3 className={styles["brand-font"]}>Brand Here</h3>
          </div>
          <div className={styles["navbar-menu"]}>
            <div className={styles["leftMenu"]}>
              <LeftMenu mode={'horizontal'}>
                <Link to="/">
                  <Menu.Item>Home</Menu.Item>
                </Link>
                <Link to="/about">
                  <Menu.Item>About Us</Menu.Item>
                </Link>
                <Link to="/convert">
                  <Menu.Item>Convert</Menu.Item>
                </Link>
                <Link to="/conversion-history">
                  <Menu.Item>Conversion History</Menu.Item>
                </Link>
              </LeftMenu>
            </div>
            <Button className={styles["menuButton"]} type="text" onClick={showDrawer}>
              <MenuOutlined rev={undefined} />
            </Button>
            <div className={styles["rightMenu"]}>
              <RightMenu mode={'horizontal'} />
            </div>

            <Drawer
              title={'Brand Here'}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={'inline'} />
              <RightMenu mode={'inline'} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
}

export default Navigation;
