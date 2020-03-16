import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentState'
import { StudentList } from './StudentList'

export const Student = ({ student }) => {
  const { deleteStudent } = useContext(StudentContext)

  return (
    <li>
      {student.name}
      <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
    </li>
  )
}
