import { useContext, useEffect } from "react"
import { EmployeeContext } from "../context/EmployeeContext"
import './Overview.css'
const Overview = () => {
    const { dispatch,totalEmployee } = useContext(EmployeeContext)
    useEffect(()=>{
        dispatch({type:"TOTAL_EMPLOYEE"})
    }, [])
    return (
        <div>
            <h2>Overview</h2>
            <div className="Overview__card__container">
                <div className="card">
                    <h3>Total Employees</h3>
                    {totalEmployee}
                </div>
            </div>
        </div>
    )
}

export default Overview