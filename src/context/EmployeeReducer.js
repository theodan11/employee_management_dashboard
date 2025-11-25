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
                selectedEmployee:  action.payload
            }

        case "DRAWER_OPEN":
            return {
                ...state,
                isDrawerOpen: true
            }

        case "DRAWER_CLOSE":
            return{
                ...state,
                isDrawerOpen: false,
                selectedEmployee: null
            }

        default:
            return state
    }
}