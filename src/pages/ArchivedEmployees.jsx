import EmployeeTableSort from '../components/EmployeeTableSort'
import DrawerCom from '../components/DrawerCom'
import './archiveEmployees.css'

const ArchivedEmployees = () => {
    return (
        <div className='archive__container'>
            <h2>Archived Employees</h2>
            <EmployeeTableSort isArchive={true} />
            <DrawerCom />
        </div>
    )
}

export default ArchivedEmployees