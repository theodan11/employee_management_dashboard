import EmployeeTableSort from '../components/EmployeeTableSort'
import DrawerCom from '../components/DrawerCom'

import './AllEmployee.css'
const AllEmployee = () => {
  return (
    <div className="allemployee__container">
        <h2>All Employees</h2>
        <EmployeeTableSort isArchive={false}/>
        <DrawerCom/>
    </div>
  )
}

export default AllEmployee