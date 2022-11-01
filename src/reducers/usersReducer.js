let usersReducer = (users=[], action) => {
    console.log(action.payload)
    switch(action.type){
        case "save":
            return action.payload
        case "delete":
            return users.filter(user=>user.id!=action.payload)
        default:
            return users
    }
}
export default usersReducer;