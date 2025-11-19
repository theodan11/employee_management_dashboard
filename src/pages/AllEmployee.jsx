import EmployeeTableSort from '../components/EmployeeTableSort'
import './AllEmployee.css'
const AllEmployee = () => {
  return (
    <div className="allemployee__container">
        <h2>All Employees</h2>
        <EmployeeTableSort/>
    </div>
  )
}

export default AllEmployee