import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentState'
import { Student } from './Student'

export const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h3>Students</h3>
      <ul>
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </ul>
    </div>
  )
}
