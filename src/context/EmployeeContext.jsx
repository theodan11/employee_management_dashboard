import { createContext, useEffect, useReducer } from "react"
import { EmployeeReducer } from "./EmployeeReducer"

const INITIAL_STATE = {
    employees: [
        {
            name: "Theophil Dango",
            department: "cse",
            status: "Noob",
            join: '2d',
            role: "CEO"
        }
    ],
    // employees: JSON.parse(localStorage.getItem("employees")) | [],
    status: 'idle',
    error: null
}

export const EmployeeContext = createContext(INITIAL_STATE)

export const EmployeeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EmployeeReducer, INITIAL_STATE)

    useEffect(() => {

    }, [])



    return <EmployeeContext.Provider value={
        {
            employees: state.employees,
            dispatch,
            status: state.status
        }

    }>
        {children}
    </EmployeeContext.Provider>
}


