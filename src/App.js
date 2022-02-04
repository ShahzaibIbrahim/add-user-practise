import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const dummyUsers = [
  { username: "Shah", age: "25"}, 
  { username: "Saqib", age: "32"}, 
  { username: "Babar", age: "28"}, 
  { username: "Hamza", age: "24"}, 
];

function App() {
  
  const [users, setUsers] = useState(dummyUsers);

  const addUserHandler = (newUser) => {
    console.log("New User Added: " + newUser);

    setUsers((prevUsers) => { 
      return [newUser, ...prevUsers]
    });
  }

  return (
    <div>
        <AddUser addUser={addUserHandler}></AddUser>
        <UserList users={users}></UserList>
    </div>
  );
}

export default App;
