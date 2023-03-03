import React from "react";
import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [Users, setUsers] = useState([]);
  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { username: username, age: age, id: Math.random() },
      ];
    });
  };
  
  

  return (
    <div>
      <AddUser OnAddinfoHandler={addUserHandler} />
      <UserList users={Users} />
    </div>
  );
}

export default App;
