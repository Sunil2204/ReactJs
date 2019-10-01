import React, { useState } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {
  const usersData = [
    { id: 1, name: 'Yash', username: 'Yash@123'},
    { id: 2, name: 'Sachin', username: 'Sachine@123'},
    { id: 3, name: 'Prakash', username: 'Prakash@123'},
    { id: 4, name: 'Sagar', username: 'Sagar@123'}
  ]

  const initialFormState = {id: null, name: '', username: ''}

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
        <h1><center>REACT-CRUD App</center></h1>
      <div className="flex-row">
        <div className="flex-large">

          {editing ? (
            <>
              <h2>Edit User</h2>
              <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                    />
              </>
          ) : (
            <>

            <h2>Add User</h2>
           <AddUserForm addUser = {addUser} />
                         
            </>
          )}
           </div>
           <div className="flex-large">
              <h2>All Users List</h2>
              <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
              </div>
      </div>
    </div>
  );
} 

export default App