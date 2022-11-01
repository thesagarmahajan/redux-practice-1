import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUsers } from './actions';
import Table from './Table';

function App() {
  let users = useSelector(state=>state.users)
  let dispatch = useDispatch()
  let [fetchStatus, setFetchStatus] = useState(false)
  let [mountTable, setMountTable] = useState(true)
  useEffect(() => {
    fetch("https://reqres.in/api/users").then(res=>res.json()).then(data=>{
      let allUsers = data.data
      // console.log(allUsers)
      setFetchStatus(true)
      dispatch(saveUsers(allUsers))
    })
  }, []);
  return (
    <div className="App">
      {
         fetchStatus?<h1>Fetch Completed</h1>:<h1>Fetching Users...</h1>
      }
      <button onClick={()=>setMountTable(!mountTable)}>Bind in Table</button>
      {
        mountTable?<Table />:""
      }
    </div>
  );
}

export default App;
