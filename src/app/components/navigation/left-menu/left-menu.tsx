import { Menu } from 'antd';
import styles from './left-menu.module.css';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface LeftMenuProps extends PropsWithChildren {
  mode: 'inline' | 'vertical' | 'horizontal' | undefined,
}

export function LeftMenu({ mode, children }: LeftMenuProps) {
  return (
    <Menu mode={mode}>
      {children}
    </Menu>
  );
}

export default LeftMenu;
