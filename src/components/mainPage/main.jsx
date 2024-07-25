import React, { useState } from 'react'
import "./main.css"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Chat from '../chat/chat';


export default function Main() {

    const [users, setUsers] = useState(["Jack", 'Anita', 'Mike', 'Hailey']);
    const [newUser, setNewUser] = useState("");

    function handleInputChange(event) {
        setNewUser(event.target.value)
    }

    function addUser() {
        if (newUser.trim() !== "") {
            setUsers(_ => [...users, newUser])
            setNewUser("")
        }

    }

    function deleteUser(index) {
        const updatedUser = users.filter((_, i) => i !== index)
        setUsers(updatedUser)
    }

    function moveUserUp(index) {
        if (index > 0) {
            const updatedUser = [...users];
            [updatedUser[index], updatedUser[index - 1]] =
                [updatedUser[index - 1], updatedUser[index]]
            setUsers(updatedUser)
        }
    }

    function moveUserDown(index) {
        if (index < users.length - 1) {
            const updatedUser = [...users];
            [updatedUser[index], updatedUser[index + 1]] =
                [updatedUser[index + 1], updatedUser[index]]
            setUsers(updatedUser)
        }
    }

    return (
        <Router>
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <div className="chattArea">CHATTY</div>
          <div className="formWrap">
            <input
              type="text"
              placeholder="type a name"
              value={newUser}
              onChange={handleInputChange}
            />
            <button className="add-button" onClick={addUser}>
              Add a new friend
            </button>
          </div>
          <ol>
            {users.map((user, index) => (
              <li key={index}>
                <span className="text">{user}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </button>
                <button className="move-button" onClick={() => moveUserUp(index)}>
                  Up
                </button>
                <button className="move-button" onClick={() => moveUserDown(index)}>
                  Down
                </button>
                <Link to={`/chat/${user}`}>
                  <button className="move-button">Chat</button>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      }
    />
    <Route path="/chat/:userName" element={<Chat />} />
  </Routes>
</Router>)
}
