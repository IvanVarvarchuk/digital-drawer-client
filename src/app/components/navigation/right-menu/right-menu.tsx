import styles from './right-menu.module.css';
import { Menu, Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

export interface RightMenuProps {
  mode: 'inline' | 'vertical' | 'horizontal' | undefined,
}

export function RightMenu({ mode }: RightMenuProps) {
  const userName = "John Dir";
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined rev={undefined} />} />
            <span className="username">{userName}</span>
          </>
        }
      >
        <Menu.Item key="my-profile">
          <UserOutlined rev={undefined} /> Profile
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined rev={undefined} /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default RightMenu;
