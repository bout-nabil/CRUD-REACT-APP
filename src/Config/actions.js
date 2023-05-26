export const addUserAction = (user) => {
    return {type: "ADD_USER", payload:user}
}
export const updateUserAction = (newuser) => {
    return {type: "UPDATE_USER", payload:newuser}
}
export const removeUserAction = (id) => {
    return {type: "REMOVE_USER", payload:id}
}