import {  LayoutOutlined,  TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './MenuCom.css'
import {  useNavigate } from 'react-router-dom';

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
          { key: 'overview', label: 'Overview' },
          // { key: '2', label: 'Quick Stats' },
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
      { key: 'archiveemployee', label: 'Archived Employees' },
      { key: '6', label: 'Performance Scores' },
  
    ],
  },
  {
    type: 'divider',
  },

];
const MenuCom = () => {
  const navigate = useNavigate()

  const onClick = e => {
    // console.log('click ', e.keyPath);
    switch (e.keyPath[0]){
      case "allemployee":
        navigate("/allemployee")
        console.log('allemployee')
        break

      case "addemployee":
        navigate("/addemployee")
        break
      
      case "archiveemployee":
        navigate("/archiveemployee")
        break

          case "overview":
        navigate("/overview")
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