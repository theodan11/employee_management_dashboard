import EmployeeTableSort from '../components/EmployeeTableSort'
import DrawerCom from '../components/DrawerCom'

const ArchivedEmployees = () => {
    return (
        <div>
            <h2>Archived Employees</h2>
            <EmployeeTableSort isArchive={true} />
            <DrawerCom />
        </div>
    )
}

export default ArchivedEmployees