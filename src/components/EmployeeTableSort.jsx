import React, { useContext, useState } from 'react';
import { Button, Table } from 'antd';
import { EmployeeContext } from '../context/EmployeeContext';
import dayjs from "dayjs";
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
  const {dispatch,  selectedEmployee} = useContext(EmployeeContext)

  const [pageSizevar, setPageSizevar] = useState(10)
  const { employees } = useContext(EmployeeContext)


  const onChange = (pagination, filters, sorter, extra) => {
    setPageSizevar(pagination.pageSize)
  };

  const handleEdit = (id)=>{
    dispatch({type: "SELECT_EMPLOYEE", payload:id})
    dispatch({type: "DRAWER_OPEN"})
  }

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
     width: 120
  },
  {
    title: 'Role',
    dataIndex: 'role',

  },
  {
    title: 'Joining Date',
    dataIndex: 'join',
    width: 120,
    render: (date)=> dayjs(date).format("DD MMM YYYY"),
    sorter: {
      compare: (a, b) => a.join - b.join,
      multiple: 2,
    },
     
  },
  {
    title: 'Stutus',
    dataIndex: 'status',

  },
  {
    title: 'Actions',
 
    width: 150,
    render: (text, record)=>{
      return <div className='flex gap-2'>
       < Button size='small'   onClick={()=>handleEdit(record)}>Edit</Button>
        <Button size='small'  danger>Delete</Button>
      </div>
    }

  },
];

console.log(selectedEmployee)
console.log(employees)

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