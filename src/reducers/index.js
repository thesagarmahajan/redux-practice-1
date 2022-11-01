import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";

let reducer = combineReducers({
    users:usersReducer
})

export default reducer;