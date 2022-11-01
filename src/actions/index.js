export let saveUsers = (users) => {
    return {
        type:"save",
        payload:users
    }
}
export let deleteUser = (id) => {
    return {
        type:"delete",
        payload:id
    }
}