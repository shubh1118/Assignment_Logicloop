import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Card from "./Components/Card";
import UserDetails from "./Components/UserDetails";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = useCallback(
    (e) => {
      const { value = "" } = e.target;
      setValue(value);
      if (!value) {
        setFilteredUsers(users);
      } else {
        setFilteredUsers(
          users.filter(
            (ele) =>
              ele.firstName.toLowerCase().includes(value.toLowerCase()) ||
              ele.lastName.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    },
    [users]
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        console.log(response);
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home users={filteredUsers} input={value} search={handleChange} />
          }
        />
        <Route path="/user/:id" element={<UserDetailsPage users={users} />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = ({ users, input, search }) => {
  return (
    <div className="parent-container">
      <div id="input">
        <div id="int-span">Rails and React ||: A real use case</div>
        <input
          id="int"
          type="text"
          value={input}
          onChange={search}
          placeholder="Search people..."
        />
      </div>
      <div className="card-container">
        {Array.isArray(users) &&
          users.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </div>
  );
};

const UserDetailsPage = ({ users }) => {
  return <UserDetails users={users} />;
};

export default App;
