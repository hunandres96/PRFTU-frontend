import React, { createContext, useReducer } from 'react'
import StudentReducer from './StudentReducer'

// Initial state
const initalState = {
  students: [
    { id: 1, name: 'Andres Hun', email: 'hunandres@gmail.com', major: 'IS' },
    { id: 2, name: 'Miguel Hun', email: 'hunmiguel@gmail.com', major: 'CS' },
    { id: 3, name: 'Odette', email: 'odette@gmail.com', major: 'Business' }
  ]
}

// Create context
export const StudentContext = createContext(initalState);

// Provider component
export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StudentReducer, initalState)

  // Actions
  function addStudent(student) {
    dispatch({
      type: 'ADD_STUDENT',
      payload: student
    })
  }

  function deleteStudent(id) {
    dispatch({
      type: 'DELETE_STUDENT',
      payload: id
    })
  }

  return (
    <StudentContext.Provider value={{
      students: state.students,
      addStudent,
      deleteStudent
    }} >
      {children}
    </StudentContext.Provider>
  )
}
