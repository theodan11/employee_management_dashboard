import React, { useContext, useState } from 'react';
import { Button, message, Table } from 'antd';
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

const EmployeeTable = ({ isArchive = false }) => {
  const { dispatch, selectedEmployee } = useContext(EmployeeContext)

  const [pageSizevar, setPageSizevar] = useState(10)
  const { employees } = useContext(EmployeeContext)

  const [successMessageApi, successMessagecontextHolder] = message.useMessage();
  let filterNonArchivedEmployees
  if (isArchive) {

    filterNonArchivedEmployees = employees.filter((employee) => {
      return employee?.archive === true
    })
  } else {
    filterNonArchivedEmployees = employees.filter((employee) => {
      return employee?.archive === false
    })
  }

  const successMessage = (name) => {
    successMessageApi.open({
      type: 'success',
      content: `Employee archived : ${name}`
    });
  };

   const successDeleteMessage = (name) => {
    successMessageApi.open({
      type: 'success',
      content: `Employee deleted : ${name}`
    });
  };
  const handleDelete = (record) => {
    // console.log("called of the delete")
    dispatch({type: "DELETE_EMPLOYEE", payload: record})
    successDeleteMessage(record.name)
  }

  const onChange = (pagination, filters, sorter, extra) => {
    setPageSizevar(pagination.pageSize)
  };

  const handleArchive = (record) => {
    record.archive = true
    dispatch({
      type: "ARCHIVE_EMPLOYEE", payload: {
        id: record.id,
        archive: record
      }
    })
    successMessage(record.name)
  }

  const handleEdit = (id) => {
    dispatch({ type: "SELECT_EMPLOYEE", payload: id })
    dispatch({ type: "DRAWER_OPEN" })
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
      render: (date) => dayjs(date).format("DD MMM YYYY"),
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
      render: (text, record) => {
        return <div className='flex gap-2'>
          < Button size='small' onClick={() => handleEdit(record)}>Edit</Button>
          {
            isArchive? 
            <Button size='small' danger onClick={() => handleDelete(record)}>Delete</Button>
            :<Button size='small' danger onClick={() => handleArchive(record)}>Archive</Button>
          }
        </div>
      }

    },
  ];

  console.log(selectedEmployee)
  console.log(employees)

  return <>
    {successMessagecontextHolder}
    <Table
      pagination={
        {
          pageSize: pageSizevar,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 15, 20]
        }
      }

      columns={columns}
      dataSource={filterNonArchivedEmployees}
      onChange={() => onChange(setPageSizevar)}
      scroll={{ x: 'max-content', y: 55 * 10 }}
    />
  </>
}
export default EmployeeTable;