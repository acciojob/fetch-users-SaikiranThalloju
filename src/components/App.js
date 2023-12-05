
import React,{useEffect,useState} from "react";
import './../styles/App.css';
import 'regenerator-runtime/runtime';
import axios from "axios"

const App = () => {
const [people , setPeople] = useState([]);

const getUsers = async()=>{
  // const res = await fetch('https://reqres.in/api/users');
  // const data = await res.json();
  const data = await axios.get("https://reqres.in/api/users")
  console.log(data.data.data);
setPeople(data.data.data);
}

// useEffect(()=>{
// getUsers();
// },[]);

  return (
    <div>
        {/* Do not remove the main div */}
        <header className = "nav">
          <h1>Blue Whales</h1>
          <button onClick={getUsers}>Get Users List</button>
        </header>

        <table>
          <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
</tr>
          </thead>

          <tbody>
            {
              people.length === 0 ? ('No data found to display'):
                  people.map((person,index) =>{
                    return <tr key = {index}>
<td>{person.first_name}</td>
<td>{person.last_name}</td>
<td>{person.email}</td>
<td><img src = {person.avatar} alt = "img" /></td>
                    </tr>
                  })}
          </tbody>

        </table>
    </div>
  )
}

export default App
