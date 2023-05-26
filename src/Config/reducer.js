const initialState = {
    users:[
        {
            id:1,
            name:"John",
            email:"john@gmail.com"
        },
        {
            id:2,
            name:"Jane",
            email:"jane@gmail.com"
        },
        {
            id:3,
            name:"Joe",
            email:"joe@gmail.com"
        }
    ]
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_USER":
            return {...state, users:[...state.users, action.payload]}
        case "UPDATE_USER":
            const user = state.users.find((u)=>u.id===parseInt(action.payload.id))
            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }
            return state
        case "REMOVE_USER":
            return {...state, users:[...state.users.filter((u)=>u.id!==parseInt(action.payload))]}
        default:
            return state
    }
}

export default reducer;