import React, { useState, useContext } from 'react'
import { StudentContext } from '../context/StudentState'

export const AddStudent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [major, setMajor] = useState('')

  const { addStudent } = useContext(StudentContext);

  const onSubmit = e => {
    e.preventDefault();

    const newStudent = {
      name,
      email,
      major
    }

    addStudent(newStudent)
  }

  return (
    <div>
      <h3>Add new Student</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) =>
            setName(e.target.value)} placeholder="Enter name..." />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) =>
            setEmail(e.target.value)} placeholder="Enter email..." />
        </div>
        <div>
          <label>Major</label>
          <input type="text" value={major} onChange={(e) =>
            setMajor(e.target.value)} placeholder="Enter major..." />
        </div>
        <button>Add Student</button>
      </form>
    </div>
  )
}
