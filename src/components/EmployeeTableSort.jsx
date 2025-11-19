import React, { useContext, useState } from 'react';
import { Table } from 'antd';
import { EmployeeContext } from '../context/EmployeeContext';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
      multiple: 1,
    },
  },
  {
    title: 'Department',
    dataIndex: 'department',
    sorter: {
      compare: (a, b) => a.department.localeCompare(b.department),
      multiple: 2,
    },
  },
  {
    title: 'Role',
    dataIndex: 'role',

  },
  {
    title: 'Joining Date',
    dataIndex: 'join',
    sorter: {
      compare: (a, b) => a.join - b.join,
      multiple: 2,
    },
  },
  {
    title: 'Stutus',
    dataIndex: 'status',

  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    department: 18,
    role: 60,
    join: 70,

    status: 'idle'
  },
  {
    key: '2',
    name: 'Jim Green',
    department: 98,
    role: 66,
    join: 89,

    status: 'idle'
  },

];

const EmployeeTable = () => {

  const [pageSizevar, setPageSizevar] = useState(10)
  const { employees } = useContext(EmployeeContext)
  console.log(employees)

  const onChange = (pagination, filters, sorter, extra) => {
    setPageSizevar(pagination.pageSize)
  };

  return <Table
    pagination={
      {
        pageSize: pageSizevar,
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 15, 20]
      }
    }
    columns={columns}
    dataSource={employees}
    onChange={() => onChange(setPageSizevar)}
    scroll={{ x: 'max-content', y: 55 * 10 }}
  />;
}
export default EmployeeTable;