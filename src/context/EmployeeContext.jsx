import { createContext, useEffect, useReducer } from "react"
import { EmployeeReducer } from "./EmployeeReducer"

// const INITIAL_STATE = {
//     employees: [
//         {   
//             key: 1,
//             id: 1,
//             name: "Theophil Dango",
//             department: "cse",
//             status: "Noob",
//             join: "9 Nov, 2025",
//             role: "CEO"
//         }

//     ],
//     // employees: JSON.parse(localStorage.getItem("employees")) | [],
//     selectedEmployee: null,
//     isDrawerOpen : false,
//     status: 'idle',
//     error: null
// }

const INITIAL_STATE = {
    employees: JSON.parse(localStorage.getItem("employeeState"))|| [],
    // employees: JSON.parse(localStorage.getItem("employees")) | [],
    selectedEmployee: null,
    isDrawerOpen : false,
    status: 'idle',
    error: null
}

export const EmployeeContext = createContext(INITIAL_STATE)

export const EmployeeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EmployeeReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("employeeState", JSON.stringify(state.employees))
    }, [dispatch, state])



    return <EmployeeContext.Provider value={
        {
            employees: state.employees,
            dispatch,
            status: state.status,
            isDrawerOpen: state.isDrawerOpen,
            selectedEmployee: state.selectedEmployee
            
        }

    }>
        {children}
    </EmployeeContext.Provider>
}


