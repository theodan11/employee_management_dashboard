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
        default:
            return state
    }
}