import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./actions";

function Table(){
    let users = useSelector(state => state.users)
    let dispatch = useDispatch()
    /* let [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://reqres.in/api/users").then(res=>res.json()).then(data=>{
            let allUsers = data.data
            setUsers(allUsers)
        })
    }, []); */
    return (<>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>{
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><img src={user.avatar} /></td>
                                <td><button onClick={()=>dispatch(deleteUser(user.id))}>DELETE</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>)
}

export default Table;