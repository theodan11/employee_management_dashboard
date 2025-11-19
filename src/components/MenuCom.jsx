import React from 'react';
import { AppstoreOutlined, LayoutOutlined,  TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './MenuCom.css'
import { Link, useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'sub1',
    label: 'Dashboard',
    icon: <LayoutOutlined />,
    children: [
      {
        key: 'g1',
        label: '',
        type: 'group',
        children: [
          { key: '1', label: 'Overview' },
          { key: '2', label: 'Quick Stats' },
        ],
      },

    ],
  },
  {
    key: 'sub2',
    label: 'Employees',
    icon: <TeamOutlined />,
    children: [
      { key: 'allemployee', label: 'All Employees'},
      { key: 'addemployee', label: 'Add Employee' },
      { key: '5', label: 'Archived Employees' },
      { key: '6', label: 'Performance Scores' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  // {
  //   key: 'sub4',
  //   label: 'Navigation Three',
  //   icon: <SettingOutlined />,
  //   children: [
  //     { key: '9', label: 'Option 9' },
  //     { key: '10', label: 'Option 10' },
  //     { key: '11', label: 'Option 11' },
  //     { key: '12', label: 'Option 12' },
  //   ],
  // },
  // {
  //   key: 'grp',
  //   label: 'Group',
  //   type: 'group',
  //   children: [
  //     { key: '13', label: 'Option 13' },
  //     { key: '14', label: 'Option 14' },
  //   ],
  // },
];
const MenuCom = () => {
  const navigate = useNavigate()

  const onClick = e => {
    console.log('click ', e.keyPath);
    switch (e.keyPath[0]){
      case "allemployee":
        navigate("/allemployee")
        console.log('allemployee')
        break

      case "addemployee":
        navigate("/addemployee")
        break
    }
  };
  return (
    <div className="menu__container">
      <h1>Dashboard</h1>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </div>
  );
};
export default MenuCom;