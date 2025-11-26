export const EmployeeReducer = (state, action) => {
    switch (action.type) {

        case "PROGRESSING":
            return {
                ...state,
                status: 'pending'
            }
        case "ADD_EMPLOYEE":
            console.log(state)

            return {
                ...state,
                employees: [...state.employees, action.payload],
                status: "success"
            }

        case "SELECT_EMPLOYEE":
            console.log("hello", action.payload)
            return {
                ...state,
                selectedEmployee: action.payload
            }

        case "DRAWER_OPEN":
            return {
                ...state,
                isDrawerOpen: true
            }

        case "DRAWER_CLOSE":
            return {
                ...state,
                isDrawerOpen: false,
                selectedEmployee: null
            }


        case "EDIT_EMPLOYEE":
            console.log(`from reducer updatedInfo:  ${action.payload.updatedInfo}`)
            console.log(`from reducer id: ${action.payload.id}`)
            return {
                ...state,
                employees: state.employees.map((employee) =>
                    employee.id === action.payload.id ? {...employee, ...action.payload.updatedInfo }: employee
                ),
                // isDrawerOpen: false,
                // selectedEmployee: null,
            }

        case "ARCHIVE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.map((employee)=>{
                    return employee.id === action.payload.id ? {...employee, ...action.payload.archive}: employee
                })
            }

        default:
            return state
    }
}